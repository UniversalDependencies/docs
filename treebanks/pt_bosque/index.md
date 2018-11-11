---
layout: base
title:  'UD_Portuguese-Bosque'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Portuguese Bosque

Language: [Portuguese](/pt/index.html) (code: `pt`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Alexandre Rademaker, Eckhard Bick, Fabricio Chalub, Cláudia Freitas, Guilherme Paulino-Passos, Luisa Rocha, Isabela Soares-Bastos, Livy Real, Valeria de Paiva, Daniel Zeman, Martin Popel, David Mareček, Natalia Silveira, André Martins.

Repository: [UD_Portuguese-Bosque](https://github.com/UniversalDependencies/UD_Portuguese-Bosque)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpt_bosque22)<br />
Download all treebanks: [UD 2.2](/#download)

License: CC BY-SA 4.0

Genre: news, blog

Questions, comments?
General annotation questions (either Portuguese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Portuguese-Bosque/issues).
If you want to collaborate, please contact [arademaker&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

This Universal Dependencies (UD) Portuguese treebank is based on the
Constraint Grammar converted version of the Bosque, which is part of
the Floresta Sintá(c)tica treebank. It contains both European
(CETEMPúblico) and Brazilian (CETENFolha) variants.



This Universal Dependencies (UD) Portuguese treebank is based on
the Constraint Grammar converted version of the Bosque, which is part
of the Floresta Sintá(c)tica treebank.

Eckhard Bick has maintained since 2008 an experimental version of the
dependency Bosque for research, which was not aligned with either the
Linguateca published constituent version or the 7.4 dependency version
of the Bosque. In 2016, Eckhard Bick wrote UD conversion rules for
Constraint Grammar input, and applied these to the updated version of
the dependency Bosque (Linguateca site version 7.5 of March 2016).

In October 2016, Alexandre Rademaker, Cláudia Freitas, Fabricio
Chalub, Valeria de Paiva and Livy Maria Real Coelho, aiming at full
compatibility with ConLL UD specifications, consistency-checked and
discussed the 7.5 UD Bosque, leading to a further round of manual
treebank corrections and conversion rule changes by Bick. The
conversion grammar used contains some 530 rules. Of these 70 were
simple feature mapping rules, and 130 were local MWE splitting rules,
assigning internal structure, POS and features to MWE's from the
Bosque. The remainder of the rules handle UD-specific dependency and
function label changes in a context-dependent fashion. The main
issues were raising of copula dependents to subject complements,
inversion of prepositional dependency and a change from syntactic to
semantic verb chain dependency.

The new UD treebank retains the additional tags for NP definiteness
and complex tenses, as well as the original syntactic function tags
and secondary morphological tags of the original Bosque. Thus the
treebank retains its original linguistic focus, in addition to coping
with the machine learning uses targeted by the ConLL UD format.

## Acknowledgments

The UD_Portuguese releases 1.2 to 1.4 were based on a different
conversion of Bosque, used in the CoNLL-X Shared Task in dependency
parsing (2006); the CoNLL version was taken and converted to the
Prague dependency style as a part of HamleDT (since 2011). Later
versions of HamleDT added a conversion to the Stanford dependencies
(2014) and to Universal Dependencies (HamleDT 3.0, 2015).

UD release 1.4 contained two conversions of Bosque: one labeled
UD_Portuguese (via CoNLL 2006 and HamleDT) and another labeled
UD_Portuguese-Bosque (the new conversion described above).

The two versions were merged (and labeled UD_Portuguese) in UD release
2.0. The merged version is based mostly on the new conversion by Bick
et al.. The conversion by Zeman et al. was used to
cross-validate. After the alignment of the sentences from the two
versions, the data was split in dev, test and train following the
distribution of sentences from Zeman et al.

The conversion was implemented by Eckhard Bick and revised by:

- Alexandre Rademaker
- Fabricio Chalub
- Claudia Freitas
- Guilherme Paulino-Passos
- Luisa Rocha
- Isabela Soares-Bastos
- Livy Real
- Valeria Paiva

The HamleDT conversion was implemented by Dan Zeman and revised by:

- Martin Popel
- David Mareček
- Daniel Zeman
- Natalia Silveira
- André Martins


# Statistics of UD Portuguese Bosque

## POS Tags

[ADJ](pt_bosque-pos-ADJ.html) – [ADP](pt_bosque-pos-ADP.html) – [ADV](pt_bosque-pos-ADV.html) – [AUX](pt_bosque-pos-AUX.html) – [CCONJ](pt_bosque-pos-CCONJ.html) – [DET](pt_bosque-pos-DET.html) – [INTJ](pt_bosque-pos-INTJ.html) – [NOUN](pt_bosque-pos-NOUN.html) – [NUM](pt_bosque-pos-NUM.html) – [PART](pt_bosque-pos-PART.html) – [PRON](pt_bosque-pos-PRON.html) – [PROPN](pt_bosque-pos-PROPN.html) – [PUNCT](pt_bosque-pos-PUNCT.html) – [SCONJ](pt_bosque-pos-SCONJ.html) – [SYM](pt_bosque-pos-SYM.html) – [VERB](pt_bosque-pos-VERB.html) – [X](pt_bosque-pos-X.html)

## Features

[AdpType](pt_bosque-feat-AdpType.html) – [Case](pt_bosque-feat-Case.html) – [Definite](pt_bosque-feat-Definite.html) – [Foreign](pt_bosque-feat-Foreign.html) – [Gender](pt_bosque-feat-Gender.html) – [Mood](pt_bosque-feat-Mood.html) – [Number](pt_bosque-feat-Number.html) – [NumType](pt_bosque-feat-NumType.html) – [Person](pt_bosque-feat-Person.html) – [Polarity](pt_bosque-feat-Polarity.html) – [PronType](pt_bosque-feat-PronType.html) – [Tense](pt_bosque-feat-Tense.html) – [VerbForm](pt_bosque-feat-VerbForm.html) – [Voice](pt_bosque-feat-Voice.html)

## Relations

[acl](pt_bosque-dep-acl.html) – [acl:relcl](pt_bosque-dep-acl-relcl.html) – [advcl](pt_bosque-dep-advcl.html) – [advmod](pt_bosque-dep-advmod.html) – [amod](pt_bosque-dep-amod.html) – [appos](pt_bosque-dep-appos.html) – [aux](pt_bosque-dep-aux.html) – [aux:pass](pt_bosque-dep-aux-pass.html) – [case](pt_bosque-dep-case.html) – [cc](pt_bosque-dep-cc.html) – [ccomp](pt_bosque-dep-ccomp.html) – [compound](pt_bosque-dep-compound.html) – [conj](pt_bosque-dep-conj.html) – [cop](pt_bosque-dep-cop.html) – [csubj](pt_bosque-dep-csubj.html) – [dep](pt_bosque-dep-dep.html) – [det](pt_bosque-dep-det.html) – [discourse](pt_bosque-dep-discourse.html) – [dislocated](pt_bosque-dep-dislocated.html) – [expl](pt_bosque-dep-expl.html) – [fixed](pt_bosque-dep-fixed.html) – [flat](pt_bosque-dep-flat.html) – [flat:foreign](pt_bosque-dep-flat-foreign.html) – [flat:name](pt_bosque-dep-flat-name.html) – [goeswith](pt_bosque-dep-goeswith.html) – [iobj](pt_bosque-dep-iobj.html) – [mark](pt_bosque-dep-mark.html) – [nmod](pt_bosque-dep-nmod.html) – [nmod:npmod](pt_bosque-dep-nmod-npmod.html) – [nmod:tmod](pt_bosque-dep-nmod-tmod.html) – [nsubj](pt_bosque-dep-nsubj.html) – [nsubj:pass](pt_bosque-dep-nsubj-pass.html) – [nummod](pt_bosque-dep-nummod.html) – [obj](pt_bosque-dep-obj.html) – [obl](pt_bosque-dep-obl.html) – [obl:agent](pt_bosque-dep-obl-agent.html) – [orphan](pt_bosque-dep-orphan.html) – [parataxis](pt_bosque-dep-parataxis.html) – [punct](pt_bosque-dep-punct.html) – [reparandum](pt_bosque-dep-reparandum.html) – [root](pt_bosque-dep-root.html) – [vocative](pt_bosque-dep-vocative.html) – [xcomp](pt_bosque-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9365 sentences, 210960 tokens and 227794 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 29566 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 786 types of words that contain both letters and punctuation. Examples: sexta-feira, norte-americano, p., segunda-feira, R., primeiro-ministro, norte-americana, terça-feira, quarta-feira, quinta-feira, S., ex-presidente, vice-presidente, porta-voz, Grã-Bretanha, cessar-fogo, etc., ex-ministro, fim-de-semana, norte-americanos, secretário-geral, d., art., dr., meio-campo, tel., av., director-geral, mão-de-obra, pára-quedas, sr., Guiné-Bissau, Jr., dia-a-dia, ex-jogador, pág., social-democrata, A., CD-ROM, Timor-Leste, co-produção, d', ex-governador, IPC-r, Jean-Pierre, auto-estrada, dom., ed., ex-secretário, infra-estrutura</li>
</ul>

<ul>
<li>This corpus contains 16834 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 743 types of multi-word tokens. Examples: do, da, no, na, dos, ao, à, das, pelo, pela, nos, às, aos, nas, num, numa, pelos, deste, pelas, desta, neste, nesta, nesse, disso, trata-se, desse, deles, destes, dele, daí, dessa, encontra-se, nessa, dela, daquela, delas, nestes, desses, nela, nestas, daqueles, dessas, destas, deve-se, naquele, recorde-se, daquele, encontram-se, naquela, nele.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): anti, ex, pré-, pós</li>
</ul>

<ul>
<li>This corpus contains 61 lemmas tagged as pronouns (PRON): _, a, algo, algum, alguém, ambos, aquele, aquilo, cada, certo, cujo, demais, dezena, diferentes, ela, elas, ele, ele/ela, eles, eles/elas, esse, este, eu, gente, isso, isto, mais, mesmo, meu, muito, mundo, nada, nenhum, ninguém, nosso, nós, o, onde, outrem, outro, pouco, qual, qualquer, quanto, que, quem, quê, se, seu, si, tal, tanto, todas, todo, tu, tudo, um, você, várias, vários, vós</li>
</ul>

<ul>
<li>This corpus contains 53 lemmas tagged as determiners (DET): $2e, _, a, algum, ambos, aquele, bastante, cada, certo, certos, cujo, demais, dezena, dezenas, diferentes, diversos, esse, este, la, menos, meu, muitas, muito, muitíssimo, nada, nenhum, nosso, o, outro, pouco, próprio, qual, qualquer, qualquier, quando, quanto, que, semelhante, seu, tal, tanto, teu, toda, todo, tudo, tão, um, uma, umo, uns, vosso, várias, vários</li>
</ul>

<ul>
<li>Out of the above, 33 lemmas occurred sometimes as PRON and sometimes as DET: _, a, algum, ambos, aquele, cada, certo, cujo, demais, dezena, diferentes, esse, este, meu, muito, nada, nenhum, nosso, o, outro, pouco, qual, qualquer, quanto, que, seu, tal, tanto, todo, tudo, um, várias, vários</li>
</ul>

<ul>
<li>This corpus contains 47 lemmas tagged as auxiliaries (AUX): _, abster, acabar, aceitar, agredir, ameaçar, andar, atualizar, chegar, comedir, começar, continuar, converter, costumar, deixar, deslocar, dever, discutir, encaminhar, envergonhar, estar, fazer, ferir, ficar, foi, haver, interpelar, ir, parar, parecer, passar, perdoar, permitir, poder, procurar, proibir, recomeçar, rejeitar, reunir, ser, tender, ter, tomar, tornar, vir, voltar, é</li>
</ul>

<ul>
<li>Out of the above, 43 lemmas occurred sometimes as AUX and sometimes as VERB: _, abster, acabar, aceitar, agredir, ameaçar, andar, atualizar, chegar, comedir, começar, continuar, converter, deixar, deslocar, dever, discutir, encaminhar, envergonhar, estar, fazer, ferir, ficar, haver, ir, parar, parecer, passar, perdoar, permitir, poder, procurar, proibir, recomeçar, rejeitar, reunir, ser, tender, ter, tomar, tornar, vir, voltar</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: é, foi, está, são, foram, vai, pode, era, estão, tem</li>
    <li>INTJ: viu</li>
    <li>NOUN: garante</li>
    <li>VERB: há, disse, tem, diz, é, fez, afirmou, foi, têm, faz</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: sendo, tendo, estando, passando, devendo, deixando, podendo, voltando, continuando, vindo</li>
    <li>PRON: se</li>
    <li>VERB: tendo, dando, incluindo, fazendo, ganhando, dizendo, passando, mostrando, considerando, esperando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ser, ter, estar, vir, continuar, serem, poder, ir, terem, passar</li>
    <li>NOUN: bafejar, decorrer, entardecer, entender, quebrar, Olhar, distender, fumar</li>
    <li>VERB: fazer, ter, ver, dar, dizer, falar, manter, saber, ir, passar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: eleito, Animado, achado, acirrada, animada, apropriados, atacados, coloridas, cotados, definidas</li>
    <li>AUX: sido, vindo, estado, acabado, agredido, ido, permitido, Acabadinho, acabados, aceite</li>
    <li>NOUN: feridos, arguido, chibatadas, classificado, colocado, colocados, culpados, envolvidos, esperado, ocorrido</li>
    <li>PROPN: visto, Dado</li>
    <li>VERB: feito, feita, feitas, dito, tido, eleito, passado, visto, aberto, considerado</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: primeira, nova, maior, grande, última, mesma, segunda, boa, política, novas</li>
      <li>ADJ-Part: acirrada, animada, coloridas, definidas, drogada, estimada, existente, mista, orquestrada, pesada</li>
      <li>ADP: da</li>
      <li>ADV: mais, bastante</li>
      <li>AUX-Part: convertidas, discutidas, feridas, rejeitada</li>
      <li>DET: a, as, uma, sua, esta, suas, essa, toda, outras, algumas</li>
      <li>INTJ: Obrigada, rua</li>
      <li>NOUN: pessoas, parte, semana, empresa, empresas, forma, cidade, casa, vida, vezes</li>
      <li>NOUN-Part: chibatadas, verificada, apresentada, cochilada, compostas, destinadas, enterradas, largada, organizadas, participada</li>
      <li>NUM: meia</li>
      <li>PRON: que, se, ela, a, as, elas, lhe, esta, eu, qual</li>
      <li>PROPN: Lisboa, Folha, Alemanha, França, Comissão, Espanha, Europa, Câmara, Rússia, Associação</li>
      <li>SCONJ: se</li>
      <li>VERB: feita, feitas, considerada, criada, realizada, dada, passada, utilizada, apresentada, marcada</li>
      <li>VERB-Part: feita, feitas, considerada, criada, realizada, dada, passada, utilizada, apresentada, marcada</li>
      <li>X: made, Body, morcilla, natura</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: primeiro, novo, mesmo, último, passado, segundo, últimos, bom, maior, grande</li>
      <li>ADJ-Part: eleito, Animado, achado, apropriados, atacados, cotados, detalhados, errado, ferido, fragilizado</li>
      <li>ADP: por, como, a</li>
      <li>ADV: não, menos, mais, bom, claro, forte, mal, muito, novo, quanto</li>
      <li>AUX-Part: sido, Acabadinho, acabados, aceite, atualizados, deslocado, interpelado, perdoados, proibido</li>
      <li>CCONJ: entanto, mesmo</li>
      <li>DET: o, os, um, seu, este, seus, esse, todos, outros, outro</li>
      <li>INTJ: Adeus</li>
      <li>NOUN: anos, milhões, ano, presidente, dia, país, contos, tempo, grupo, governo</li>
      <li>NOUN-Inf: Olhar</li>
      <li>NOUN-Part: feridos, arguido, classificado, colocado, colocados, culpados, envolvidos, esperado, ocorrido, previsto</li>
      <li>NUM: cento, meia, dúzia, um, 185/60, XVII</li>
      <li>PART: pós</li>
      <li>PRON: que, se, o, ele, isso, tudo, eles, lhe, os, isto</li>
      <li>PROPN: São, Portugal, Brasil, José, Governo, EUA, Rio, Estados, João, PÚBLICO</li>
      <li>PROPN-Part: visto, Dado</li>
      <li>SCONJ: que, como</li>
      <li>SYM: %, US$, R$, CR$</li>
      <li>VERB: feito, eleito, aberto, considerado, ligados, realizado, acusado, divulgado, entregue, condenado</li>
      <li>VERB-Fin: considerara</li>
      <li>VERB-Part: feito, eleito, aberto, considerado, ligados, realizado, acusado, divulgado, entregue, condenado</li>
      <li>X: Dream, MacMillan, consejero, dolce, godfather, kebab, killer, line, primitive, prélude</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Unsp
    <ul>
      <li>ADJ: melhor, capaz, especial, favorável, inconvenientes, jovens, mole, 2., I, II</li>
      <li>DET: mais, cada, qual, qualquer, Que, tal</li>
      <li>NOUN: especialistas, representantes, jornalistas, jovens, habitantes, visitantes, Presidente, artistas, clientes, especial</li>
      <li>PRON: se, quem, me, nos, eu, você, nós, que, lhe, mim</li>
      <li>PRON-Ger: se</li>
      <li>PROPN: Coimbra, Alvalade, Maastricht, Barcelos, Braga, Ermesinde, Aveiro, Drosnin, Frankfurt, Jacarta</li>
      <li>SCONJ: se</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grandes, últimos, novos, novas, primeiros, principais, melhores, internacionais, maiores, públicos</li>
      <li>ADJ-Part: apropriados, atacados, coloridas, cotados, definidas, detalhados, pegos, pretendidas, privilegiados, restritas</li>
      <li>ADV: menos, mais</li>
      <li>AUX: são, foram, estão, podem, vão, têm, serão, devem, eram, estavam</li>
      <li>AUX-Fin: são, foram, estão, podem, vão, têm, serão, devem, eram, estavam</li>
      <li>AUX-Inf: serem, terem, estarem, estarmos, haverem, passarem, poderem, continuarem, irem, podermos</li>
      <li>AUX-Part: acabados, atualizados, convertidas, discutidas, feridas, perdoados</li>
      <li>DET: os, as, seus, suas, todos, outros, outras, alguns, algumas, todas</li>
      <li>NOUN: anos, milhões, pessoas, contos, dias, pontos, empresas, meses, países, vezes</li>
      <li>NOUN-Part: feridos, chibatadas, colocados, culpados, envolvidos, recomendados, usados, visitados, afectados, blindados</li>
      <li>PRON: que, se, eles, os, nos, todos, outros, as, elas, nós</li>
      <li>PROPN: EUA, Estados, Assuntos, Nações, Antas, Açores, Comandos, Encontros, Forças, Misericórdias</li>
      <li>SYM: %, US$, R$, CR$</li>
      <li>VERB-Fin: têm, existem, fizeram, dizem, querem, dão, fazem, temos, chegaram, conseguiram</li>
      <li>VERB-Inf: terem, ficarem, aceitarem, chegarem, exigirem, fazerem, fornecerem, funcionarem, manterem, mostrarem</li>
      <li>VERB-Part: feitas, ligados, feitos, acusados, realizados, chamados, colocados, apresentadas, envolvidos, realizadas</li>
      <li>X: made</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: primeiro, maior, primeira, novo, grande, nova, mesmo, melhor, último, nacional</li>
      <li>ADJ-Part: eleito, Animado, achado, acirrada, animada, drogada, errado, estimada, existente, ferido</li>
      <li>ADP: por, da, como, sobre, a</li>
      <li>ADV: não, mais, bem, menos, bastante, bom, claro, forte, mal, muito</li>
      <li>AUX-Fin: é, foi, está, vai, pode, era, tem, será, deve, estava</li>
      <li>AUX-Inf: ser, ter, estar, ir, começar, haver, poder, vir</li>
      <li>AUX-Part: sido, Acabadinho, aceite, deslocado, interpelado, proibido, rejeitada</li>
      <li>CCONJ: e, entanto, mesmo</li>
      <li>DET: o, a, um, uma, sua, seu, este, esta, esse, qualquer</li>
      <li>INTJ: Adeus, Obrigada, rua, viu</li>
      <li>INTJ-Fin: viu</li>
      <li>NOUN: presidente, ano, dia, país, tempo, grupo, governo, estado, parte, acordo</li>
      <li>NOUN-Fin: garante</li>
      <li>NOUN-Inf: Olhar, distender, fumar</li>
      <li>NOUN-Part: arguido, classificado, colocado, esperado, ocorrido, previsto, verificada, acumulado, amassado, apresentada</li>
      <li>NUM: cento, meia, 3, dúzia, 14, 2, 4, 94, um, 185/60</li>
      <li>PART: pós</li>
      <li>PRON: que, se, o, ele, isso, lhe, quem, tudo, eu, ela</li>
      <li>PRON-Ger: se</li>
      <li>PROPN: Paulo, Nacional, São, Portugal, Porto, Unidos, Brasil, José, Lisboa, Silva</li>
      <li>PROPN-Part: visto, Dado</li>
      <li>PUNCT: ?</li>
      <li>SCONJ: que, como, se</li>
      <li>SYM: R$, US$</li>
      <li>VERB: há, disse, tem, diz, é, fez, afirmou, foi, faz, teve</li>
      <li>VERB-Fin: há, disse, tem, diz, é, fez, afirmou, foi, faz, teve</li>
      <li>VERB-Inf: ter, dar, haver, retirar, saber, ver, aprovar, atingir, cair, chegar</li>
      <li>VERB-Part: feita, feito, eleito, aberto, considerado, considerada, realizado, acusado, criada, divulgado</li>
      <li>X: for, jet, ski, Burgos, Children, Dictionary, Sure, Team, non-mesuré, Body</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Unsp
    <ul>
      <li>DET: mais, Que, o(s)</li>
      <li>NOUN: tratamento(s)</li>
      <li>PRON: mais, quem, que, menos, aquilo, mundo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: se, o, me, a, nos, lo, os, la, as, los</li>
      <li>PRON-Ger: se</li>
      <li>SCONJ: se</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: lhe, me, nos, lhes, se, Ihe, vos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: ele, eu, eles, ela, você, nós, elas, vocês, voce, vós</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: da</li>
      <li>DET: o, a, os, as, esta, o(s), um</li>
      <li>PRON: o, os, a, as, que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: um, uma, outra, Nada, o, uns</li>
      <li>NUM: um</li>
      <li>PRON: um</li>
      <li>PROPN: um</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: não, nada</li>
      <li>INTJ: não</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: seria, poderia, teria, deveria, seriam, estaria, iria, teriam, acabaria, deveriam</li>
      <li>VERB-Fin: gostaria, ficaria, daria, teria, faria, seria, diria, gostariam, tentaria, teriam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: Sê</li>
      <li>VERB-Fin: move, Olha, chega, vide</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: é, foi, está, são, foram, vai, pode, era, estão, tem</li>
      <li>INTJ-Fin: viu</li>
      <li>NOUN-Fin: garante</li>
      <li>VERB-Fin: há, disse, tem, diz, é, fez, afirmou, foi, têm, faz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: seja, for, tenha, fosse, possa, sejam, esteja, estejam, possam, estivesse</li>
      <li>VERB-Fin: seja, tenha, quiser, leia, recorde, haja, houver, pense, veja, for</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, poderá, deverá, serão, terá, for, irá, estará, deverão, poderão</li>
      <li>VERB-Fin: terá, terão, haverá, será, quiser, ficará, houver, fará, for, permitirá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, estava, tinha, eram, estavam, fosse, havia, tinham, haviam, ia</li>
      <li>VERB-Fin: tinha, havia, fazia, dizia, era, encontrava, estavam, parecia, tinham, conseguia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: foi, foram, esteve, acabou, fui, voltou, começou, chegou, passou, teve</li>
      <li>AUX-Fin: foi, foram, esteve, acabou, fui, voltou, começou, chegou, passou, teve</li>
      <li>INTJ-Fin: viu</li>
      <li>VERB-Fin: disse, fez, afirmou, foi, teve, deu, ficou, chegou, conseguiu, aconteceu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fora, acabara, foram, começara, tiveram</li>
      <li>VERB-Fin: fizera, tornara, desaparecera, dissera, levara, Nascera, Quisera, Saíra, abrangera, aconteceram</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: é, está, são, vai, pode, estão, tem, deve, podem, seja</li>
      <li>NOUN-Fin: garante</li>
      <li>VERB-Fin: há, tem, diz, é, têm, faz, afirma, dá, quer, trata</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: pegos</li>
      <li>NOUN-Part: afectados, apresentada, compostas, denunciados, estimado, recomendados, requeridas</li>
      <li>VERB-Fin: fez, Esperam, Sustêm, Trata, Vejam, avaliam, citem, confirmou, conhecem, descobriram</li>
      <li>VERB-Inf: anunciar, aprovar, candidatar, contrair, divulgar, dizer, elaborar, entender, evitar, pagar</li>
      <li>VERB-Part: feita, feito, feitas, considerado, considerada, aprovada, lançado, acompanhado, tomada, apresentada</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: o, a, os, as, um, uma, uns, esta, umas, outra</li>
      <li>NUM: um</li>
      <li>PRON: o, os, a, as, que, um</li>
      <li>PROPN: um</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: este, esta, esse, essa, estes, estas, esses, aquele, essas, o</li>
      <li>NOUN: aquele</li>
      <li>PRON: o, isso, isto, os, a, este, esta, as, mesmo, aquilo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADJ: próprio, própria, próprias</li>
      <li>DET: próprio, própria, próprios, próprias</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: diferentes, outra</li>
      <li>ADV: mais, bastante, menos, muito</li>
      <li>DET: qualquer, outros, outro, mais, outras, alguns, algumas, outra, muitos, vários</li>
      <li>NOUN: outros</li>
      <li>PRON: tudo, nada, outros, ninguém, que, outro, algo, alguns, mais, alguém</li>
      <li>PROPN: que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: quanto</li>
      <li>DET: que, quanto, quais, qual, Quantos, Quantas, quando</li>
      <li>PRON: que, quem, qual, quais, quanto, quantos, quê</li>
      <li>SCONJ: que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nenhum, nenhuma</li>
      <li>PRON: nada, nenhuma, nenhum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: sua, seu, seus, suas, meu, nossa, nosso, minha, nossos, nossas</li>
      <li>PRON: se, ele, lhe, o, eles, eu, ela, me, nos, a</li>
      <li>PRON-Ger: se</li>
      <li>SCONJ: se</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADP: segundo, enquanto, como, quando, apenas, conforme</li>
      <li>DET: cujo, cuja, cujas, qual, cujos, quais, quanto, Quantos</li>
      <li>PRON: que, quem, qual, quais, tudo, quanto, cuja, quantos, Nada, qu</li>
      <li>SCONJ: que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: todos, cada, toda, todo, todas, ambos, ambas, tudo</li>
      <li>PRON: todos, ambos, todas, todo, cada, Ambas, tudo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: um, uma</li>
      <li>NOUN: um, 11, 1200, 156.942, 86.871, onze, quatro, três</li>
      <li>NUM: um, dois, três, mil, uma, duas, quatro, cinco, 15, 30</li>
      <li>PROPN: 1.560, 1.565, Doze</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: meia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>NUM: cento</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira</li>
      <li>NUM: quinta, XVII</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Range
    <ul>
      <li>NUM: 07.00-09.00, 10.00-12.00</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: dúzia</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: estamos, estou, fui, vamos, podemos, somos, vou, sou, tenho, temos</li>
      <li>AUX-Fin: estamos, estou, fui, vamos, podemos, somos, vou, sou, tenho, temos</li>
      <li>AUX-Inf: estarmos, podermos, sermos</li>
      <li>PRON: eu, me, nos, nós, mim, nosco</li>
      <li>VERB-Fin: sei, tenho, acho, temos, espero, penso, queremos, quero, acredito, creio</li>
      <li>VERB-Inf: adaptarmos, apanhá, dependermos, entender, montarmos, ocuparmos, olharmos, ouvirmos, subir, termos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: Sê, vais</li>
      <li>PRON: te, ti, vos, vós</li>
      <li>VERB-Fin: move, Compreendeste, Criaste, Olha, Rodeaste, Roubarás, Roubaste, Saiba, chamais, chega</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: é, foi, está, são, foram, vai, pode, era, estão, tem</li>
      <li>AUX-Inf: serem, ser, ter, terem, estarem, estar, haverem, ir, passarem, poderem</li>
      <li>INTJ-Fin: viu</li>
      <li>NOUN-Fin: garante</li>
      <li>NOUN-Inf: distender, fumar</li>
      <li>PRON: se, ele, lhe, o, eles, ela, a, elas, você, lo</li>
      <li>PRON-Ger: se</li>
      <li>SCONJ: se</li>
      <li>VERB-Fin: há, tem, disse, diz, é, fez, afirmou, foi, têm, faz</li>
      <li>VERB-Inf: terem, ter, dar, ficarem, haver, retirar, saber, ver, aceitarem, aprovar</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: de, com, por</li>
        </ul>
      </li>
      <li>Preppron
        <ul>
          <li>ADP: da</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: bodyboard</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: ser, estar.</li>
</ul>

<ul>
<li>This corpus uses 45 lemmas as auxiliaries (<a>aux</a>). Examples: ter, poder, ir, dever, estar, vir, continuar, começar, acabar, ser, passar, haver, voltar, deixar, parecer, chegar, ficar, costumar, andar, parar, abster, aceitar, agredir, ameaçar, atualizar, comedir, converter, deslocar, discutir, encaminhar, envergonhar, fazer, ferir, interpelar, perdoar, permitir, procurar, proibir, recomeçar, rejeitar, reunir, sujar, tender, tomar, tornar.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, _, ficar.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--NOUN (3469)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--PRON (1702)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-Acc (219)</li>
      <li>VERB-Fin--PRON-Nom (332)</li>
      <li>VERB-Ger--NOUN (72)</li>
      <li>VERB-Ger--PRON (27)</li>
      <li>VERB-Ger--PRON-Acc (15)</li>
      <li>VERB-Ger--PRON-Nom (7)</li>
      <li>VERB-Inf--NOUN (598)</li>
      <li>VERB-Inf--PRON (183)</li>
      <li>VERB-Inf--PRON-Acc (77)</li>
      <li>VERB-Inf--PRON-Nom (55)</li>
      <li>VERB-Part--NOUN (213)</li>
      <li>VERB-Part--PRON (58)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Nom (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN (3747)</li>
      <li>VERB-Fin--NOUN-ADP(com) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (3)</li>
      <li>VERB-Fin--PRON (445)</li>
      <li>VERB-Fin--PRON-Acc (335)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Ger--NOUN (386)</li>
      <li>VERB-Ger--NOUN-ADP(com) (1)</li>
      <li>VERB-Ger--NOUN-ADP(de) (1)</li>
      <li>VERB-Ger--PRON (13)</li>
      <li>VERB-Ger--PRON-Acc (23)</li>
      <li>VERB-Ger--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN (2109)</li>
      <li>VERB-Inf--NOUN-ADP(a) (12)</li>
      <li>VERB-Inf--NOUN-ADP(como) (1)</li>
      <li>VERB-Inf--PRON (121)</li>
      <li>VERB-Inf--PRON-Acc (131)</li>
      <li>VERB-Inf--PRON-Acc-ADP(a) (1)</li>
      <li>VERB-Part--NOUN (182)</li>
      <li>VERB-Part--NOUN-ADP(por) (1)</li>
      <li>VERB-Part--PRON (30)</li>
      <li>VERB-Part--PRON-Acc (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-ADP(a) (2)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(em) (1)</li>
      <li>VERB-Fin--NOUN-ADP(para) (1)</li>
      <li>VERB-Fin--PRON-Acc (7)</li>
      <li>VERB-Fin--PRON-Dat (157)</li>
      <li>VERB-Ger--PRON-Dat (8)</li>
      <li>VERB-Inf--PRON-Dat (39)</li>
      <li>VERB-Part--PRON-Dat (14)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:npmod</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
