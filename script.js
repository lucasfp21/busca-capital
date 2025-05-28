function adicionarAoHistorico(pais, capital) {
    const historico = document.getElementById("historico");
    const novoItem = document.createElement("li");
    novoItem.textContent = `${pais}: ${capital}`;
    historico.appendChild(novoItem);
}

async function buscarCapital() {
    const pais = document.getElementById("pais").value.trim();
    const resultado = document.getElementById("resultado");

    if (pais === "") {
        resultado.textContent = "⚠️ Por favor, digite um país.";
        resultado.style.color = "red";
        return;
    }

    try {
        const resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`);

        if (!resposta.ok) {
            resultado.textContent = "❌ Erro ao buscar os dados. Verifique o nome do país e tente novamente.";
            resultado.style.color = "red";
            return;
        }

        const dados = await resposta.json();

        if (dados.length > 0 && dados[0].capital) {
            const capital = dados[0].capital[0];
            resultado.textContent = `✅ A capital de ${pais} é ${capital}.`;
            resultado.style.color = "green";

            adicionarAoHistorico(pais, capital);
        } else {
            resultado.textContent = "❌ País não encontrado.";
            resultado.style.color = "red";
        }
    } catch (erro) {
        resultado.textContent = "🚨 Erro na conexão. Tente novamente mais tarde.";
        resultado.style.color = "red";
    }
}