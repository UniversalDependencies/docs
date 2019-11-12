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

The following people have contributed to making this treebank part of UD: Alexandre Rademaker, Cláudia Freitas, Elvis de Souza, Aline Silveira, Tatiana Cavalcanti, Wograine Evelyn, Luisa Rocha, Isabela Soares-Bastos, Eckhard Bick, Fabricio Chalub, Guilherme Paulino-Passos, Livy Real, Valeria de Paiva, Daniel Zeman, Martin Popel, David Mareček, Natalia Silveira, André Martins.

Repository: [UD_Portuguese-Bosque](https://github.com/UniversalDependencies/UD_Portuguese-Bosque)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpt_bosque25)<br />
Download all treebanks: [UD 2.5](/#download)

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

The conversion was implemented by Eckhard Bick and revised mainly by:

- Alexandre Rademaker
- Claudia Freitas
- Fabricio Chalub

(see other contributors below)

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

[Case](pt_bosque-feat-Case.html) – [Definite](pt_bosque-feat-Definite.html) – [Foreign](pt_bosque-feat-Foreign.html) – [Gender](pt_bosque-feat-Gender.html) – [Mood](pt_bosque-feat-Mood.html) – [Number](pt_bosque-feat-Number.html) – [NumType](pt_bosque-feat-NumType.html) – [Person](pt_bosque-feat-Person.html) – [Polarity](pt_bosque-feat-Polarity.html) – [PronType](pt_bosque-feat-PronType.html) – [Reflex](pt_bosque-feat-Reflex.html) – [Tense](pt_bosque-feat-Tense.html) – [VerbForm](pt_bosque-feat-VerbForm.html) – [Voice](pt_bosque-feat-Voice.html)

## Relations

[acl](pt_bosque-dep-acl.html) – [acl:relcl](pt_bosque-dep-acl-relcl.html) – [advcl](pt_bosque-dep-advcl.html) – [advmod](pt_bosque-dep-advmod.html) – [amod](pt_bosque-dep-amod.html) – [appos](pt_bosque-dep-appos.html) – [aux](pt_bosque-dep-aux.html) – [aux:pass](pt_bosque-dep-aux-pass.html) – [case](pt_bosque-dep-case.html) – [cc](pt_bosque-dep-cc.html) – [ccomp](pt_bosque-dep-ccomp.html) – [compound](pt_bosque-dep-compound.html) – [conj](pt_bosque-dep-conj.html) – [cop](pt_bosque-dep-cop.html) – [csubj](pt_bosque-dep-csubj.html) – [det](pt_bosque-dep-det.html) – [discourse](pt_bosque-dep-discourse.html) – [dislocated](pt_bosque-dep-dislocated.html) – [expl](pt_bosque-dep-expl.html) – [fixed](pt_bosque-dep-fixed.html) – [flat](pt_bosque-dep-flat.html) – [flat:foreign](pt_bosque-dep-flat-foreign.html) – [flat:name](pt_bosque-dep-flat-name.html) – [goeswith](pt_bosque-dep-goeswith.html) – [iobj](pt_bosque-dep-iobj.html) – [mark](pt_bosque-dep-mark.html) – [nmod](pt_bosque-dep-nmod.html) – [nsubj](pt_bosque-dep-nsubj.html) – [nsubj:pass](pt_bosque-dep-nsubj-pass.html) – [nummod](pt_bosque-dep-nummod.html) – [obj](pt_bosque-dep-obj.html) – [obl](pt_bosque-dep-obl.html) – [obl:agent](pt_bosque-dep-obl-agent.html) – [orphan](pt_bosque-dep-orphan.html) – [parataxis](pt_bosque-dep-parataxis.html) – [punct](pt_bosque-dep-punct.html) – [reparandum](pt_bosque-dep-reparandum.html) – [root](pt_bosque-dep-root.html) – [vocative](pt_bosque-dep-vocative.html) – [xcomp](pt_bosque-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9365 sentences, 210960 tokens and 227798 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 29556 tokens (14%) that are not followed by a space.</li>
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
<li>This corpus contains 3 word types tagged as particles (PART): anti, pré-, pós</li>
</ul>

<ul>
<li>This corpus contains 61 lemmas tagged as pronouns (PRON): a, algo, algum, alguém, ambos, aquele, aquilo, cada, cujo, demais, dezena, diferentes, disso, ela, elas, ele, ele/ela, eles, eles/elas, esse, este, eu, gente, isso, isto, mais, me, mesmo, meu, muito, mundo, nada, nenhum, ninguém, nosso, nós, o, onde, outrem, outro, pouco, qual, qualquer, quanto, que, quem, quê, se, seu, si, tal, tanto, todas, todo, tu, tudo, um, você, várias, vários, vós</li>
</ul>

<ul>
<li>This corpus contains 53 lemmas tagged as determiners (DET): $2e, a, algum, ambos, aquele, as, bastante, cada, certo, certos, cujo, demais, dezena, dezenas, diferentes, diversos, esse, este, la, mais, menos, meu, muita, muito, muitíssimo, nada, nenhum, nosso, o, os, outro, pouco, próprio, qual, qualquer, qualquier, quanto, que, semelhante, seu, tal, tanto, teu, toda, todo, tudo, tão, um, uma, umo, vosso, várias, vários</li>
</ul>

<ul>
<li>Out of the above, 32 lemmas occurred sometimes as PRON and sometimes as DET: a, algum, ambos, aquele, cada, cujo, demais, dezena, diferentes, esse, este, mais, meu, muito, nada, nenhum, nosso, o, outro, pouco, qual, qualquer, quanto, que, seu, tal, tanto, todo, tudo, um, várias, vários</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): estar, haver, ir, ser, ter</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: estar, haver, ir, ser, ter</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: é, foi, são, está, foram, vai, era, será, estão, tem</li>
    <li>VERB: tem, há, disse, pode, diz, é, deve, está, fez, têm</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: sendo, tendo, estando</li>
    <li>PRON: se</li>
    <li>SCONJ: sendo</li>
    <li>VERB: tendo, passando, dando, incluindo, fazendo, ganhando, dizendo, mostrando, considerando, esperando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ser, ter, estar, serem, ir, terem, haver, estarem, tê, estarmos</li>
    <li>VERB: fazer, ter, ver, dar, dizer, partir, falar, manter, saber, passar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: sido, estado, ido</li>
    <li>VERB: feito, feita, feitas, dito, vindo, tido, eleito, visto, aberto, considerado</li>
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
      <li>ADJ: primeira, nova, maior, grande, última, mesma, segunda, boa, política, passada</li>
      <li>ADV: quanto, tal</li>
      <li>DET: a, as, uma, sua, esta, suas, essa, toda, outras, algumas</li>
      <li>NOUN: pessoas, parte, semana, empresa, forma, empresas, vez, casa, cidade, vida</li>
      <li>NUM: 4ª, dezenas, meia</li>
      <li>PRON: que, se, a, ela, onde, as, elas, lhe, esta, eu</li>
      <li>PROPN: Lisboa, Folha, Câmara, Alemanha, Comissão, França, Espanha, Europa, Rússia, Associação</li>
      <li>SCONJ: Uma, uns</li>
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
      <li>ADP: de</li>
      <li>ADV: quanto, não, teatral, um</li>
      <li>AUX-Part: sido</li>
      <li>DET: o, os, um, seu, este, seus, esse, todos, outros, outro</li>
      <li>NOUN: anos, presidente, ano, dia, país, estado, tempo, contos, grupo, governo</li>
      <li>NUM: cento, meia, milhões, dúzia, milhares, 1., 185/60, XVII, bilhões</li>
      <li>PART: pós</li>
      <li>PRON: que, se, o, ele, isso, tudo, eles, os, lhe, onde</li>
      <li>PROPN: São, Portugal, Brasil, José, Governo, EUA, Rio, Estados, João, PÚBLICO</li>
      <li>SCONJ: que</li>
      <li>VERB: feito, eleito, aberto, considerado, ligados, realizado, acusado, divulgado, entregue, feitos</li>
      <li>VERB-Fin: considerara</li>
      <li>VERB-Part: feito, eleito, aberto, considerado, ligados, realizado, acusado, divulgado, entregue, feitos</li>
      <li>X: Dream, Insight, MacMillan, consejero, dolce, godfather, kebab, killer, line, primitive</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Unsp
    <ul>
      <li>ADJ: melhor, capaz, especial, favorável, inconvenientes, jovens, mole, Independente, Medíocre, Real</li>
      <li>ADV: Que, tal</li>
      <li>DET: cada, qual, qualquer, mais</li>
      <li>NOUN: especialistas, representantes, jornalistas, jovens, habitantes, estudantes, visitantes, Aveiro, Esposende, Presidente</li>
      <li>NUM: 2., I</li>
      <li>PRON: se, quem, me, nos, eu, você, nós, lhe, mim, mais</li>
      <li>PRON-Ger: se</li>
      <li>PROPN: Coimbra, Alvalade, Maastricht, Barcelos, Braga, Ermesinde, Aveiro, Damasco, Drosnin, Frankfurt</li>
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
      <li>AUX: são, foram, estão, vão, serão, têm, eram, serem, estavam, sejam</li>
      <li>AUX-Fin: são, foram, estão, vão, serão, têm, eram, estavam, sejam, estamos</li>
      <li>AUX-Inf: serem, terem, estarem, estarmos, haverem, irem, sermos</li>
      <li>DET: os, as, seus, suas, todos, outros, outras, alguns, algumas, todas</li>
      <li>NOUN: anos, pessoas, contos, dias, pontos, empresas, meses, países, vezes, problemas</li>
      <li>NUM: milhões, milhares, 24, bilhões, dezenas</li>
      <li>PRON: que, se, eles, os, nos, as, outros, todos, elas, nós</li>
      <li>PROPN: EUA, Estados, Assuntos, Nações, Negócios, Antas, Açores, Comandos, Encontros, Forças</li>
      <li>VERB: têm, podem, estão, devem, existem, fizeram, dizem, feitas, temos, querem</li>
      <li>VERB-Fin: têm, podem, estão, devem, existem, fizeram, dizem, temos, querem, chegaram</li>
      <li>VERB-Inf: terem, estarem, ficarem, aceitarem, chegarem, exigirem, fazerem, fornecerem, funcionarem, manterem</li>
      <li>VERB-Part: feitas, ligados, feitos, acusados, colocados, realizados, chamados, ligadas, apresentadas, envolvidos</li>
      <li>X: made</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: maior, primeiro, grande, primeira, novo, nova, mesmo, nacional, passado, melhor</li>
      <li>ADP: de</li>
      <li>ADV: quanto, tal, não, teatral, um</li>
      <li>AUX-Fin: é, foi, está, vai, era, será, tem, seria, estava, seja</li>
      <li>AUX-Inf: ser, ter, estar, ir, haver</li>
      <li>AUX-Part: sido</li>
      <li>DET: o, a, um, uma, sua, seu, este, esta, esse, qualquer</li>
      <li>NOUN: presidente, ano, dia, país, estado, parte, tempo, grupo, governo, vez</li>
      <li>NUM: cento, meia, dúzia, 14, 2, 3, 94, 1., 185/60, 2.</li>
      <li>PART: pós</li>
      <li>PRON: que, se, o, ele, isso, lhe, onde, quem, tudo, a</li>
      <li>PRON-Ger: se</li>
      <li>PROPN: Paulo, Nacional, São, Portugal, Porto, Unidos, Brasil, José, Lisboa, Silva</li>
      <li>SCONJ: que, Uma, uns</li>
      <li>VERB: tem, há, disse, pode, diz, é, deve, está, fez, afirmou</li>
      <li>VERB-Fin: tem, há, disse, pode, diz, é, deve, está, fez, afirmou</li>
      <li>VERB-Inf: ter, dar, começar, haver, retirar, saber, ver, aprovar, atingir, cair</li>
      <li>VERB-Part: feita, feito, eleito, aberto, considerado, considerada, realizado, acusado, criada, divulgado</li>
      <li>X: for, jet, ski, Burgos, Children, Dictionary, Manager, Sure, Team, non-mesuré</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Unsp
    <ul>
      <li>ADV: Que</li>
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
      <li>DET: o, a, os, as, esta, o(s), um, uma</li>
      <li>PRON: o, os, a, as, que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: um, uma, outra, Nada, o</li>
      <li>PRON: um</li>
      <li>SCONJ: Uma, uns</li>
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
      <li>AUX-Fin: seria, teria, seriam, iria, estaria, teriam, estariam, iriam, ia</li>
      <li>VERB-Fin: poderia, deveria, gostaria, ficaria, acabaria, teria, daria, deveriam, faria, seria</li>
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
      <li>AUX-Fin: é, foi, são, está, foram, vai, era, será, estão, tem</li>
      <li>VERB-Fin: tem, há, disse, pode, diz, é, deve, está, fez, têm</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: seja, for, tenha, fosse, sejam, esteja, estejam, fossem, forem, tenham</li>
      <li>VERB-Fin: seja, possa, tenha, quiser, leia, possam, recorde, haja, houver, pense</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, serão, terá, for, irá, estará, estarão, forem, irão, estiver</li>
      <li>VERB-Fin: poderá, deverá, terá, deverão, poderão, terão, haverá, será, quiser, ficará</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, estava, tinha, eram, estavam, fosse, havia, haviam, ia, tinham</li>
      <li>VERB-Fin: tinha, havia, fazia, dizia, estava, estavam, parecia, era, podia, tinham</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: foi, foram, esteve, fui, estiveram, fomos, teve, tiveram, estivemos, teria</li>
      <li>AUX-Fin: foi, foram, esteve, fui, estiveram, teve, fomos, tiveram, estivemos, teria</li>
      <li>VERB-Fin: disse, fez, afirmou, teve, foi, chegou, deu, ficou, começou, passou</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fora, foram, tiveram</li>
      <li>VERB-Fin: fizera, tornara, acabara, desaparecera, dissera, levara, Nascera, Quisera, Saíra, abrangera</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: é, são, está, vai, estão, tem, seja, vão, têm, tenha</li>
      <li>VERB-Fin: tem, há, pode, diz, é, deve, está, têm, podem, faz</li>
      <li>VERB-Inf: renderem</li>
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
      <li>ADV: um</li>
      <li>DET: o, a, os, as, um, uma, uns, esta, umas, outra</li>
      <li>PRON: o, os, a, as, que, um</li>
      <li>PROPN: O, A</li>
      <li>SCONJ: Uma, uns</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: este, esta, esse, essa, estes, estas, esses, aquele, essas, aquela</li>
      <li>PRON: o, isso, isto, os, a, este, as, esta, mesmo, aquilo</li>
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
      <li>ADV: tal, quanto</li>
      <li>DET: qualquer, outros, outro, mais, outras, alguns, algumas, outra, muitos, vários</li>
      <li>PRON: tudo, nada, outros, ninguém, que, alguns, outro, algo, outras, alguém</li>
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
      <li>PRON: se, ele, lhe, o, eles, eu, me, ela, nos, a</li>
      <li>PRON-Ger: se</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: quanto</li>
      <li>DET: cujo, cuja, cujas, cujos, qual, quais, Quantos, quanto</li>
      <li>PRON: que, onde, quem, qual, quais, tudo, o, os, quanto, Nada</li>
      <li>SCONJ: que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
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
      <li>NUM: um, dois, três, milhões, mil, uma, duas, quatro, cinco, 15</li>
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
      <li>NOUN: quarto, primeiro</li>
      <li>NUM: 1º, 2º, quinta, 1., 2., 4ª, I, XVII</li>
      <li>PROPN: IX</li>
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
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: estamos, fui, estou, vamos, somos, sou, vou, tenho, estava, tinha</li>
      <li>AUX-Fin: estamos, fui, estou, vamos, somos, sou, vou, tenho, estava, tinha</li>
      <li>AUX-Inf: estarmos, sermos</li>
      <li>PRON: eu, me, nos, nós, mim, nosco, si</li>
      <li>VERB-Fin: temos, sei, tenho, acho, podemos, espero, penso, queremos, quero, acredito</li>
      <li>VERB-Inf: adaptarmos, apanhá, dependermos, entender, montarmos, ocuparmos, olharmos, ouvirmos, podermos, subir</li>
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
      <li>AUX-Fin: é, foi, são, está, foram, vai, era, será, estão, tem</li>
      <li>AUX-Inf: serem, ser, ter, terem, estar, estarem, haverem, ir, haver, irem</li>
      <li>PRON: se, ele, lhe, o, eles, ela, a, elas, você, lo</li>
      <li>PRON-Ger: se</li>
      <li>VERB-Fin: tem, há, disse, pode, diz, é, deve, está, fez, têm</li>
      <li>VERB-Inf: ter, terem, estarem, dar, começar, ficarem, haver, retirar, saber, ver</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


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
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: ter, ir, estar, ser, haver.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, estar.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB-Fin--NOUN (3487)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(sem) (1)</li>
      <li>VERB-Fin--PRON (1715)</li>
      <li>VERB-Fin--PRON-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-ADP(em) (1)</li>
      <li>VERB-Fin--PRON-Acc (213)</li>
      <li>VERB-Fin--PRON-Nom (333)</li>
      <li>VERB-Ger--NOUN (75)</li>
      <li>VERB-Ger--PRON (26)</li>
      <li>VERB-Ger--PRON-Acc (15)</li>
      <li>VERB-Ger--PRON-Nom (8)</li>
      <li>VERB-Inf--NOUN (595)</li>
      <li>VERB-Inf--PRON (183)</li>
      <li>VERB-Inf--PRON-Acc (76)</li>
      <li>VERB-Inf--PRON-Nom (57)</li>
      <li>VERB-Part--NOUN (222)</li>
      <li>VERB-Part--NOUN-ADP(de) (3)</li>
      <li>VERB-Part--PRON (60)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Nom (12)</li>
      <li>VERB-Part--PRON-Nom-ADP(de) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-ADP(a) (2)</li>
      <li>VERB-Fin--NOUN (3718)</li>
      <li>VERB-Fin--NOUN-ADP(a) (211)</li>
      <li>VERB-Fin--NOUN-ADP(com) (92)</li>
      <li>VERB-Fin--NOUN-ADP(contra) (2)</li>
      <li>VERB-Fin--NOUN-ADP(de) (216)</li>
      <li>VERB-Fin--NOUN-ADP(em) (106)</li>
      <li>VERB-Fin--NOUN-ADP(para) (31)</li>
      <li>VERB-Fin--NOUN-ADP(por) (29)</li>
      <li>VERB-Fin--NOUN-ADP(sobre) (8)</li>
      <li>VERB-Fin--PRON (466)</li>
      <li>VERB-Fin--PRON-ADP(a) (23)</li>
      <li>VERB-Fin--PRON-ADP(com) (4)</li>
      <li>VERB-Fin--PRON-ADP(de) (21)</li>
      <li>VERB-Fin--PRON-ADP(em) (8)</li>
      <li>VERB-Fin--PRON-ADP(para) (3)</li>
      <li>VERB-Fin--PRON-ADP(por) (2)</li>
      <li>VERB-Fin--PRON-ADP(sobre) (3)</li>
      <li>VERB-Fin--PRON-Acc (327)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Ger--NOUN (381)</li>
      <li>VERB-Ger--NOUN-ADP(a) (18)</li>
      <li>VERB-Ger--NOUN-ADP(até) (1)</li>
      <li>VERB-Ger--NOUN-ADP(com) (8)</li>
      <li>VERB-Ger--NOUN-ADP(de) (20)</li>
      <li>VERB-Ger--NOUN-ADP(em) (4)</li>
      <li>VERB-Ger--NOUN-ADP(para) (3)</li>
      <li>VERB-Ger--NOUN-ADP(por) (5)</li>
      <li>VERB-Ger--PRON (15)</li>
      <li>VERB-Ger--PRON-ADP(por) (1)</li>
      <li>VERB-Ger--PRON-Acc (23)</li>
      <li>VERB-Ger--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN (2099)</li>
      <li>VERB-Inf--NOUN-ADP(a) (73)</li>
      <li>VERB-Inf--NOUN-ADP(a)-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN-ADP(com) (39)</li>
      <li>VERB-Inf--NOUN-ADP(como) (1)</li>
      <li>VERB-Inf--NOUN-ADP(de) (55)</li>
      <li>VERB-Inf--NOUN-ADP(em) (47)</li>
      <li>VERB-Inf--NOUN-ADP(para) (11)</li>
      <li>VERB-Inf--NOUN-ADP(por) (12)</li>
      <li>VERB-Inf--NOUN-ADP(sobre) (5)</li>
      <li>VERB-Inf--PRON (135)</li>
      <li>VERB-Inf--PRON-ADP(a) (6)</li>
      <li>VERB-Inf--PRON-ADP(com) (3)</li>
      <li>VERB-Inf--PRON-ADP(de) (4)</li>
      <li>VERB-Inf--PRON-ADP(em) (4)</li>
      <li>VERB-Inf--PRON-ADP(por) (1)</li>
      <li>VERB-Inf--PRON-ADP(sobre) (1)</li>
      <li>VERB-Inf--PRON-Acc (130)</li>
      <li>VERB-Inf--PRON-Acc-ADP(a) (1)</li>
      <li>VERB-Part--NOUN (183)</li>
      <li>VERB-Part--NOUN-ADP(a) (141)</li>
      <li>VERB-Part--NOUN-ADP(com) (30)</li>
      <li>VERB-Part--NOUN-ADP(de) (67)</li>
      <li>VERB-Part--NOUN-ADP(em) (57)</li>
      <li>VERB-Part--NOUN-ADP(para) (12)</li>
      <li>VERB-Part--NOUN-ADP(por) (8)</li>
      <li>VERB-Part--NOUN-ADP(sobre) (4)</li>
      <li>VERB-Part--PRON (29)</li>
      <li>VERB-Part--PRON-ADP(a) (8)</li>
      <li>VERB-Part--PRON-ADP(com) (1)</li>
      <li>VERB-Part--PRON-ADP(de) (3)</li>
      <li>VERB-Part--PRON-ADP(em) (2)</li>
      <li>VERB-Part--PRON-ADP(por) (3)</li>
      <li>VERB-Part--PRON-Acc (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-ADP(a) (125)</li>
      <li>VERB-Fin--NOUN-ADP(com) (14)</li>
      <li>VERB-Fin--NOUN-ADP(contra) (2)</li>
      <li>VERB-Fin--NOUN-ADP(de) (25)</li>
      <li>VERB-Fin--NOUN-ADP(em) (17)</li>
      <li>VERB-Fin--NOUN-ADP(para) (8)</li>
      <li>VERB-Fin--NOUN-ADP(por) (6)</li>
      <li>VERB-Fin--NOUN-ADP(sobre) (2)</li>
      <li>VERB-Fin--PRON-ADP(a) (17)</li>
      <li>VERB-Fin--PRON-ADP(com) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (4)</li>
      <li>VERB-Fin--PRON-ADP(em) (1)</li>
      <li>VERB-Fin--PRON-ADP(para) (2)</li>
      <li>VERB-Fin--PRON-ADP(por) (2)</li>
      <li>VERB-Fin--PRON-Acc (6)</li>
      <li>VERB-Fin--PRON-Dat (156)</li>
      <li>VERB-Ger--NOUN-ADP(a) (12)</li>
      <li>VERB-Ger--NOUN-ADP(de) (3)</li>
      <li>VERB-Ger--NOUN-ADP(em) (4)</li>
      <li>VERB-Ger--NOUN-ADP(por) (3)</li>
      <li>VERB-Ger--PRON-ADP(a) (2)</li>
      <li>VERB-Ger--PRON-Dat (8)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-ADP(a) (67)</li>
      <li>VERB-Inf--NOUN-ADP(com) (3)</li>
      <li>VERB-Inf--NOUN-ADP(de) (16)</li>
      <li>VERB-Inf--NOUN-ADP(em) (11)</li>
      <li>VERB-Inf--NOUN-ADP(para) (6)</li>
      <li>VERB-Inf--NOUN-ADP(por) (2)</li>
      <li>VERB-Inf--NOUN-ADP(sobre) (3)</li>
      <li>VERB-Inf--PRON-ADP(a) (5)</li>
      <li>VERB-Inf--PRON-ADP(de) (2)</li>
      <li>VERB-Inf--PRON-Dat (39)</li>
      <li>VERB-Part--NOUN-ADP(a) (7)</li>
      <li>VERB-Part--NOUN-ADP(com) (1)</li>
      <li>VERB-Part--NOUN-ADP(de) (3)</li>
      <li>VERB-Part--NOUN-ADP(por) (3)</li>
      <li>VERB-Part--PRON-ADP(para) (1)</li>
      <li>VERB-Part--PRON-ADP(por) (1)</li>
      <li>VERB-Part--PRON-Dat (14)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: render se</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>dep</a></li>
</ul>
