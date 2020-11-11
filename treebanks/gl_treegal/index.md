---
layout: base
title:  'UD_Galician-TreeGal'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Galician TreeGal

Language: [Galician](/gl/index.html) (code: `gl`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.4 release.

The following people have contributed to making this treebank part of UD: Marcos Garcia.

Repository: [UD_Galician-TreeGal](https://github.com/UniversalDependencies/UD_Galician-TreeGal)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgl_treegal27)<br />
Download all treebanks: [UD 2.7](/#download)

License: LGPL-LR

Genre: news

Questions, comments?
General annotation questions (either Galician-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Galician-TreeGal/issues).
If you want to collaborate, please contact [marcos&nbsp;•&nbsp;garcia&nbsp;•&nbsp;gonzalez&nbsp;(æt)&nbsp;udc&nbsp;•&nbsp;gal].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually, natively in UD style |

## Description

The Galician-TreeGal is a treebank for Galician developed at LyS Group (Universidade da Coruña).



The resource derives from a subset (called *xeral*) of the XIADA corpus (v2.6), created at the Centro Ramón Piñeiro para a Investigación en Humanidades (http://corpus.cirp.es/xiada/).

All the information except the syntactic one was semi-automatically converted to UD from the original resource. The dependency labels were assigned using cross-lingual parsing techniques, and then manually corrected by a linguist (see the references for more information). At the end of this process, several corrections were carried out in order to agree with the UD guidelines.

Galician-TreeGal v0.42 contains 1000 sentences of the xeral corpus (~25k tokens), and it is divided 60-40 splits (train-test).

## Acknowledgments

* Garcia, Marcos, 2016. *Universal Dependencies Guidelines for the Galician-TreeGal Treebank.* Technical Report. LyS Group, Universidade da Coruña.

* Garcia, Marcos, Carlos Gómez-Rodríguez and Miguel A. Alonso, 2018. *New treebank or repurposed? On the feasibility of cross-lingual parsing of Romance languages with Universal Dependencies.* Natural Language Engineering, 24(1): 91-122.

* Rojo, Guillermo, Marisol López Martínez, Eva Domínguez Noya and Fco. Mario Barcala, 2015. *Corpus de adestramento do Etiquetador/Lematizador do Galego Actual (XIADA),* v2.6. Centro Ramón Piñeiro para a Investigación en Humanidades.


# Statistics of UD Galician TreeGal

## POS Tags

[ADJ](gl_treegal-pos-ADJ.html) – [ADP](gl_treegal-pos-ADP.html) – [ADV](gl_treegal-pos-ADV.html) – [AUX](gl_treegal-pos-AUX.html) – [CCONJ](gl_treegal-pos-CCONJ.html) – [DET](gl_treegal-pos-DET.html) – [INTJ](gl_treegal-pos-INTJ.html) – [NOUN](gl_treegal-pos-NOUN.html) – [NUM](gl_treegal-pos-NUM.html) – [PRON](gl_treegal-pos-PRON.html) – [PROPN](gl_treegal-pos-PROPN.html) – [PUNCT](gl_treegal-pos-PUNCT.html) – [SCONJ](gl_treegal-pos-SCONJ.html) – [SYM](gl_treegal-pos-SYM.html) – [VERB](gl_treegal-pos-VERB.html) – [X](gl_treegal-pos-X.html)

## Features

[AdpType](gl_treegal-feat-AdpType.html) – [Case](gl_treegal-feat-Case.html) – [Clitic](gl_treegal-feat-Clitic.html) – [Definite](gl_treegal-feat-Definite.html) – [Degree](gl_treegal-feat-Degree.html) – [Gender](gl_treegal-feat-Gender.html) – [Mood](gl_treegal-feat-Mood.html) – [Number](gl_treegal-feat-Number.html) – [Number[psor]](gl_treegal-feat-Number-psor.html) – [NumType](gl_treegal-feat-NumType.html) – [Person](gl_treegal-feat-Person.html) – [Polarity](gl_treegal-feat-Polarity.html) – [Poss](gl_treegal-feat-Poss.html) – [PronType](gl_treegal-feat-PronType.html) – [Tense](gl_treegal-feat-Tense.html) – [VerbForm](gl_treegal-feat-VerbForm.html)

## Relations

[acl](gl_treegal-dep-acl.html) – [advcl](gl_treegal-dep-advcl.html) – [advmod](gl_treegal-dep-advmod.html) – [amod](gl_treegal-dep-amod.html) – [appos](gl_treegal-dep-appos.html) – [aux](gl_treegal-dep-aux.html) – [aux:pass](gl_treegal-dep-aux-pass.html) – [case](gl_treegal-dep-case.html) – [cc](gl_treegal-dep-cc.html) – [ccomp](gl_treegal-dep-ccomp.html) – [compound](gl_treegal-dep-compound.html) – [conj](gl_treegal-dep-conj.html) – [cop](gl_treegal-dep-cop.html) – [csubj](gl_treegal-dep-csubj.html) – [dep](gl_treegal-dep-dep.html) – [det](gl_treegal-dep-det.html) – [discourse](gl_treegal-dep-discourse.html) – [expl](gl_treegal-dep-expl.html) – [fixed](gl_treegal-dep-fixed.html) – [flat](gl_treegal-dep-flat.html) – [flat:foreign](gl_treegal-dep-flat-foreign.html) – [flat:name](gl_treegal-dep-flat-name.html) – [iobj](gl_treegal-dep-iobj.html) – [list](gl_treegal-dep-list.html) – [mark](gl_treegal-dep-mark.html) – [nmod](gl_treegal-dep-nmod.html) – [nsubj](gl_treegal-dep-nsubj.html) – [nsubj:pass](gl_treegal-dep-nsubj-pass.html) – [nummod](gl_treegal-dep-nummod.html) – [obj](gl_treegal-dep-obj.html) – [obl](gl_treegal-dep-obl.html) – [orphan](gl_treegal-dep-orphan.html) – [parataxis](gl_treegal-dep-parataxis.html) – [punct](gl_treegal-dep-punct.html) – [root](gl_treegal-dep-root.html) – [vocative](gl_treegal-dep-vocative.html) – [xcomp](gl_treegal-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 23479 tokens and 25548 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2682 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words with spaces. Examples: 687 614 874</li>
</ul>

<ul>
<li>This corpus contains 32 types of words that contain both letters and punctuation. Examples: PSdeG-PSOE, etc., Costa-Gavras, (in)cultura, BNG-PSOE, Barros', CIG-ensino, Campos', Cunqueiro:, D., Dulcinea,, F., Galego-portuguesa, Oops..., P., PSOE-BNG, Qué!, R., S., Silencio,, again!, best-sellers, centro-esquerda, cow-boy, d'Estudis, económico-financeira, g​a​l​e​g​o​-​p​o​r​t​u​g​u​é​s​-​b​r​a​s​i​l​e​i​r​o, m​a​n​u​e​l​m​a​r​i​a​@​a​s​-​p​g​.​c​o​m, sex-shop, www.bng-galiza.org, www.novoestatuto.com, xurídico-público</li>
</ul>

<ul>
<li>This corpus contains 2059 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 301 types of multi-word tokens. Examples: do, da, no, na, dos, ao, á, das, polo, nas, coa, nos, co, dun, pola, ás, aos, dunha, nunha, cos, coas, nun, polos, cun, deste, neste, nesta, polas, desta, darlle, delas, dese, cunha, doutras, nesa, trátase, dela, deles, destes, doutros, entenderse, nese, 'García, Barros', Constrúese, Gustaríame, corresponderalle, coñecelo, cúmprense, daqueles.</li>
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
<li>This corpus contains 40 lemmas tagged as pronouns (PRON): algo, alguén, algún, ambos, aquel, cal, canto, che, demais, el, ese, este, eu, lle, me, mesmo, min, moito, nada, ninguén, ningún, nos, noso, nós, o, outro, pouco, propio, que, quen, se, seu, si, tal, tanto, te, ti, todo, un, vostede</li>
</ul>

<ul>
<li>This corpus contains 34 lemmas tagged as determiners (DET): algún, ambos, aquel, cada, calquer, calquera, canto, certo, cuxo, demais, demasiado, determinado, el, ese, este, la, los, mesmo, meu, moito, ningún, noso, o, outras, outro, pouco, propio, que, seu, tal, tanto, todo, un, varios</li>
</ul>

<ul>
<li>Out of the above, 22 lemmas occurred sometimes as PRON and sometimes as DET: algún, ambos, aquel, canto, demais, el, ese, este, mesmo, moito, ningún, noso, o, outro, pouco, propio, que, seu, tal, tanto, todo, un</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as auxiliaries (AUX): acabar, deber, deixar, estar, haber, ir, levar, poder, quedar, querer, seguir, semellar, ser, ter, vir</li>
</ul>

<ul>
<li>Out of the above, 15 lemmas occurred sometimes as AUX and sometimes as VERB: acabar, deber, deixar, estar, haber, ir, levar, poder, quedar, querer, seguir, semellar, ser, ter, vir</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: é, foi, está, son, pode, están, era, sería, vai, será</li>
    <li>VERB: hai, ten, teñen, fai, fixo, quere, considera, di, vén, dá</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: sendo, podendo</li>
    <li>VERB: afirmando, partindo, considerando, dando, pagando, recoñecendo, agardando, apuntando, chegando, cobrando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ser, poder, estar, ter, acabar, ir, quedar, seren, sermos</li>
    <li>VERB: facer, ter, ver, falar, dar, pasar, traballar, seguir, dicir, gañar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: debido, recibida, baseado, dirixida, elaborado, elixido, afectado, apresentado, atendidos, chamado</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: obstante, embargante, best, coincidente, diferentes, Simple, Visitábel, bípedes, capaz, conscientes</li>
      <li>NOUN: nacionalistas, socialistas, galeguista, guitarristas, prol, xornalistas, Babecas, Finalistas, alcalde, antípoda</li>
      <li>NUM: 13.000, cen</li>
      <li>PRON: se, nos, que, me, quen, lle, eu, nós, vostede, alguén</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: galega, política, europea, nova, social, Franca, actual, cultural, laboral, mellor</li>
      <li>DET: a, as, unha, súa, esta, la, nosa, súas, esa, outra</li>
      <li>NOUN: cidade, música, parte, obra, vida, proposta, arte, empresa, obras, lingua</li>
      <li>NUM: primeira, dúas, segunda, catro, tres, unha, cinco, terceira, 12, 15.000</li>
      <li>PRON: que, a, lle, as, unha, elas, ela, esta, na, ningunha</li>
      <li>PROPN: Mercedes, Núñez, Unión, UE, Zona, Bases, Xunta, Constitución, Galiza, Academia</li>
      <li>VERB-Part: recibida, dirixida, destinadas, feita, feitas, prometidas, realizada, vencellada, Configurada, Nacida</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: novo, galego, español, galegos, socialista, constitucional, difícil, gran, mellor, claro</li>
      <li>DET: o, os, un, lo, seu, este, seus, todo, todos, ese</li>
      <li>NOUN: anos, traballo, goberno, mundo, tempo, dereito, proxecto, país, medios, grupo</li>
      <li>NUM: dous, un, primeiro, catro, dez, 1990, 25, cinco, quince, tres</li>
      <li>PRON: que, o, lle, lo, os, todo, un, algo, algúns, lles</li>
      <li>PROPN: BNG, Estado, Manuel, Xosé, Miguel, Anxo, Carlos, Estatuto, González, Francisco</li>
      <li>VERB-Part: debido, baseado, elaborado, elixido, afectado, apresentado, atendidos, chamado, considerado, dirixido</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: iso, isto</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: galegos, diferentes, distintos, maiores, últimos, autonómicas, grandes, económicos, internacionais, novos</li>
      <li>AUX: son, están, poden, estamos, foron, serán, van, deben, eran, estaban</li>
      <li>AUX-Fin: son, están, poden, estamos, foron, serán, van, deben, eran, estaban</li>
      <li>AUX-Inf: seren, sermos</li>
      <li>DET: os, as, seus, súas, todos, outros, los, outras, estes, uns</li>
      <li>NOUN: anos, socialistas, medios, obras, nacionalistas, persoas, días, eleccións, veces, galegos</li>
      <li>NUM: catro, dous, tres, dúas, dez, cinco, quince, oito, 300, 52</li>
      <li>PRON: que, nos, os, lles, algúns, as, outros, elas, nós, eles</li>
      <li>PROPN: Bases, Premios, Estados, Mateo, Mestre, 2004, Consellos, Irmandades, Letras, Oscars</li>
      <li>VERB-Fin: teñen, fan, temos, existen, chegaron, dan, fagan, fixemos, integran, queremos</li>
      <li>VERB-Inf: teren, chegaren, colaboraren, compartiren, completarmos, decidiren, desviaren, formaren, forzaren, integrarmos</li>
      <li>VERB-Part: atendidos, destinadas, empeñados, feitas, obrigados, prometidas, Decididos, afectados, apresentadas, asinados</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: galega, novo, galego, español, mellor, política, social, xeral, actual, difícil</li>
      <li>AUX-Fin: é, foi, está, pode, era, sería, vai, será, ten, sexa</li>
      <li>DET: o, a, un, unha, súa, lo, seu, esta, este, la</li>
      <li>NOUN: traballo, goberno, cidade, música, mundo, tempo, dereito, proxecto, país, parte</li>
      <li>NUM: primeira, un, primeiro, segunda, 1990, 1917, 1999, 2018, 25, 28</li>
      <li>PRON: que, o, lle, a, me, iso, lo, todo, quen, un</li>
      <li>PROPN: BNG, Estado, Estatuto, Prestige, PP, Quixote, Consello, Unión, Galiza, PSOE</li>
      <li>VERB-Fin: hai, ten, fai, fixo, quere, considera, di, dá, vén, pasa</li>
      <li>VERB-Part: debido, recibida, baseado, dirixida, elaborado, elixido, afectado, apresentado, chamado, considerado</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: o, nos, lo, a, as, os, me, no, los, na</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: lle, nos, lles, me, che</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: eu, el, vostede, nós, ti, eles</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: o, a, os, as, lo, la, los, las</li>
      <li>PRON: a</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, unha, uns, unhas</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: mellor, maior, maiores, peor, meirande, mellores, menor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: máximo, altísimo, importantísima, máxima</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADP: sen</li>
      <li>ADV: non, nunca, tampouco, Nin, endexamais</li>
      <li>CCONJ: nin</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd,Ind
    <ul>
      <li>AUX: sería, debería, podería, habería, poderían, tería, deberiamos</li>
      <li>AUX-Fin: sería, debería, podería, habería, poderían, tería</li>
      <li>VERB-Fin: gustaría, tería, Diría, Quedaría, correspondería, empobrecería, escluiría, faltaría, gostaría, instalaría</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Explica, Imaxina</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: é, foi, está, son, pode, están, era, vai, será, poden</li>
      <li>VERB-Fin: hai, ten, teñen, fai, fixo, quere, considera, di, vén, dá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sexa, fose, sexan, estea, estivese, poidan, teña, estean, for, fosen</li>
      <li>VERB-Fin: sexa, fagan, diga, cumpran, faga, fixese, haxa, inclúa, mostren, pese</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, serán, haberá, poderá, poderán, acabarán, for, irá</li>
      <li>VERB-Fin: terá, contará, corresponderá, decidirá, ocupará, pasarán, recollerá, terán, Atribuirá, Lograrán</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, estaba, ía, eran, estaban, podía, Podiamos, debían, podia, tiña</li>
      <li>VERB-Fin: había, tiña, sabía, facía, quería, daba, defendiamos, dicía, escribía, falaba</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: foi, foron, fose, estivese, estivo, puido, Viñeron, estiveron, fosen, puidemos</li>
      <li>VERB-Fin: fixo, deu, dixo, houbo, publicou, tivo, chegaron, conseguiu, fixemos, comezou</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fora, deberan, foran</li>
      <li>VERB-Fin: quixera, cometeran, comunicara, escribiran, houbera, reflectira, rematara, valera, vira</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: é, está, son, pode, están, vai, poden, ten, sexa, hai</li>
      <li>VERB-Fin: hai, ten, teñen, fai, quere, considera, di, vén, dá, fan</li>
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
      <li>DET: o, a, os, as, un, unha, lo, la, los, uns</li>
      <li>PRON: o, a, os, as</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: esta, este, ese, esa, estes, estas, aqueles, esas, eses, aquel</li>
      <li>PRON: iso, isto, este, estes, esta, aqueles, Ese, aquel, aquela, esa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: todo, todos, mesmo, outra, outro, outros, outras, toda, cada, calquera</li>
      <li>PRON: algo, todo, un, nada, algúns, unha, outros, outro, alguén, mesmo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: como, cómo, onde</li>
      <li>DET: que</li>
      <li>PRON: que, Cal, Quen, canto, Cales, Cantos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: súa, seu, seus, nosa, súas, noso, meu, miña, nosos, meus</li>
      <li>PRON: se, lle, nos, o, me, lo, lles, a, elas, nós</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: como, cando, onde</li>
      <li>DET: cantas, cuxa, cuxas</li>
      <li>PRON: que, quen, cales, cantos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: catro, dous, tres, un, dúas, cinco, dez, 1990, 25, 36</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: primeira, primeiro, segunda, II, IX, terceira, terceiro, V, primeiras, primeiros</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: súa, seu, seus, nosa, súas, noso, meu, miña, nosos, meus</li>
      <li>PRON: seu, nosa</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: estamos, somos, estou, teño, vou, Podiamos, Sigo, deberiamos, imos, podemos</li>
      <li>AUX-Fin: estamos, somos, estou, teño, vou, Podiamos, Sigo, imos, podemos, podía</li>
      <li>AUX-Inf: sermos</li>
      <li>DET: nosa, noso, meu, miña, nosos, meus, nosas</li>
      <li>PRON: nos, me, nós, eu, min, nosa</li>
      <li>VERB-Fin: temos, fixemos, queremos, digo, quixera, chegamos, creo, defendiamos, deixamos, entendemos</li>
      <li>VERB-Inf: completarmos, integrarmos, irmos, termos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1,3
    <ul>
      <li>VERB-Fin: Diría</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: Vas</li>
      <li>PRON: te, che, ti</li>
      <li>VERB-Fin: Explica, Imaxina, aceptas, alboreas, atoparás, buscas, chegas, escoites, escureces, miras</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: é, foi, está, son, pode, están, era, sería, vai, será</li>
      <li>AUX-Inf: seren</li>
      <li>DET: súa, seu, seus, súas, os, sua</li>
      <li>PRON: se, o, lle, a, lo, os, lles, as, elas, el</li>
      <li>VERB-Fin: hai, ten, teñen, fai, fixo, quere, considera, di, vén, dá</li>
      <li>VERB-Inf: teren, chegaren, colaboraren, compartiren, decidiren, desviaren, formaren, forzaren, iren, mostraren</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: nosa, súa, seu, noso, súas, seus, nosos, nosas</li>
      <li>PRON: nosa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: súa, seu, seus, súas, meu, miña, meus, sua</li>
      <li>PRON: seu</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: de, en, a, por, con, para, sobre, entre, sen, desde</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: se, lle, nos, o, me, lo, lles, a, as, os</li>
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
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: poder, ir, ter, estar, deber, haber, vir, seguir, acabar, deixar, levar, querer, semellar.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, estar, quedar.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (339)</li>
      <li>VERB-Fin--NOUN-ADP(arredor) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--PRON (285)</li>
      <li>VERB-Fin--PRON-ADP(con) (1)</li>
      <li>VERB-Fin--PRON-ADP(en) (1)</li>
      <li>VERB-Fin--PRON-ADP(por) (1)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Dat (4)</li>
      <li>VERB-Fin--PRON-Nom (20)</li>
      <li>VERB-Ger--NOUN (7)</li>
      <li>VERB-Ger--PRON (5)</li>
      <li>VERB-Inf--NOUN (33)</li>
      <li>VERB-Inf--PRON (30)</li>
      <li>VERB-Inf--PRON-ADP(de) (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (15)</li>
      <li>VERB-Part--PRON (10)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (496)</li>
      <li>VERB-Fin--NOUN-ADP(a) (7)</li>
      <li>VERB-Fin--NOUN-ADP(arredor) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--PRON (114)</li>
      <li>VERB-Fin--PRON-ADP(a) (2)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-ADP(pesar) (1)</li>
      <li>VERB-Fin--PRON-Acc (54)</li>
      <li>VERB-Fin--PRON-Dat (6)</li>
      <li>VERB-Ger--NOUN (53)</li>
      <li>VERB-Ger--NOUN-ADP(a) (1)</li>
      <li>VERB-Ger--PRON (3)</li>
      <li>VERB-Ger--PRON-Acc (4)</li>
      <li>VERB-Inf--NOUN (283)</li>
      <li>VERB-Inf--NOUN-ADP(a) (1)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--PRON (34)</li>
      <li>VERB-Inf--PRON-ADP(a) (1)</li>
      <li>VERB-Inf--PRON-Acc (31)</li>
      <li>VERB-Part--NOUN (7)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-ADP(a) (1)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-ADP(a) (20)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-ADP(a) (5)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (46)</li>
      <li>VERB-Ger--NOUN-ADP(a) (1)</li>
      <li>VERB-Ger--PRON-Dat (4)</li>
      <li>VERB-Inf--NOUN-ADP(a) (8)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-ADP(a) (3)</li>
      <li>VERB-Inf--PRON-Dat (13)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
