#!/bin/bash
 
# Script de démarrage automatique pour JLYTEXE
# Usage: ./demmarer.sh
 
echo "🚀 Démarrage du site JLYTEXE..."
 
# Vérifier si pnpm est installé
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm n'est pas installé. Installation en cours..."
    curl -fsSL https://get.pnpm.io/install.sh | sh -
    source ~/.zshrc
fi
 
# Naviguer vers le dossier du projet
cd "$(dirname "$0")/apps/web"
 
# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    pnpm install
fi
 
# Démarrer le serveur de développement
echo "🌐 Lancement du serveur sur http://localhost:5173/jlytexe-site/"
echo "📱 Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""
 
export PATH="/Users/jerome/Library/pnpm:$PATH"
pnpm dev
