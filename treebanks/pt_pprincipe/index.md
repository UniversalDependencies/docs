---
layout: base
title:  'UD_Portuguese-PPrincipe'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Portuguese PPrincipe

Language: [Portuguese](/pt/index.html) (code: `pt`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: M.S. Duran, L. Lopes, M.G.V. Nunes, T.A.S. Pardo.

Repository: [UD_Portuguese-PPrincipe](https://github.com/UniversalDependencies/UD_Portuguese-PPrincipe)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpt_pprincipe219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: fiction

Questions, comments?
General annotation questions (either Portuguese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Portuguese-PPrincipe/issues).
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

The book [The Little Prince](https://pt.wikipedia.org/wiki/Le_Petit_Prince) annotated, part of the literary portion of [Porttinari](https://sites.google.com/icmc.usp.br/poetisa/resources-and-tools).



The literary portion currently includes the annotation of [The Little Prince](https://pt.wikipedia.org/wiki/Le_Petit_Prince) and [The Alienist](https://pt.wikipedia.org/wiki/O_Alienista) books, which were automatically annotated by a state of the art parser ([Portparser.v2](https://github.com/LuceleneL/Portparser.v2)) and manually revised, as reported by Duran et al. (2026a, 2026b). Together, they add up to 2,328 sentences. Interestingly, The Little Prince book is [the same](https://github.com/nilc-nlp/AMR-BP/tree/master/AMR-LittlePrince) that was also annotated with Abstract Meaning Representation (AMR) ([Banarescu et al., 2013](https://www.aclweb.org/anthology/W13-2322.pdf)), allowing the study of both syntactic and semantic characteristics.

## Sentence segmentation and sentence ids

The sentence segmentation and numbering of the source file were kept unchanged, because that numbering aligns the Portuguese sentences with an English version of the book. In that source file, some sentences carry more than one id (several source units merged into one sentence), and some ids are shared by several sentences (one source unit split into several sentences). To keep the alignment while giving every sentence a unique id, sentence ids have the format:

`PPRINCE_S<first>_<last><letter>`

where `<first>` and `<last>` are four-digit source ids and `<letter>` distinguishes sentences that share the same source ids. The ids were built as follows:

- A sentence with a single source id repeats that number: source id 2 becomes PPRINCE_S0002_0002a.
- A sentence with several source ids keeps the first and the last: source ids 270;271;272 become PPRINCE_S0270_0272a.
- When the same source id is shared by several sentences, the final letter is incremented: source id 927, which spans four sentences, becomes PPRINCE_S0927_0927a, PPRINCE_S0927_0927b, PPRINCE_S0927_0927c and PPRINCE_S0927_0927d.

As a consequence, the numbers in the sentence ids are not a continuous sequence: a few source numbers (e.g. 176) do not appear in any sentence id, and a source number may be covered by more than one sentence (e.g. 1454 appears in both PPRINCE_S1452_1454a and PPRINCE_S1454_1454a). The ids are nevertheless unique within the treebank, and they can be used to recover the alignment with the English text.

## Acknowledgments

This work was carried out at the Center for Artificial Intelligence of the University of São Paulo (C4AI - http://c4ai.inova.usp.br/), with support by the São Paulo Research Foundation (FAPESP grant #2019/07665-4) and by the IBM Corporation. The project was also supported by the Ministry of Science, Technology, and Innovation, with resources of Law N. 8.248, of October 23, 1991, within the scope of PPI-SOFTEX, coordinated by Softex and published as Residence in TIC 13, DOU 01245.010222/2022-44.

## References

* Duran, M.S.; Lopes, L.; Nunes, M.G.V.; Pardo, T.A.S. (2026). Do pequeno Asteróide B-612 ao universo: a anotação de O Pequeno Príncipe segundo o modelo Universal Dependencies. In the Proceedings of the 17th Brazilian Symposium in Information and Human Language Technology (STIL), pp. 464-475. October, 19-22. Cuiabá, Brazil. [pdf](https://aclanthology.org/2026.stil-1.38.pdf)

* Pardo, T.A.S.; Duran, M.S.; Lopes, L.; Di Felippo, A.; Roman, N.T.; Nunes, M.G.V. (2021). Porttinari - a large multi-genre treebank for brazilian portuguese. In the Proceedings of the XIII Symposium in Information and Human Language (STIL), pp. 1-10. November, 29 to December, 3. [pdf](https://sol.sbc.org.br/index.php/stil/article/view/17778/17612)


# Statistics of UD Portuguese PPrincipe

## POS Tags

[ADJ](pt_pprincipe-pos-ADJ.html) – [ADP](pt_pprincipe-pos-ADP.html) – [ADV](pt_pprincipe-pos-ADV.html) – [AUX](pt_pprincipe-pos-AUX.html) – [CCONJ](pt_pprincipe-pos-CCONJ.html) – [DET](pt_pprincipe-pos-DET.html) – [INTJ](pt_pprincipe-pos-INTJ.html) – [NOUN](pt_pprincipe-pos-NOUN.html) – [NUM](pt_pprincipe-pos-NUM.html) – [PRON](pt_pprincipe-pos-PRON.html) – [PROPN](pt_pprincipe-pos-PROPN.html) – [PUNCT](pt_pprincipe-pos-PUNCT.html) – [SCONJ](pt_pprincipe-pos-SCONJ.html) – [VERB](pt_pprincipe-pos-VERB.html)

## Features

[Case](pt_pprincipe-feat-Case.html) – [Definite](pt_pprincipe-feat-Definite.html) – [ExtPos](pt_pprincipe-feat-ExtPos.html) – [Foreign](pt_pprincipe-feat-Foreign.html) – [Gender](pt_pprincipe-feat-Gender.html) – [Mood](pt_pprincipe-feat-Mood.html) – [Number](pt_pprincipe-feat-Number.html) – [NumType](pt_pprincipe-feat-NumType.html) – [Person](pt_pprincipe-feat-Person.html) – [Poss](pt_pprincipe-feat-Poss.html) – [PronType](pt_pprincipe-feat-PronType.html) – [Tense](pt_pprincipe-feat-Tense.html) – [VerbForm](pt_pprincipe-feat-VerbForm.html) – [Voice](pt_pprincipe-feat-Voice.html)

## Relations

[acl](pt_pprincipe-dep-acl.html) – [acl:relcl](pt_pprincipe-dep-acl-relcl.html) – [advcl](pt_pprincipe-dep-advcl.html) – [advmod](pt_pprincipe-dep-advmod.html) – [amod](pt_pprincipe-dep-amod.html) – [appos](pt_pprincipe-dep-appos.html) – [aux](pt_pprincipe-dep-aux.html) – [aux:pass](pt_pprincipe-dep-aux-pass.html) – [case](pt_pprincipe-dep-case.html) – [cc](pt_pprincipe-dep-cc.html) – [ccomp](pt_pprincipe-dep-ccomp.html) – [ccomp:speech](pt_pprincipe-dep-ccomp-speech.html) – [conj](pt_pprincipe-dep-conj.html) – [cop](pt_pprincipe-dep-cop.html) – [csubj](pt_pprincipe-dep-csubj.html) – [dep](pt_pprincipe-dep-dep.html) – [det](pt_pprincipe-dep-det.html) – [discourse](pt_pprincipe-dep-discourse.html) – [dislocated](pt_pprincipe-dep-dislocated.html) – [expl](pt_pprincipe-dep-expl.html) – [expl:impers](pt_pprincipe-dep-expl-impers.html) – [fixed](pt_pprincipe-dep-fixed.html) – [flat](pt_pprincipe-dep-flat.html) – [flat:name](pt_pprincipe-dep-flat-name.html) – [iobj](pt_pprincipe-dep-iobj.html) – [mark](pt_pprincipe-dep-mark.html) – [nmod](pt_pprincipe-dep-nmod.html) – [nsubj](pt_pprincipe-dep-nsubj.html) – [nsubj:outer](pt_pprincipe-dep-nsubj-outer.html) – [nsubj:pass](pt_pprincipe-dep-nsubj-pass.html) – [nummod](pt_pprincipe-dep-nummod.html) – [obj](pt_pprincipe-dep-obj.html) – [obl](pt_pprincipe-dep-obl.html) – [obl:agent](pt_pprincipe-dep-obl-agent.html) – [orphan](pt_pprincipe-dep-orphan.html) – [parataxis](pt_pprincipe-dep-parataxis.html) – [punct](pt_pprincipe-dep-punct.html) – [reparandum](pt_pprincipe-dep-reparandum.html) – [root](pt_pprincipe-dep-root.html) – [vocative](pt_pprincipe-dep-vocative.html) – [xcomp](pt_pprincipe-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1527 sentences, 16026 tokens and 16800 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2857 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words that contain both letters and punctuation. Examples: guarda-chaves, pôr-do-sol, pores-do-sol, pára-vento, quinta-feira, cata-ventos, cor-de-rosa, mal-entendidos, meia-noite, meio-dia</li>
</ul>

<ul>
<li>This corpus contains 774 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 223 types of multi-word tokens. Examples: do, da, no, na, ao, à, dos, das, num, numa, nos, pela, às, comigo, dela, aos, desenha-me, pelo, dele, perguntou-lhe, Dá-me, consigo, delas, dessa, dessas, disse-lhe, disso, naquele, nesse, pelas, respondeu-lhe, sentou-se, Lembras-te, apressou-se, cativa-me, confessou-me, daqui, deles, desse, foi-se, nalgum, nas, nele, olhou-me, perguntei-lhe, pôr-se, respondeu-me, sentei-me, tomei-o, vai-se.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PART, SYM, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 41 lemmas tagged as pronouns (PRON): algo, algum, alguém, aquele, aquilo, ele, esse, este, eu, isso, isto, lhe, lo, me, mesmo, meu, mim, nada, ninguém, nos, nós, o, outro, qual, qualquer, que, quem, quê, se, seu, si, te, teu, ti, todo, tu, tudo, um, você, vos, vós</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): algum, aquele, cada, certo, esse, este, mais, mesmo, meu, nenhum, nosso, o, outro, próprio, qualquer, quanto, que, seu, tal, tanto, teu, todo, um</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: algum, aquele, esse, este, mesmo, meu, o, outro, qualquer, que, seu, teu, todo, um</li>
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
    <li>AUX: é, era, são, foi, estava, será, sou, está, és, estou</li>
    <li>VERB: disse, respondeu, tenho, há, perguntou, faz, tinha, acrescentou, pode, tem</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: tendo</li>
    <li>VERB: caminhando, bocejando, pensando, rindo, tirando, Andando, Tratando, aborrecendo, acordando, aquecendo</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ser, ter, estar, ir, teres</li>
    <li>VERB: dizer, compreender, fazer, ver, dar, conhecer, beber, desenhar, esquecer, julgar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: engraçado, abertas, fechadas, perdido, divertido, iluminado, morto, pesado, apertado, cansado</li>
    <li>AUX: sido</li>
    <li>VERB: feito, habitada, habitado, visto, andado, atingido, comido, conhecido, deixado, desencorajado</li>
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
      <li>ADJ: boa, única, abertas, bela, bonita, efêmera, fechadas, muita, más, sérias</li>
      <li>ADJ-Part: abertas, fechadas, fechada, floridas, Humilhada, abandonada, agitada, amarrotada, ameaçada, aperfeiçoadas</li>
      <li>DET: a, as, uma, minha, sua, essa, todas, alguma, essas, esta</li>
      <li>NOUN: flor, estrelas, raposa, gente, vez, noite, coisa, pessoas, casa, rosa</li>
      <li>NUM: uma, duas, terceira</li>
      <li>PRON: ela, elas, a, as, la, outra, tua, uma, todas, aquela</li>
      <li>VERB-Part: habitada, esquecida, ameaçada, erguida, iluminadas, ornadas, pronunciadas, recebida, respeitada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: bom, pequeno, preciso, muito, novo, sério, primeiro, claro, belo, engraçado</li>
      <li>ADJ-Part: engraçado, perdido, divertido, iluminado, morto, pesado, apertado, cansado, complicado, dourado</li>
      <li>AUX-Part: sido</li>
      <li>DET: o, um, os, meu, seu, esse, teu, todo, mesmo, outros</li>
      <li>NOUN: principezinho, dia, carneiro, rei, pouco, Capítulo, tempo, geógrafo, milhões, príncipe</li>
      <li>NUM: um, dois, quinhentos, seiscentos, quatrocentos, cindo, duzentos, meio, novecentos, setecentos</li>
      <li>PRON: ele, o, isso, nada, lo, os, isto, eles, outros, um</li>
      <li>VERB-Part: feito, habitado, visto, andado, atingido, comido, conhecido, deixado, desencorajado, obedecido</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grandes, contentes, iguais, pequenos, abertas, favoráveis, fechadas, importantes, más, razoáveis</li>
      <li>ADJ-Part: abertas, fechadas, fechados, floridas, aperfeiçoadas, cegos, colados, convencidas, desapontadas, douradas</li>
      <li>AUX-Fin: são, estão, eram, sois, estamos, serão, estavam, estejam, somos, tínhamos</li>
      <li>DET: os, as, todas, essas, outros, todos, meus, seus, minhas, outras</li>
      <li>NOUN: estrelas, milhões, pessoas, homens, guarda-chaves, anos, baobás, flores, vezes, vulcões</li>
      <li>PRON: elas, os, lhes, eles, as, nós, outros, vós, nos, todos</li>
      <li>VERB-Fin: têm, parecem, podem, comem, fazem, encontram, ficarão, julgam, procuram, sabem</li>
      <li>VERB-Inf: entrarem, viajarem</li>
      <li>VERB-Part: acesos, habitados, iluminadas, ornadas, pronunciadas, ritmados, vistos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: grande, bom, pequeno, triste, preciso, feliz, importante, muito, novo, sério</li>
      <li>ADJ-Part: engraçado, perdido, divertido, iluminado, morto, pesado, apertado, cansado, complicado, dourado</li>
      <li>AUX-Fin: é, era, foi, estava, será, sou, está, és, estou, havia</li>
      <li>AUX-Inf: teres</li>
      <li>AUX-Part: sido</li>
      <li>DET: o, a, um, uma, meu, minha, seu, sua, esse, teu</li>
      <li>NOUN: principezinho, planeta, dia, flor, raposa, carneiro, gente, rei, pouco, Capítulo</li>
      <li>NUM: terceira</li>
      <li>PRON: eu, me, ele, tu, o, te, ela, lhe, isso, nada</li>
      <li>VERB-Fin: disse, respondeu, tenho, há, perguntou, faz, tinha, acrescentou, pode, tem</li>
      <li>VERB-Inf: cair, esvaziar, nascer, pôr</li>
      <li>VERB-Part: feito, habitada, habitado, visto, andado, atingido, comido, conhecido, deixado, desencorajado</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: me, te, o, lo, a, as, la, os, se, nos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: me, lhe, mim, te, lhes, si, ti, nos, vos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: eu, se, ele, tu, ela, elas, eles, nós, vós, vocês</li>
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
      <li>DET: um, uma, umas</li>
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
      <li>AUX-Fin: seria, teria, estaria, estarias, seriam</li>
      <li>VERB-Fin: haveria, poderia, teria, Bastaria, Começaria, Gostaria, acomodariam, anotaria, chegariam, faria</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: desenha, olha, Deixa, Olhem, cativa, desculpa, vai, Aproxima, Bate, Digam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: é, era, são, foi, estava, será, sou, está, és, estou</li>
      <li>VERB-Fin: disse, respondeu, tenho, há, perguntou, faz, tinha, acrescentou, pode, tem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: fosse, seja, houvesse, tivesse, estejam, tenha, estejas, fores, houveres, sejam</li>
      <li>VERB-Fin: fizesse, pudesse, ordenasse, partas, ponha, possa, pudessem, quiser, quiseres, tenham</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, terá, estarei, serão, serás, estará, fores, houveres, serei, tiveres</li>
      <li>VERB-Fin: terás, poderá, deixarei, ficarão, parecerei, darão, fará, olharei, quiser, quiseres</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, estava, havia, eram, estavam, ia, tínhamos, Estavas, Estávamos, fora</li>
      <li>VERB-Fin: tinha, sabia, parecia, queria, dizia, fazia, havia, podia, devia, dava</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: foi, fosse, fui, houvesse, tivesse, Foste, foram</li>
      <li>VERB-Fin: disse, respondeu, perguntou, acrescentou, repetiu, vi, fez, ficou, desenhei, exclamou</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fora</li>
      <li>VERB-Fin: aprendera, renunciara, viera, Tomara, afligira, agastara, caíra, conhecera, conseguira, contara</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: é, são, sou, está, és, estou, estão, vou, seja, sois</li>
      <li>VERB-Fin: tenho, há, faz, tem, pode, posso, quer, sabe, basta, gosto</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: habitada, habitado, atingido, desencorajado, esquecida, obedecido, achado, desprezado, enterrado, habitados</li>
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
      <li>DET: o, a, um, os, as, uma, umas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: esse, essa, mesmo, essas, esta, aquele, tal, aquela, este, esses</li>
      <li>PRON: o, isso, isto, os, a, esse, mesmo, aquela, aquele, aquilo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: que, todas, todo, qualquer, mais, alguma, outra, outros, todos, cada</li>
      <li>PRON: nada, tudo, ninguém, outros, que, um, quem, alguém, outra, outro</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: que, quem, quê, Qual, Quais</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: meu, minha, seu, sua, teu, meus, tua, seus, minhas, suas</li>
      <li>PRON: eu, me, se, ele, tu, te, ela, lhe, o, mim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: que, quais, quem, qual</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: três, mil, seis, um, vinte, quatro, dois, uma, sete, cinco</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: meio</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primeiro, primeira, segunda, quarto, quinto, terceiro, oitavo, primeiros, segundo, sexto</li>
      <li>NUM: terceira</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: meu, minha, seu, sua, teu, meus, tua, seus, minhas, suas</li>
      <li>PRON: tua, minha, meu, minhas, teu, sua</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sou, estou, vou, estava, era, estamos, estarei, fui, havia, fora</li>
      <li>DET: meu, minha, meus, minhas, nosso</li>
      <li>PRON: eu, me, mim, nós, nos, minha, meu, minhas, te</li>
      <li>VERB-Fin: tenho, posso, vi, gosto, desenhei, possuo, sei, tinha, fiz, quero</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: és, sois, estás, vais, serás, Estavas, Foste, estarias, estejas, fores</li>
      <li>AUX-Inf: teres</li>
      <li>DET: teu, tua, teus, tuas</li>
      <li>PRON: tu, te, ti, vós, tua, vocês, vos, teu, você</li>
      <li>VERB-Fin: vens, fazes, desenha, tens, queres, sabes, terás, olha, podes, cativas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: é, era, são, foi, será, estava, está, estão, havia, seria</li>
      <li>DET: seu, sua, seus, suas</li>
      <li>PRON: se, ele, o, ela, lhe, elas, lo, os, a, lhes</li>
      <li>VERB-Fin: disse, respondeu, há, perguntou, faz, acrescentou, pode, tem, quer, repetiu</li>
      <li>VERB-Inf: cair, entrarem, esvaziar, nascer, pôr, viajarem</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: em, por</li>
          <li>ADV: quanto</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: de, a</li>
          <li>ADV: mais, cerca, pouco, menos</li>
          <li>DET: um</li>
          <li>NOUN: pouco</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADP: em</li>
          <li>PRON: isto</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: o, os, tudo, a, as</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: de, para, a, sem, até, com</li>
          <li>ADV: logo, depois, mesmo, posto</li>
          <li>DET: uma</li>
          <li>SCONJ: como, Quanto</li>
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
          <li>NOUN: bridge</li>
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
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: ter, ir, estar, haver, ser.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (448)</li>
      <li>VERB-Fin--PRON (114)</li>
      <li>VERB-Fin--PRON-Nom (359)</li>
      <li>VERB-Ger--NOUN (4)</li>
      <li>VERB-Ger--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (8)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Nom (4)</li>
      <li>VERB-Part--NOUN (7)</li>
      <li>VERB-Part--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (424)</li>
      <li>VERB-Fin--PRON (105)</li>
      <li>VERB-Fin--PRON-Acc (129)</li>
      <li>VERB-Fin--PRON-Dat (4)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Ger--NOUN (16)</li>
      <li>VERB-Ger--PRON (3)</li>
      <li>VERB-Inf--NOUN (102)</li>
      <li>VERB-Inf--PRON (18)</li>
      <li>VERB-Inf--PRON-Acc (46)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (18)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-Acc (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Dat (112)</li>
      <li>VERB-Inf--PRON-Dat (21)</li>
      <li>VERB-Part--PRON-Dat (4)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>ccomp:speech</a>, <a>expl:impers</a>, <a>flat:name</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
