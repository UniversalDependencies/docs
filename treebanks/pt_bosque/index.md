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

[acl](pt_bosque-dep-acl.html) – [acl:relcl](pt_bosque-dep-acl-relcl.html) – [advcl](pt_bosque-dep-advcl.html) – [advmod](pt_bosque-dep-advmod.html) – [amod](pt_bosque-dep-amod.html) – [appos](pt_bosque-dep-appos.html) – [aux](pt_bosque-dep-aux.html) – [aux:pass](pt_bosque-dep-aux-pass.html) – [case](pt_bosque-dep-case.html) – [cc](pt_bosque-dep-cc.html) – [ccomp](pt_bosque-dep-ccomp.html) – [compound](pt_bosque-dep-compound.html) – [conj](pt_bosque-dep-conj.html) – [cop](pt_bosque-dep-cop.html) – [csubj](pt_bosque-dep-csubj.html) – [dep](pt_bosque-dep-dep.html) – [det](pt_bosque-dep-det.html) – [discourse](pt_bosque-dep-discourse.html) – [dislocated](pt_bosque-dep-dislocated.html) – [expl](pt_bosque-dep-expl.html) – [fixed](pt_bosque-dep-fixed.html) – [flat](pt_bosque-dep-flat.html) – [flat:foreign](pt_bosque-dep-flat-foreign.html) – [flat:name](pt_bosque-dep-flat-name.html) – [goeswith](pt_bosque-dep-goeswith.html) – [iobj](pt_bosque-dep-iobj.html) – [mark](pt_bosque-dep-mark.html) – [nmod](pt_bosque-dep-nmod.html) – [nsubj](pt_bosque-dep-nsubj.html) – [nsubj:pass](pt_bosque-dep-nsubj-pass.html) – [nummod](pt_bosque-dep-nummod.html) – [obj](pt_bosque-dep-obj.html) – [obl](pt_bosque-dep-obl.html) – [obl:agent](pt_bosque-dep-obl-agent.html) – [orphan](pt_bosque-dep-orphan.html) – [parataxis](pt_bosque-dep-parataxis.html) – [punct](pt_bosque-dep-punct.html) – [reparandum](pt_bosque-dep-reparandum.html) – [root](pt_bosque-dep-root.html) – [vocative](pt_bosque-dep-vocative.html) – [xcomp](pt_bosque-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9365 sentences, 210961 tokens and 227799 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 29567 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 785 types of words that contain both letters and punctuation. Examples: sexta-feira, norte-americano, p., segunda-feira, R., primeiro-ministro, norte-americana, terça-feira, quarta-feira, quinta-feira, S., ex-presidente, vice-presidente, porta-voz, Grã-Bretanha, cessar-fogo, etc., ex-ministro, fim-de-semana, norte-americanos, secretário-geral, d., art., dr., meio-campo, tel., av., director-geral, mão-de-obra, pára-quedas, sr., Guiné-Bissau, Jr., dia-a-dia, ex-jogador, pág., social-democrata, A., CD-ROM, Timor-Leste, co-produção, d', ex-governador, IPC-r, Jean-Pierre, auto-estrada, dom., ed., ex-secretário, infra-estrutura</li>
</ul>

<ul>
<li>This corpus contains 16838 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
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
<li>This corpus contains 60 lemmas tagged as pronouns (PRON): a, algo, algum, alguém, ambos, aquele, aquilo, cada, certo, cujo, demais, dezena, diferentes, ela, elas, ele, ele/ela, eles, eles/elas, esse, este, eu, gente, isso, isto, mais, mesmo, meu, muito, mundo, nada, nenhum, ninguém, nosso, nós, o, onde, outrem, outro, pouco, qual, qualquer, quanto, que, quem, quê, se, seu, si, tal, tanto, todas, todo, tu, tudo, um, você, várias, vários, vós</li>
</ul>

<ul>
<li>This corpus contains 54 lemmas tagged as determiners (DET): $2e, a, algum, ambos, aquele, as, bastante, cada, certo, certos, cujo, demais, dezena, dezenas, diferentes, diversos, esse, este, la, mais, menos, meu, muita, muito, muitíssimo, nada, nenhum, nosso, o, os, outro, pouco, próprio, qual, qualquer, qualquier, quanto, que, semelhante, seu, tal, tanto, teu, toda, todo, tudo, tão, um, uma, umo, uns, vosso, várias, vários</li>
</ul>

<ul>
<li>Out of the above, 33 lemmas occurred sometimes as PRON and sometimes as DET: a, algum, ambos, aquele, cada, certo, cujo, demais, dezena, diferentes, esse, este, mais, meu, muito, nada, nenhum, nosso, o, outro, pouco, qual, qualquer, quanto, que, seu, tal, tanto, todo, tudo, um, várias, vários</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as auxiliaries (AUX): acabar, ameaçar, andar, chegar, começar, continuar, costumar, deixar, dever, estar, ficar, haver, ir, parar, parecer, passar, permitir, poder, procurar, quer, ser, tender, ter, tornar, vir, voltar</li>
</ul>

<ul>
<li>Out of the above, 24 lemmas occurred sometimes as AUX and sometimes as VERB: acabar, ameaçar, andar, chegar, começar, continuar, deixar, dever, estar, ficar, haver, ir, parar, parecer, passar, permitir, poder, procurar, ser, tender, ter, tornar, vir, voltar</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: é, foi, são, está, foram, vai, pode, era, estão, tem</li>
    <li>INTJ: viu</li>
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
    <li>NOUN: distender, entender</li>
    <li>VERB: fazer, ter, ver, dar, dizer, falar, manter, saber, ir, passar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: passado, cotados, fragilizado, sentidos, verificada</li>
    <li>AUX: sido, vindo, estado, acabado, ido, permitido, Acabadinho, acabados, volta</li>
    <li>NOUN: RECOMENDADOS, classificado, obcecados, preservada, procurados</li>
    <li>PROPN: visto</li>
    <li>VERB: feito, feita, feitas, dito, tido, eleito, visto, aberto, considerado, dado</li>
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
      <li>ADJ: primeira, nova, maior, grande, última, mesma, segunda, boa, passada, política</li>
      <li>ADJ-Part: verificada</li>
      <li>ADP: da</li>
      <li>ADV: as, a, cada, mais, outras, quanto, só, tal</li>
      <li>AUX-Part: volta</li>
      <li>DET: a, as, uma, sua, esta, suas, essa, toda, outras, algumas</li>
      <li>INTJ: Obrigada, rua</li>
      <li>NOUN: pessoas, parte, semana, empresa, empresas, forma, cidade, casa, vida, vezes</li>
      <li>NOUN-Part: preservada</li>
      <li>NUM: 4ª, dezenas, meia</li>
      <li>PRON: que, se, a, ela, as, elas, lhe, esta, eu, qual</li>
      <li>PROPN: Lisboa, Folha, Alemanha, França, Comissão, Espanha, Europa, Câmara, Rússia, Associação</li>
      <li>SCONJ: que, se</li>
      <li>VERB: feita, feitas, considerada, criada, realizada, apresentada, dada, utilizada, marcada, aprovada</li>
      <li>VERB-Part: feita, feitas, considerada, criada, realizada, apresentada, dada, utilizada, marcada, aprovada</li>
      <li>X: made, Body, morcilla, natura</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: primeiro, novo, mesmo, passado, último, segundo, últimos, bom, maior, grande</li>
      <li>ADJ-Part: passado, cotados, fragilizado, sentidos</li>
      <li>ADP: por, como, a</li>
      <li>ADV: não, um, muito, mais, menos, pouco, quanto, como, bom, claro</li>
      <li>AUX-Part: sido, Acabadinho, acabados</li>
      <li>CCONJ: e/ou, entanto, mesmo</li>
      <li>DET: o, os, um, seu, este, seus, esse, todos, outros, outro</li>
      <li>INTJ: Adeus</li>
      <li>NOUN: anos, ano, presidente, dia, país, contos, tempo, grupo, governo, dias</li>
      <li>NOUN-Part: RECOMENDADOS, classificado, obcecados, procurados</li>
      <li>NUM: cento, meia, milhões, dúzia, milhares, um, 1., 185/60, XVII, bilhões</li>
      <li>PART: pós</li>
      <li>PRON: que, se, o, ele, isso, tudo, eles, os, lhe, isto</li>
      <li>PROPN: São, Portugal, Brasil, José, Governo, EUA, Rio, Estados, João, PÚBLICO</li>
      <li>PROPN-Part: visto</li>
      <li>SCONJ: que, como</li>
      <li>VERB: feito, eleito, aberto, considerado, ligados, realizado, acusado, divulgado, entregue, condenado</li>
      <li>VERB-Fin: considerara</li>
      <li>VERB-Part: feito, eleito, aberto, considerado, ligados, realizado, acusado, divulgado, entregue, condenado</li>
      <li>X: Dream, Insight, MacMillan, consejero, dolce, godfather, kebab, killer, line, primitive</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Unsp
    <ul>
      <li>ADJ: melhor, capaz, especial, favorável, inconvenientes, jovens, mole, II, Independente, Medíocre</li>
      <li>ADV: mais, Que, tal</li>
      <li>DET: cada, qual, qualquer, mais</li>
      <li>NOUN: especialistas, representantes, jornalistas, jovens, habitantes, visitantes, Presidente, artistas, clientes, especial</li>
      <li>NUM: 2., I</li>
      <li>PRON: se, quem, me, nos, eu, você, nós, que, lhe, mim</li>
      <li>PRON-Ger: se</li>
      <li>PROPN: Coimbra, Alvalade, Maastricht, Barcelos, Braga, Ermesinde, Aveiro, Drosnin, Frankfurt, Jacarta</li>
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
      <li>ADJ-Part: cotados, sentidos</li>
      <li>ADV: as, mais, menos, juntos, outras, outros</li>
      <li>AUX: são, foram, estão, podem, vão, têm, serão, devem, eram, estavam</li>
      <li>AUX-Fin: são, foram, estão, podem, vão, têm, serão, devem, eram, estavam</li>
      <li>AUX-Inf: serem, terem, estarem, estarmos, haverem, passarem, poderem, continuarem, irem, podermos</li>
      <li>AUX-Part: acabados</li>
      <li>DET: os, as, seus, suas, todos, outros, outras, alguns, algumas, todas</li>
      <li>NOUN: anos, pessoas, contos, dias, pontos, empresas, meses, países, vezes, problemas</li>
      <li>NOUN-Part: RECOMENDADOS, obcecados, procurados</li>
      <li>NUM: milhões, milhares, 24, bilhões, dezenas</li>
      <li>PRON: que, se, eles, os, nos, as, outros, todos, elas, nós</li>
      <li>PROPN: EUA, Estados, Assuntos, Nações, Antas, Açores, Comandos, Encontros, Forças, Misericórdias</li>
      <li>VERB: têm, existem, fizeram, dizem, feitas, querem, dão, fazem, temos, chegaram</li>
      <li>VERB-Fin: têm, existem, fizeram, dizem, querem, dão, fazem, temos, chegaram, estão</li>
      <li>VERB-Inf: terem, ficarem, aceitarem, chegarem, exigirem, fazerem, fornecerem, funcionarem, manterem, mostrarem</li>
      <li>VERB-Part: feitas, ligados, feitos, acusados, realizados, chamados, colocados, apresentadas, envolvidos, ligadas</li>
      <li>X: made</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: maior, primeiro, grande, primeira, novo, nova, mesmo, melhor, passado, último</li>
      <li>ADJ-Part: passado, fragilizado, verificada</li>
      <li>ADP: por, a, da, como, sobre</li>
      <li>ADV: não, um, muito, mais, quanto, pouco, menos, como, bem, bom</li>
      <li>AUX-Fin: é, foi, está, vai, pode, era, tem, será, deve, estava</li>
      <li>AUX-Inf: ser, ter, estar, ir, começar, haver, poder, vir</li>
      <li>AUX-Part: sido, Acabadinho, volta</li>
      <li>CCONJ: e, e/ou, entanto, mesmo</li>
      <li>DET: o, a, um, uma, sua, seu, este, esta, esse, qualquer</li>
      <li>INTJ: Adeus, Obrigada, rua, viu</li>
      <li>INTJ-Fin: viu</li>
      <li>NOUN: presidente, ano, dia, país, tempo, grupo, governo, estado, parte, acordo</li>
      <li>NOUN-Part: classificado, preservada</li>
      <li>NUM: cento, meia, dúzia, 14, 2, 3, 94, um, 1., 185/60</li>
      <li>PART: pós</li>
      <li>PRON: que, se, o, ele, isso, lhe, quem, tudo, eu, a</li>
      <li>PRON-Ger: se</li>
      <li>PROPN: Paulo, Nacional, São, Portugal, Porto, Unidos, Brasil, José, Lisboa, Silva</li>
      <li>PROPN-Part: visto</li>
      <li>PUNCT: ,, ?</li>
      <li>SCONJ: que, como, se</li>
      <li>VERB: há, disse, tem, diz, é, fez, afirmou, foi, faz, teve</li>
      <li>VERB-Fin: há, disse, tem, diz, é, fez, afirmou, foi, faz, teve</li>
      <li>VERB-Inf: ter, dar, haver, retirar, saber, ver, aprovar, atingir, cair, chegar</li>
      <li>VERB-Part: feita, feito, eleito, aberto, considerado, considerada, realizado, acusado, criada, divulgado</li>
      <li>X: for, jet, ski, Burgos, Children, Dictionary, Manager, Sure, Team, non-mesuré</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Unsp
    <ul>
      <li>ADV: mais, Que</li>
      <li>DET: o(s)</li>
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
      <li>DET: o, a, os, as, esta, o(s), um, uma</li>
      <li>PRON: o, os, a, as, que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: um</li>
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
      <li>AUX-Fin: é, foi, são, está, foram, vai, pode, era, estão, tem</li>
      <li>INTJ-Fin: viu</li>
      <li>VERB-Fin: há, disse, tem, diz, é, fez, afirmou, foi, têm, faz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: seja, for, tenha, fosse, possa, sejam, esteja, estejam, possam, fossem</li>
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
      <li>VERB-Fin: terá, haverá, será, terão, quiser, ficará, houver, fará, for, permitirá</li>
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
      <li>AUX-Fin: é, são, está, vai, pode, estão, tem, deve, podem, seja</li>
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
      <li>VERB-Fin: fez, Esperam, Sustêm, Trata, Vejam, avaliam, citem, confirmou, conhecem, descobriram</li>
      <li>VERB-Inf: anunciar, aprovar, candidatar, contrair, divulgar, dizer, elaborar, entender, evitar, pagar</li>
      <li>VERB-Part: feita, feito, feitas, considerado, considerada, aprovada, lançado, acompanhado, apresentada, tomada</li>
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
      <li>ADV: um, a</li>
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
      <li>ADV: as</li>
      <li>DET: este, esta, esse, essa, estes, estas, esses, aquele, essas, aquela</li>
      <li>PRON: o, isso, isto, os, a, este, esta, as, mesmo, aquilo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: próprio, própria, próprios, próprias</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: outra</li>
      <li>ADV: muito, mais, pouco, tal, menos, outras, outros, tanto</li>
      <li>DET: qualquer, outros, outro, mais, outras, alguns, algumas, outra, muitos, vários</li>
      <li>PRON: tudo, nada, outros, ninguém, que, outro, algo, alguns, alguém, mais</li>
      <li>PROPN: que</li>
      <li>SCONJ: Que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: quanto, Que</li>
      <li>DET: que, qual, quais, Quantos, quanto, Quantas</li>
      <li>PRON: que, quem, qual, quais, quanto, quantos, quê</li>
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
      <li>ADV: quando, quanto</li>
      <li>DET: cujo, cuja, cujas, cujos, qual, quais, Quantos, quanto</li>
      <li>PRON: que, quem, qual, quais, tudo, onde, o, os, quanto, cuja</li>
      <li>SCONJ: que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: cada</li>
      <li>DET: todos, cada, toda, todo, todas, ambos, ambas, tudo</li>
      <li>PRON: todos, ambos, todas, todo, cada, Ambas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: um</li>
      <li>NOUN: um, 11, 1200, 156.942, 86.871, centenas, onze, quatro, três</li>
      <li>NUM: um, dois, três, milhões, mil, uma, duas, quatro, cinco, 15</li>
      <li>PROPN: 1.565, Doze</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: meia, meio</li>
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
      <li>NOUN: primeiro</li>
      <li>NUM: IX, quinta, 1., 2., 4ª, I, XVII</li>
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
      <li>AUX: estamos, estou, fui, vamos, podemos, somos, sou, vou, tenho, temos</li>
      <li>AUX-Fin: estamos, estou, fui, vamos, podemos, somos, sou, vou, tenho, temos</li>
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
      <li>AUX-Fin: é, foi, são, está, foram, vai, pode, era, estão, tem</li>
      <li>AUX-Inf: serem, ser, ter, terem, estarem, estar, haverem, ir, passarem, poderem</li>
      <li>INTJ-Fin: viu</li>
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
<li>This corpus uses 24 lemmas as auxiliaries (<a>aux</a>). Examples: ter, poder, ir, estar, dever, vir, continuar, começar, acabar, ser, passar, haver, voltar, deixar, parecer, chegar, costumar, ficar, andar, parar, procurar, quer, tender, tornar.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, ficar.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--NOUN (3463)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (4)</li>
      <li>VERB-Fin--NOUN-ADP(sem) (1)</li>
      <li>VERB-Fin--PRON (1708)</li>
      <li>VERB-Fin--PRON-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (2)</li>
      <li>VERB-Fin--PRON-ADP(em) (2)</li>
      <li>VERB-Fin--PRON-Acc (214)</li>
      <li>VERB-Fin--PRON-Nom (330)</li>
      <li>VERB-Ger--NOUN (74)</li>
      <li>VERB-Ger--PRON (27)</li>
      <li>VERB-Ger--PRON-Acc (15)</li>
      <li>VERB-Ger--PRON-Nom (8)</li>
      <li>VERB-Inf--NOUN (597)</li>
      <li>VERB-Inf--PRON (182)</li>
      <li>VERB-Inf--PRON-Acc (77)</li>
      <li>VERB-Inf--PRON-Nom (56)</li>
      <li>VERB-Part--NOUN (222)</li>
      <li>VERB-Part--NOUN-ADP(de) (8)</li>
      <li>VERB-Part--PRON (59)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Nom (12)</li>
      <li>VERB-Part--PRON-Nom-ADP(de) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-ADP(a) (2)</li>
      <li>VERB--NOUN-ADP(com) (1)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB-Fin--NOUN (3728)</li>
      <li>VERB-Fin--NOUN-ADP(a) (207)</li>
      <li>VERB-Fin--NOUN-ADP(com) (91)</li>
      <li>VERB-Fin--NOUN-ADP(contra) (2)</li>
      <li>VERB-Fin--NOUN-ADP(de) (232)</li>
      <li>VERB-Fin--NOUN-ADP(em) (104)</li>
      <li>VERB-Fin--NOUN-ADP(para) (32)</li>
      <li>VERB-Fin--NOUN-ADP(por) (29)</li>
      <li>VERB-Fin--NOUN-ADP(sobre) (8)</li>
      <li>VERB-Fin--PRON (463)</li>
      <li>VERB-Fin--PRON-ADP(a) (20)</li>
      <li>VERB-Fin--PRON-ADP(com) (4)</li>
      <li>VERB-Fin--PRON-ADP(de) (19)</li>
      <li>VERB-Fin--PRON-ADP(em) (8)</li>
      <li>VERB-Fin--PRON-ADP(para) (3)</li>
      <li>VERB-Fin--PRON-ADP(por) (2)</li>
      <li>VERB-Fin--PRON-ADP(sobre) (3)</li>
      <li>VERB-Fin--PRON-Acc (335)</li>
      <li>VERB-Fin--PRON-Acc-ADP(tal) (1)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Ger--NOUN (381)</li>
      <li>VERB-Ger--NOUN-ADP(a) (18)</li>
      <li>VERB-Ger--NOUN-ADP(até) (1)</li>
      <li>VERB-Ger--NOUN-ADP(com) (8)</li>
      <li>VERB-Ger--NOUN-ADP(de) (22)</li>
      <li>VERB-Ger--NOUN-ADP(em) (4)</li>
      <li>VERB-Ger--NOUN-ADP(para) (3)</li>
      <li>VERB-Ger--NOUN-ADP(por) (5)</li>
      <li>VERB-Ger--PRON (15)</li>
      <li>VERB-Ger--PRON-ADP(por) (1)</li>
      <li>VERB-Ger--PRON-Acc (24)</li>
      <li>VERB-Ger--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN (2102)</li>
      <li>VERB-Inf--NOUN-ADP(a) (73)</li>
      <li>VERB-Inf--NOUN-ADP(a)-ADP(de) (2)</li>
      <li>VERB-Inf--NOUN-ADP(com) (39)</li>
      <li>VERB-Inf--NOUN-ADP(como) (1)</li>
      <li>VERB-Inf--NOUN-ADP(de) (65)</li>
      <li>VERB-Inf--NOUN-ADP(em) (47)</li>
      <li>VERB-Inf--NOUN-ADP(para) (11)</li>
      <li>VERB-Inf--NOUN-ADP(por) (12)</li>
      <li>VERB-Inf--NOUN-ADP(sobre) (5)</li>
      <li>VERB-Inf--PRON (138)</li>
      <li>VERB-Inf--PRON-ADP(a) (5)</li>
      <li>VERB-Inf--PRON-ADP(com) (3)</li>
      <li>VERB-Inf--PRON-ADP(de) (2)</li>
      <li>VERB-Inf--PRON-ADP(em) (4)</li>
      <li>VERB-Inf--PRON-ADP(por) (1)</li>
      <li>VERB-Inf--PRON-ADP(sobre) (1)</li>
      <li>VERB-Inf--PRON-Acc (130)</li>
      <li>VERB-Inf--PRON-Acc-ADP(a) (1)</li>
      <li>VERB-Part--NOUN (181)</li>
      <li>VERB-Part--NOUN-ADP(a) (140)</li>
      <li>VERB-Part--NOUN-ADP(com) (29)</li>
      <li>VERB-Part--NOUN-ADP(de) (70)</li>
      <li>VERB-Part--NOUN-ADP(em) (55)</li>
      <li>VERB-Part--NOUN-ADP(em)-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-ADP(para) (12)</li>
      <li>VERB-Part--NOUN-ADP(por) (11)</li>
      <li>VERB-Part--NOUN-ADP(sobre) (4)</li>
      <li>VERB-Part--PRON (29)</li>
      <li>VERB-Part--PRON-ADP(a) (8)</li>
      <li>VERB-Part--PRON-ADP(com) (1)</li>
      <li>VERB-Part--PRON-ADP(de) (3)</li>
      <li>VERB-Part--PRON-ADP(em) (2)</li>
      <li>VERB-Part--PRON-ADP(por) (4)</li>
      <li>VERB-Part--PRON-Acc (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-ADP(a) (133)</li>
      <li>VERB-Fin--NOUN-ADP(com) (14)</li>
      <li>VERB-Fin--NOUN-ADP(contra) (2)</li>
      <li>VERB-Fin--NOUN-ADP(de) (40)</li>
      <li>VERB-Fin--NOUN-ADP(em) (19)</li>
      <li>VERB-Fin--NOUN-ADP(para) (9)</li>
      <li>VERB-Fin--NOUN-ADP(por) (8)</li>
      <li>VERB-Fin--NOUN-ADP(sobre) (2)</li>
      <li>VERB-Fin--PRON-ADP(a) (20)</li>
      <li>VERB-Fin--PRON-ADP(com) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (6)</li>
      <li>VERB-Fin--PRON-ADP(em) (1)</li>
      <li>VERB-Fin--PRON-ADP(para) (2)</li>
      <li>VERB-Fin--PRON-ADP(por) (2)</li>
      <li>VERB-Fin--PRON-Acc (6)</li>
      <li>VERB-Fin--PRON-Dat (157)</li>
      <li>VERB-Ger--NOUN-ADP(a) (12)</li>
      <li>VERB-Ger--NOUN-ADP(de) (5)</li>
      <li>VERB-Ger--NOUN-ADP(em) (4)</li>
      <li>VERB-Ger--NOUN-ADP(por) (3)</li>
      <li>VERB-Ger--PRON-ADP(a) (2)</li>
      <li>VERB-Ger--PRON-Dat (8)</li>
      <li>VERB-Inf--NOUN-ADP(a) (67)</li>
      <li>VERB-Inf--NOUN-ADP(com) (3)</li>
      <li>VERB-Inf--NOUN-ADP(de) (19)</li>
      <li>VERB-Inf--NOUN-ADP(em) (11)</li>
      <li>VERB-Inf--NOUN-ADP(para) (6)</li>
      <li>VERB-Inf--NOUN-ADP(por) (2)</li>
      <li>VERB-Inf--NOUN-ADP(sobre) (2)</li>
      <li>VERB-Inf--PRON-ADP(a) (6)</li>
      <li>VERB-Inf--PRON-ADP(de) (4)</li>
      <li>VERB-Inf--PRON-Dat (39)</li>
      <li>VERB-Part--NOUN-ADP(a) (7)</li>
      <li>VERB-Part--NOUN-ADP(com) (1)</li>
      <li>VERB-Part--NOUN-ADP(de) (3)</li>
      <li>VERB-Part--PRON-ADP(para) (1)</li>
      <li>VERB-Part--PRON-Dat (14)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
