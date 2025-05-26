
import { useState } from 'react';
import type { ViaCEPResponse } from '../types/viacep';

export function useViaCEP() {
    const [data, setData] = useState<ViaCEPResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCEP = async (cep: string) => {
        // Validação básica do CEP
        const cleanedCEP = cep.replace(/\D/g, '');
        if (cleanedCEP.length !== 8) {
            setError('CEP deve conter 8 dígitos');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cleanedCEP}/json/`);
            
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }

            const result: ViaCEPResponse = await response.json();

            if (result.erro) {
                throw new Error('CEP não encontrado');
            }

            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro na consulta, favor tentar mais tarde');
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchCEP };
}