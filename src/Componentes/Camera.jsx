import { useState, useEffect, useRef } from "react";

export function Camera({ onFotoTirada }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        iniciarCamera();
    }, [])

    const iniciarCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            if (videoRef.current) {
                videoRef.current.srcObject = stream
            }
        } catch (error) {
            console.log("Erro ao acessar a camera", error)
        }
    }

    const tirarFoto = () => {
        const video = videoRef.current
        const canvas = canvasRef.current
        const foto2d = canvas.getContext("2d")

        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        foto2d.drawImage(video, 0, 0, video.videoWidth, canvas.height)
        const imagem = canvas.toDataURL('image/png');
        setFoto(imagem)

        if (onFotoTirada) {
            onFotoTirada(imagem)
        }
    }

    const reiniciar = () => {
        setFoto(null);
        iniciarCamera();
    }

    return (
        <section className="absolute inset-0 flex justify-center items-center bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Captura de Imagem</h2>

                <div className="mb-6">
                    {!foto ? (
                        <video ref={videoRef} autoPlay playsInline aria-label="fluxo de câmera" className="w-full h-72 object-cover rounded-xl shadow-lg" />
                    ) : (
                        <img src={foto} alt="foto tirada" className="w-full h-72 object-cover rounded-xl shadow-lg" />
                    )}
                </div>

                <div className="flex justify-center gap-6">
                    {!foto ? (
                        <button
                            type="button"
                            onClick={tirarFoto}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 hover:shadow-xl"
                        >
                            Tirar Foto
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={reiniciar}
                            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 hover:shadow-xl"
                        >
                            Reiniciar
                        </button>
                    )}
                </div>

                <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            </div>
        </section>



    )


}