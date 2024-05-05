---
layout: base
title:  'UD_Portuguese-Porttinari'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Portuguese Porttinari

Language: [Portuguese](/pt/index.html) (code: `pt`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Magali Sanches Duran, Lucelene Lopes, Maria das Graças Volpe Nunes, Thiago Alexandre Salgueiro Pardo.

Repository: [UD_Portuguese-Porttinari](https://github.com/UniversalDependencies/UD_Portuguese-Porttinari)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpt_porttinari214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY 4.0

Genre: news

Questions, comments?
General annotation questions (either Portuguese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Portuguese-Porttinari/issues).
If you want to collaborate, please contact [taspardo&nbsp;(æt)&nbsp;icmc&nbsp;•&nbsp;usp&nbsp;•&nbsp;br].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

Porttinari-base [(Duran et al., 2023)](https://sol.sbc.org.br/index.php/stil/article/view/25443/25264) is the journalistic portion of Porttinari (which stands for “PORTuguese Treebank”), which shall be a large multigenre treebank for Portuguese [(Pardo et al., 2021)](https://sol.sbc.org.br/index.php/stil/article/view/17778/17612), following the "Universal Dependencies" international grammar framework [(de Marneffe et al., 2021)](https://aclanthology.org/2021.cl-2.11/).



Porttinari-base [(Duran et al., 2023)](https://sol.sbc.org.br/index.php/stil/article/view/25443/25264) is the journalistic portion of Porttinari (which stands for “PORTuguese Treebank”), which shall be a large multigenre treebank for Portuguese [(Pardo et al., 2021)](https://sol.sbc.org.br/index.php/stil/article/view/17778/17612), following the "Universal Dependencies" international grammar framework [(de Marneffe et al., 2021)](https://aclanthology.org/2021.cl-2.11/).

As reported by [Duran et al., (2023)](https://sol.sbc.org.br/index.php/stil/article/view/25443/25264), Porttinari is currently composed by three subcorpora with different characteristics and purposes:

* Porttinari-base (released here), a corpus that is manually revised in detail to serve as gold standard (divided into training, development and test folds), with average annotation review agreement (kappa) of 97.8% and 96.2% for part of speech tags and dependency relations, respectively;

* Porttinari-check, a small corpus structurally similar to Porttinari-base to serve as testbed for additional and diversified evaluations and to illustrate the contrast between manual and automatic annotations;

* Porttinari-automatic, a very large corpus that was automatically annotated by a state of the art parser trained on Porttinari-base.

The texts in the treebank are from Folha de São Paulo newspaper, which are publicly available at Kaggle website. Overall, the journalistc portion of Porttinari includes 167,048 news articles, with 3,964,321 sentences and 94,646,080 tokens, which are distributed in the subcorpora as follows.

![subcorpora](https://github.com/UniversalDependencies/UD_Portuguese-Porttinari/assets/41649292/0eb597a6-4b41-49e6-b360-3afed709ad13)

For the interested reader, Porttinari-check and Porttinari-automatic, as well as other related information, may be accessed at [https://sites.google.com/icmc.usp.br/poetisa/porttinari](https://sites.google.com/icmc.usp.br/poetisa/).

## Acknowledgments

This work was carried out at the Center for Artificial Intelligence of the University of São Paulo (C4AI - http://c4ai.inova.usp.br/), with support by the São Paulo Research Foundation (FAPESP grant #2019/07665-4) and by the IBM Corporation. The project was also supported by the Ministry of Science, Technology, and Innovation, with resources of Law N. 8.248, of October 23, 1991, within the scope of PPI-SOFTEX, coordinated by Softex and published as Residence in TIC 13, DOU 01245.010222/2022-44.

## References

* Duran, M.S.; Lopes, L.; Nunes, M.G.V.; Pardo, T.A.S. (2023). The Dawn of the Porttinari Multigenre Treebank: Introducing its Journalistic Portion. In the Proceedings of the 14th Symposium in Information and Human Language Technology (STIL), pp. 115-124. September, 25-29. [pdf](https://sol.sbc.org.br/index.php/stil/article/view/25443/25264)

* Pardo, T.A.S.; Duran, M.S.; Lopes, L.; Di Felippo, A.; Roman, N.T.; Nunes, M.G.V. (2021). Porttinari - a large multi-genre treebank for brazilian portuguese. In the Proceedings of the XIII Symposium in Information and Human Language (STIL), pp. 1-10. November, 29 to December, 3. [pdf](https://sol.sbc.org.br/index.php/stil/article/view/17778/17612)


# Statistics of UD Portuguese Porttinari

## POS Tags

[ADJ](pt_porttinari-pos-ADJ.html) – [ADP](pt_porttinari-pos-ADP.html) – [ADV](pt_porttinari-pos-ADV.html) – [AUX](pt_porttinari-pos-AUX.html) – [CCONJ](pt_porttinari-pos-CCONJ.html) – [DET](pt_porttinari-pos-DET.html) – [INTJ](pt_porttinari-pos-INTJ.html) – [NOUN](pt_porttinari-pos-NOUN.html) – [NUM](pt_porttinari-pos-NUM.html) – [PRON](pt_porttinari-pos-PRON.html) – [PROPN](pt_porttinari-pos-PROPN.html) – [PUNCT](pt_porttinari-pos-PUNCT.html) – [SCONJ](pt_porttinari-pos-SCONJ.html) – [SYM](pt_porttinari-pos-SYM.html) – [VERB](pt_porttinari-pos-VERB.html) – [X](pt_porttinari-pos-X.html)

## Features

[Abbr](pt_porttinari-feat-Abbr.html) – [Case](pt_porttinari-feat-Case.html) – [Definite](pt_porttinari-feat-Definite.html) – [Foreign](pt_porttinari-feat-Foreign.html) – [Gender](pt_porttinari-feat-Gender.html) – [Mood](pt_porttinari-feat-Mood.html) – [Number](pt_porttinari-feat-Number.html) – [NumType](pt_porttinari-feat-NumType.html) – [Person](pt_porttinari-feat-Person.html) – [Poss](pt_porttinari-feat-Poss.html) – [PronType](pt_porttinari-feat-PronType.html) – [Tense](pt_porttinari-feat-Tense.html) – [VerbForm](pt_porttinari-feat-VerbForm.html) – [Voice](pt_porttinari-feat-Voice.html)

## Relations

[acl](pt_porttinari-dep-acl.html) – [acl:relcl](pt_porttinari-dep-acl-relcl.html) – [advcl](pt_porttinari-dep-advcl.html) – [advmod](pt_porttinari-dep-advmod.html) – [amod](pt_porttinari-dep-amod.html) – [appos](pt_porttinari-dep-appos.html) – [aux](pt_porttinari-dep-aux.html) – [aux:pass](pt_porttinari-dep-aux-pass.html) – [case](pt_porttinari-dep-case.html) – [cc](pt_porttinari-dep-cc.html) – [ccomp](pt_porttinari-dep-ccomp.html) – [ccomp:speech](pt_porttinari-dep-ccomp-speech.html) – [conj](pt_porttinari-dep-conj.html) – [cop](pt_porttinari-dep-cop.html) – [csubj](pt_porttinari-dep-csubj.html) – [csubj:outer](pt_porttinari-dep-csubj-outer.html) – [csubj:pass](pt_porttinari-dep-csubj-pass.html) – [det](pt_porttinari-dep-det.html) – [discourse](pt_porttinari-dep-discourse.html) – [dislocated](pt_porttinari-dep-dislocated.html) – [expl](pt_porttinari-dep-expl.html) – [fixed](pt_porttinari-dep-fixed.html) – [flat](pt_porttinari-dep-flat.html) – [flat:foreign](pt_porttinari-dep-flat-foreign.html) – [flat:name](pt_porttinari-dep-flat-name.html) – [iobj](pt_porttinari-dep-iobj.html) – [list](pt_porttinari-dep-list.html) – [mark](pt_porttinari-dep-mark.html) – [nmod](pt_porttinari-dep-nmod.html) – [nsubj](pt_porttinari-dep-nsubj.html) – [nsubj:outer](pt_porttinari-dep-nsubj-outer.html) – [nsubj:pass](pt_porttinari-dep-nsubj-pass.html) – [nummod](pt_porttinari-dep-nummod.html) – [obj](pt_porttinari-dep-obj.html) – [obl](pt_porttinari-dep-obl.html) – [obl:agent](pt_porttinari-dep-obl-agent.html) – [orphan](pt_porttinari-dep-orphan.html) – [parataxis](pt_porttinari-dep-parataxis.html) – [punct](pt_porttinari-dep-punct.html) – [reparandum](pt_porttinari-dep-reparandum.html) – [root](pt_porttinari-dep-root.html) – [vocative](pt_porttinari-dep-vocative.html) – [xcomp](pt_porttinari-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 8418 sentences, 157490 tokens and 168080 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 31009 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 386 types of words that contain both letters and punctuation. Examples: ex-presidente, segunda-feira, ex-ministro, quinta-feira, sexta-feira, vice-presidente, sr., e-mail, J&F, Procuradoria-Geral, St., procurador-geral, Atlético-GO, centro-americanos, ex-procurador, on-line, porta-voz, quarta-feira, Jr., procuradora-geral, tel., Rio-2016, ex-governador, ex-prefeito, força-tarefa, meio-campo, má-fé, norte-americano, norte-coreano, primeiro-ministro, pré-candidato, sex., Dr., Jong-un, PUC-Rio, S., Social-Democrata, ar-condicionado, dom., ex-diretor, hip-hop, km/h, latino-americanos, matéria-prima, norte-americana, nova-iorquinos, segundas-feiras, start-up, sáb., terça-feira</li>
</ul>

<ul>
<li>This corpus contains 10590 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 271 types of multi-word tokens. Examples: do, da, no, na, dos, ao, das, à, nos, pelo, pela, nas, aos, às, neste, nesta, pelos, deste, deles, disso, desse, nesse, dele, num, desta, pelas, dessa, numa, delas, desses, consigo, dessas, dela, nessa, daqui, daí, nele, naquele, nessas, nisso, tornou-se, naquela, nesses, pode-se, comigo, nela, trata-se, daquelas, daquele, destes.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 48 lemmas tagged as pronouns (PRON): algo, algum, alguém, ambos, aquele, aquilo, cada, demais, ele, esse, este, eu, isso, isto, lhe, lo, me, mesmo, meu, mim, muito, nada, nenhum, ninguém, nos, nosso, nós, o, outro, pouco, qual, qualquer, quanto, que, quem, quê, se, seu, si, tal, tanto, te, todo, tu, tudo, um, você, vários</li>
</ul>

<ul>
<li>This corpus contains 31 lemmas tagged as determiners (DET): algum, ambos, aquele, cada, certo, certos, cujo, demais, diversos, esse, este, inúmeros, mais, menos, mesmo, meu, nenhum, nosso, o, outro, próprio, qual, qualquer, quanto, que, seu, tal, tanto, todo, um, vários</li>
</ul>

<ul>
<li>Out of the above, 23 lemmas occurred sometimes as PRON and sometimes as DET: algum, ambos, aquele, cada, demais, esse, este, mesmo, meu, nenhum, nosso, o, outro, qual, qualquer, quanto, que, seu, tal, tanto, todo, um, vários</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as auxiliaries (AUX): estar, haver, ir, ser, ter, vir</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: haver, ir, ser, ter, vir</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: é, foi, está, são, era, foram, será, estão, estava, vai</li>
    <li>VERB: diz, tem, há, disse, pode, afirma, deve, teve, afirmou, tinha</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: sendo, tendo, estando</li>
    <li>VERB: fazendo, dizendo, acontecendo, incluindo, usando, trabalhando, dando, deixando, envolvendo, tomando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ser, ter, estar, serem, terem, estarem, ir, sermos, vir</li>
    <li>VERB: fazer, ter, ver, dar, partir, ficar, dizer, chegar, entender, mudar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: passado, passada, errado, premiada, preso, aberta, privado, aberto, elevada, presos</li>
    <li>AUX: sido</li>
    <li>VERB: feito, feita, devido, feitas, usado, preso, apresentado, recebido, visto, apontado</li>
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
      <li>ADJ: primeira, nova, brasileira, segunda, muitas, última, política, boa, novas, pública</li>
      <li>ADJ-Part: passada, premiada, aberta, elevada, privadas, adequada, conhecida, fechada, premiadas, privada</li>
      <li>DET: a, as, uma, sua, essa, esta, suas, essas, minha, outras</li>
      <li>NOUN: pessoas, vez, parte, empresa, casa, cidade, história, empresas, gente, forma</li>
      <li>NUM: uma, duas, meia</li>
      <li>PRON: ela, a, elas, as, essa, la, esta, algumas, outra, outras</li>
      <li>VERB-Part: feita, feitas, realizada, procurada, criada, seguida, usadas, considerada, dada, iniciada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: primeiro, novo, últimos, segundo, muitos, bom, preciso, passado, último, próximo</li>
      <li>ADJ-Part: passado, errado, preso, privado, aberto, presos, acelerado, conhecido, conhecidos, dispostos</li>
      <li>AUX-Part: sido</li>
      <li>DET: o, os, um, seu, esse, este, seus, outros, mesmo, todos</li>
      <li>NOUN: anos, ano, dia, país, tempo, governo, mercado, caso, mundo, acordo</li>
      <li>NUM: um, dois, meio</li>
      <li>PRON: o, ele, isso, eles, os, nada, algo, lo, outro, um</li>
      <li>VERB: feito, devido, usado, preso, apresentado, recebido, visto, apontado, conhecido, considerado</li>
      <li>VERB-Part: feito, devido, usado, preso, apresentado, recebido, visto, apontado, conhecido, considerado</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: sociais, grandes, últimos, maiores, diferentes, principais, muitos, muitas, importantes, anteriores</li>
      <li>ADJ-Part: presos, privadas, conhecidos, dispostos, premiadas, supostos, abertas, animados, avançadas, fechadas</li>
      <li>AUX-Fin: são, foram, estão, estamos, serão, eram, vão, estavam, vamos, haviam</li>
      <li>AUX-Inf: serem, terem, estarem, sermos</li>
      <li>DET: os, as, seus, suas, outros, todos, essas, esses, outras, alguns</li>
      <li>NOUN: anos, pessoas, dias, empresas, milhões, meses, vezes, bilhões, clientes, pontos</li>
      <li>PRON: eles, os, nos, elas, nós, as, todos, outros, muitos, alguns</li>
      <li>VERB-Fin: podem, têm, temos, devem, tiveram, dizem, passaram, querem, ficaram, tinham</li>
      <li>VERB-Inf: termos, chegarem, crescerem, oferecerem, parecerem, tentarem, terem, acharem, acompanharem, adaptarem</li>
      <li>VERB-Part: feitas, chamados, feitos, ouvidos, usadas, vendidos, pagos, publicadas, registrados, afetados</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: maior, grande, melhor, possível, primeira, importante, difícil, primeiro, principal, atual</li>
      <li>ADJ-Part: passado, passada, errado, premiada, preso, aberta, privado, aberto, elevada, acelerado</li>
      <li>AUX-Fin: é, foi, está, era, será, estava, vai, seria, seja, tem</li>
      <li>AUX-Inf: ser, estar, ter</li>
      <li>AUX-Part: sido</li>
      <li>DET: o, a, um, uma, sua, seu, esse, essa, este, esta</li>
      <li>NOUN: presidente, ano, dia, país, vez, tempo, parte, governo, empresa, casa</li>
      <li>PRON: o, ele, isso, ela, eu, a, me, você, nada, algo</li>
      <li>VERB: diz, tem, há, disse, pode, afirma, deve, teve, afirmou, tinha</li>
      <li>VERB-Fin: diz, tem, há, disse, pode, afirma, deve, teve, afirmou, tinha</li>
      <li>VERB-Inf: ficar, sair, explicar, virar, atingir, começar, receber, ver, apresentar, checar</li>
      <li>VERB-Part: feito, feita, devido, usado, preso, apresentado, recebido, visto, apontado, conhecido</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: o, lo, me, nos, se, a, la, los, os, as</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: me, mim, si, nos, lhe, se, lhes, te</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: se, ele, ela, eu, eles, você, elas, nós, vocês, Tu</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: o, a, os, as</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: um, uma, uns, umas</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: seria, teria, seriam, estaria, teriam, iria, estariam, iriam, viria</li>
      <li>VERB-Fin: deveria, poderia, poderiam, teria, teriam, diria, levaria, deveriam, fariam, ficaria</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: confira, olhe, Corra, Desculpe, beija, olha, usemos, veja, Acompanhemos, Acrescente</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: é, foi, está, são, era, foram, será, estão, estava, vai</li>
      <li>VERB-Fin: diz, tem, há, disse, pode, afirma, deve, teve, afirmou, tinha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: seja, fosse, tenha, for, sejam, fossem, tivesse, esteja, forem, estejam</li>
      <li>VERB-Fin: quiser, haja, possam, veja, possa, pudesse, tivesse, tenha, tenham, houver</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, serão, for, estará, irá, forem, estiver, estarão, irão, terá</li>
      <li>VERB-Fin: terá, poderá, quiser, terão, deverá, haverá, houver, fará, tiver, ficará</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, estava, havia, eram, estavam, haviam, tinha, tinham, vinha, ia</li>
      <li>VERB-Fin: tinha, havia, fazia, queria, tinham, sabia, dizia, podia, chegava, dava</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: foi, foram, fosse, fui, esteve, fossem, tivesse, estiveram, estivesse, tivessem</li>
      <li>VERB-Fin: disse, teve, afirmou, fez, começou, ficou, houve, chegou, passou, deu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB-Fin: abandonara, acabara, aconteceram, afirmaram, anunciaram, aprendera, comprara, deixara, enviara, evoluíram</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: é, está, são, estão, vai, seja, tem, estamos, estou, vão</li>
      <li>VERB-Fin: diz, tem, há, pode, afirma, deve, faz, podem, têm, conta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: feito, feita, feitas, realizada, considerado, criado, formado, preso, usado, apontado</li>
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
      <li>DET: o, a, os, as, um, uma, uns, umas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: esse, essa, este, esta, mesmo, essas, esses, mesma, aquele, aquela</li>
      <li>PRON: o, isso, a, os, as, essa, esse, aquilo, esta, isto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: mais, cada, outros, todos, todo, outro, outras, qualquer, alguns, algumas</li>
      <li>PRON: quem, tudo, nada, algo, ninguém, outro, um, todos, alguém, outros</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: quais, qual</li>
      <li>PRON: que, quem, qual, quê, quais</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: sua, seu, seus, suas, minha, meu, nossa, nosso, nossos, meus</li>
      <li>PRON: se, ele, ela, eu, eles, me, você, nos, elas, nós</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: cuja, cujo, cujas, cujos</li>
      <li>PRON: que, quem, qual, quais</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: três, mil, um, dois, uma, 20, quatro, 30, 2016, 2018</li>
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
  <li>Ord
    <ul>
      <li>ADJ: primeira, primeiro, segundo, segunda, terceiro, 1º, terceira, primeiros, primeiras, quarta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: sua, seu, seus, suas, minha, meu, nossa, nosso, nossos, meus</li>
      <li>PRON: seu, meu, nosso, sua, nossa, minhas, nossos, seus</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: estava, estamos, estou, vamos, sou, fui, somos, vou, temos, estávamos</li>
      <li>AUX-Inf: sermos</li>
      <li>DET: minha, meu, nossa, nosso, nossos, meus, nossas, minhas</li>
      <li>PRON: eu, me, nos, nós, mim, meu, nosso, nossa, minhas, nossos</li>
      <li>VERB-Fin: consigo, temos, tenho, quero, acho, sei, vejo, posso, vi, queremos</li>
      <li>VERB-Inf: termos, entendermos, escrevermos, expressarmos, irmos, lavarmos, lembrarmos, profissionalizarmos, subir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: você, vocês, te, Tu</li>
      <li>VERB-Fin: beija, olha, Experimenta, Para, Taca, mexe, quebra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: é, foi, está, são, era, foram, será, estão, vai, seria</li>
      <li>AUX-Inf: serem, terem, estarem, ser, estar, ter</li>
      <li>DET: sua, seu, seus, suas</li>
      <li>PRON: se, o, ele, ela, eles, a, os, elas, as, lo</li>
      <li>VERB-Fin: diz, tem, há, disse, pode, afirma, deve, teve, afirmou, faz</li>
      <li>VERB-Inf: ficar, sair, explicar, virar, atingir, começar, receber, ver, apresentar, checar</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Tadinhos</li>
          <li>ADP: pra, s/</li>
          <li>ADV: civil, cultural</li>
          <li>AUX-Fin: tá, tava, tô, vamo</li>
          <li>NOUN: segunda, quarta, sexta, quinta, sr., terça, km, tel., min, nº</li>
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
          <li>ADJ: off-line, on-line, habitués, premium, gospel, workaholic</li>
          <li>ADV: on-line</li>
          <li>NOUN: internet, e-mail, fintechs, deficit, chef, hits, recall, funk, hip-hop, publisher</li>
          <li>X: bitcoin, car, safety, ale, bitcoins, pale, rohingyas, capita, country, ethereum</li>
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
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: ter, ir, estar, haver, vir, ser.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (3388)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--PRON (1386)</li>
      <li>VERB-Fin--PRON-Nom (775)</li>
      <li>VERB-Ger--NOUN (80)</li>
      <li>VERB-Ger--PRON (38)</li>
      <li>VERB-Ger--PRON-Nom (23)</li>
      <li>VERB-Inf--NOUN (157)</li>
      <li>VERB-Inf--PRON (48)</li>
      <li>VERB-Inf--PRON-Nom (45)</li>
      <li>VERB-Part--NOUN (119)</li>
      <li>VERB-Part--NOUN-ADP(a) (1)</li>
      <li>VERB-Part--PRON (34)</li>
      <li>VERB-Part--PRON-Nom (21)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (3610)</li>
      <li>VERB-Fin--PRON (420)</li>
      <li>VERB-Fin--PRON-Acc (153)</li>
      <li>VERB-Fin--PRON-Dat (14)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Ger--NOUN (289)</li>
      <li>VERB-Ger--PRON (38)</li>
      <li>VERB-Ger--PRON-Acc (10)</li>
      <li>VERB-Inf--NOUN (1782)</li>
      <li>VERB-Inf--PRON (120)</li>
      <li>VERB-Inf--PRON-Acc (116)</li>
      <li>VERB-Inf--PRON-Dat (6)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (151)</li>
      <li>VERB-Part--PRON (11)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Dat (66)</li>
      <li>VERB-Ger--PRON-Dat (3)</li>
      <li>VERB-Inf--PRON-Dat (14)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>ccomp:speech</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
