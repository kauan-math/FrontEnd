'use client'

import { useState } from 'react';

const frases = [
  "Gerencie alunos de forma simples e eficiente.",
  "Tudo sobre seus alunos, em um só lugar.",
  "Controle acadêmico sem complicação.",
  "Mais organização, menos esforço.",
  "Sua gestão escolar, elevada ao próximo nível.",
  "A forma inteligente de acompanhar alunos.",
  "Dados claros, decisões melhores.",
  "Simplifique sua rotina escolar hoje.",
  "Gestão rápida, prática e moderna.",
  "Organize. Acompanhe. Evolua."
];

interface TooltipFraseProps {
  children: React.ReactNode;
  className?: string;       
  fraseClassName?: string; 
  posicao?: 'top' | 'bottom' | 'left' | 'right';
  frasesProp?: string[];    
}

export function TooltipFrase({
  children,
  className,
  fraseClassName,
  posicao = 'top',
  frasesProp,
}: TooltipFraseProps) {
  const [frase, setFrase] = useState('');
  const [visivel, setVisivel] = useState(false);

  const lista = frasesProp ?? frases;

  const handleMouseEnter = () => {
    const aleatoria = lista[Math.floor(Math.random() * lista.length)];
    setFrase(aleatoria);
    setVisivel(true);
  };

  const posicaoClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const setinhaClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-zinc-800',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-zinc-800',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-zinc-800',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-zinc-800',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setVisivel(false)}
    >
      {children}

      {visivel && (
        <div className={`
          absolute px-3 py-2 bg-zinc-800 rounded-md shadow-lg z-10 whitespace-nowrap
          ${posicaoClasses[posicao]}
          ${className ?? ''}
        `}>
          <span className={`text-sm text-white ${fraseClassName ?? ''}`}>
            {frase}
          </span>
          <div className={`absolute border-4 border-transparent ${setinhaClasses[posicao]}`} />
        </div>
      )}
    </div>
  );
}