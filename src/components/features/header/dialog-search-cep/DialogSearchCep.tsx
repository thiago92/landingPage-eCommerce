import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useViaCEP } from "@/hooks/useViaCEP";
import { useState, type ChangeEvent } from "react";
import { Loader2, MapPin, CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

// Componente de feedback visual
const StatusIcon = ({ status }: { status: 'loading' | 'error' | 'success' | 'idle' }) => {
    const iconMap = {
        loading: <Loader2 className="h-5 w-5 animate-spin" />,
        error: <XCircle className="h-5 w-5 text-red-500" />,
        success: <CheckCircle2 className="h-5 w-5 text-green-500" />,
        idle: <MapPin className="h-5 w-5 text-gray-400" />
    };

    return iconMap[status];
};

export default function DialogSearchCep() {
    const [cepInput, setCepInput] = useState("");
    const { data, loading, error, fetchCEP } = useViaCEP();

    // Máscara para o CEP (formato 00000-000)
    const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        setCepInput(value.substring(0, 9));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cepInput.replace(/\D/g, '').length === 8) {
        fetchCEP(cepInput);
        }
    };

    // Determina o status para feedback visual
    const getStatus = () => {
        if (loading) return 'loading';
        if (error) return 'error';
        if (data) return 'success';
        return 'idle';
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button 
                        variant="outline" 
                        className="text-white text-[14px] font-[400] p-0 h-auto leading-tight cursor-pointer hover:underline text-left block border-none"
                    >
                        Pesquise aqui seu endereço pelo CEP, <br />
                        <span className="font-[600]">desta forma calcularemos seu FRETE</span>
                    </Button>
                </motion.div>
            </DialogTrigger>
        
            <DialogContent className="md:max-w-[600px] max-w-[400px] bg-transparent border-none shadow-none p-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white w-full rounded-md p-6"
                >

                    <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 mb-4">
                        <MapPin className="h-5 w-5" />
                        Calcular Frete
                    </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div 
                        className="flex gap-2 items-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative flex-1">
                            <Input
                                type="text"
                                value={cepInput}
                                onChange={handleCepChange}
                                placeholder="00000-000"
                                className="w-full border p-2 pl-10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                                maxLength={9}
                                pattern="\d{5}-\d{3}"
                                title="Digite um CEP no formato 00000-000"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <StatusIcon status={getStatus()} />
                            </div>
                        </div>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                                type="submit" 
                                disabled={loading || cepInput.length < 9}
                                className="text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors bg-gray-900 flex items-center justity-center cursor-pointer"
                            >
                                Buscar
                            </Button>
                        </motion.div>
                    </motion.div>

                    <AnimatePresence>
                        {error && (
                            <motion.p 
                                className="text-red-500 text-sm flex items-center gap-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <XCircle className="h-4 w-4" />
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </form>

                <AnimatePresence>
                    {data && (
                        <motion.div 
                            className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-gray-900"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="font-medium mb-2 flex items-center gap-2 text-white">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                Endereço encontrado:
                            </h3>
                            <div className="space-y-1">
                                <p className="flex gap-2 text-white">
                                    <span className="font-medium">Logradouro:</span>
                                    {data.logradouro}
                                </p>
                                {data.complemento && (
                                <p className="flex gap-2 text-white">
                                    <span className="font-medium">Complemento:</span>
                                    {data.complemento}
                                </p>
                                )}
                                <p className="flex gap-2 text-white">
                                    <span className="font-medium">Bairro:</span>
                                    {data.bairro}
                                </p>
                                <p className="flex gap-2 text-white">
                                    <span className="font-medium">Cidade/UF:</span>
                                    {data.localidade} - {data.uf}
                                </p>
                                <p className="flex gap-2 mt-2 text-white">
                                    <span className="font-medium">CEP:</span>
                                    {data.cep}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                </motion.div>
            </DialogContent>
        </Dialog>
    );
}