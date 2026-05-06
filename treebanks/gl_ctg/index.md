---
layout: base
title:  'UD_Galician-CTG'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Galician CTG

Language: [Galician](/gl/index.html) (code: `gl`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Xavier Gómez Guinovart.

Repository: [UD_Galician-CTG](https://github.com/UniversalDependencies/UD_Galician-CTG)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgl_ctg218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-NC-SA 3.0

Genre: medical, legal, nonfiction, news

Questions, comments?
General annotation questions (either Galician-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Galician-CTG/issues).
If you want to collaborate, please contact [xgg&nbsp;(æt)&nbsp;uvigo&nbsp;•&nbsp;es].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | not available |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Galician UD treebank is based on the automatic parsing of the Galician Technical Corpus (http://sli.uvigo.gal/CTG) created at the University of Vigo by the the TALG NLP research group.



Original corpus sentences were selected and shuffled at random, and divided in 60-20-20 splits for the train, dev and test files, respectively.

The bootstrap version of the CTG UD annotated corpus was obtained by using FreeLing 4.0 parser with the Treeler library, and by adapting the POS and dependency relations tags to CoNLL-U Format. Next versions of the corpus imply a review of the results of this initial version.

The Galician UD treebank covers mainly technical texts of the fields of medicine, sociology, ecology, economy and law.

## Acknowledgments

* Special thanks to Martin Popel and Dan Zeman for their invaluable help


# Statistics of UD Galician CTG

## POS Tags

[ADJ](gl_ctg-pos-ADJ.html) – [ADP](gl_ctg-pos-ADP.html) – [ADV](gl_ctg-pos-ADV.html) – [AUX](gl_ctg-pos-AUX.html) – [CCONJ](gl_ctg-pos-CCONJ.html) – [DET](gl_ctg-pos-DET.html) – [INTJ](gl_ctg-pos-INTJ.html) – [NOUN](gl_ctg-pos-NOUN.html) – [NUM](gl_ctg-pos-NUM.html) – [PART](gl_ctg-pos-PART.html) – [PRON](gl_ctg-pos-PRON.html) – [PROPN](gl_ctg-pos-PROPN.html) – [PUNCT](gl_ctg-pos-PUNCT.html) – [SCONJ](gl_ctg-pos-SCONJ.html) – [SYM](gl_ctg-pos-SYM.html) – [VERB](gl_ctg-pos-VERB.html) – [X](gl_ctg-pos-X.html)

## Features

[Definite](gl_ctg-feat-Definite.html) – [Foreign](gl_ctg-feat-Foreign.html) – [Gender](gl_ctg-feat-Gender.html) – [Number](gl_ctg-feat-Number.html) – [Polarity](gl_ctg-feat-Polarity.html) – [Poss](gl_ctg-feat-Poss.html) – [PronType](gl_ctg-feat-PronType.html) – [Reflex](gl_ctg-feat-Reflex.html) – [Typo](gl_ctg-feat-Typo.html)

## Relations

[acl](gl_ctg-dep-acl.html) – [acl:relcl](gl_ctg-dep-acl-relcl.html) – [advcl](gl_ctg-dep-advcl.html) – [advmod](gl_ctg-dep-advmod.html) – [amod](gl_ctg-dep-amod.html) – [appos](gl_ctg-dep-appos.html) – [aux](gl_ctg-dep-aux.html) – [case](gl_ctg-dep-case.html) – [cc](gl_ctg-dep-cc.html) – [ccomp](gl_ctg-dep-ccomp.html) – [compound](gl_ctg-dep-compound.html) – [conj](gl_ctg-dep-conj.html) – [cop](gl_ctg-dep-cop.html) – [csubj](gl_ctg-dep-csubj.html) – [csubj:outer](gl_ctg-dep-csubj-outer.html) – [dep](gl_ctg-dep-dep.html) – [det](gl_ctg-dep-det.html) – [discourse](gl_ctg-dep-discourse.html) – [expl:pass](gl_ctg-dep-expl-pass.html) – [flat](gl_ctg-dep-flat.html) – [goeswith](gl_ctg-dep-goeswith.html) – [iobj](gl_ctg-dep-iobj.html) – [list](gl_ctg-dep-list.html) – [mark](gl_ctg-dep-mark.html) – [nmod](gl_ctg-dep-nmod.html) – [nsubj](gl_ctg-dep-nsubj.html) – [nsubj:outer](gl_ctg-dep-nsubj-outer.html) – [nummod](gl_ctg-dep-nummod.html) – [obj](gl_ctg-dep-obj.html) – [obl](gl_ctg-dep-obl.html) – [orphan](gl_ctg-dep-orphan.html) – [parataxis](gl_ctg-dep-parataxis.html) – [punct](gl_ctg-dep-punct.html) – [root](gl_ctg-dep-root.html) – [xcomp](gl_ctg-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3993 sentences, 126011 tokens and 139122 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 13812 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 242 types of words that contain both letters and punctuation. Examples: etc., AA., CC., C., S.A., a., art., pp., d/105, L., 1.ª, 2.a, 2.º, 5.º, 80/68/CEE, 92/43/CEE, B., C.H., Castela-A, E., EE.UU., I., J., Timbre-Real, contencioso-administrativo, gr., m/105h, marítimo-terrestre, ptas., varianzas-covarianzas, -n/2, 08.05.432A.740.0, 1%dos, 1.1.-España, 1.Programa, 1.a, 101/97/CE, 12.1.e, 123.A, 149.1.21.ª, 1999/519/EC, 2.o, 2000/76/CE, 2005,mais, 21.Un, 3.º, 35.3.n, 4.º, 620.1.º, 76/464/CEE</li>
</ul>

<ul>
<li>This corpus contains 13035 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 1211 types of multi-word tokens. Examples: do, da, no, dos, na, das, á, ao, nos, ó, polo, nas, co, pola, ás, dun, coa, dunha, neste, aos, ós, nun, deste, desta, nunha, polos, cos, cunha, nesta, coas, cun, termos, polas, tódolos, destes, destas, nestes, deles, pódese, noutros, tódalas, delas, doutros, doutras, trátase, del, nese, débese, modifícase, nalgúns.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): Ln, föhn, non, senon</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as pronouns (PRON): algo, alguén, aquel, aquilo, cal, cando, canto, che, como, consigo, cuxo, el, este, eu, iso, isto, lle, me, min, nada, ninguén, nos, nós, o, onde, que, quen, quén, se, si, te, ti, un, vos, vostede</li>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as determiners (DET): a, algún, ambos, aquel, as, cada, calquera, canto, certo, demais, el, entrambos, ese, este, la, mesmo, meu, moito, ningún, noso, o, outro, pouco, propio, que, senllos, seu, tal, tanto, teu, todo, un, varios</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as PRON and sometimes as DET: aquel, canto, el, este, o, que, un</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as auxiliaries (AUX): acabar, deber, deixar, estar, haber, ir, levar, poder, seguir, ser, ter, vir</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as AUX and sometimes as VERB: acabar, deber, deixar, estar, haber, ir, levar, poder, seguir, ser, ter, vir</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: as, a</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: as</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: a</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: a, o, os, as, la, los</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, unha, unhas</li>
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
      <li>PART: non</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: a, o, os, as, un, unha, unhas, la, el, los</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: este, esta, estes, estas, ese, aqueles, tal, esa, aquelas, tales</li>
      <li>PRON: isto, iso, aqueles, aquilo, esta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: outros, mesmo, outra, outras, outro, calquera, algúns, mesma, uns, moitas</li>
      <li>PRON: un, unha, algo, alguén</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: qué</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ningún, ningunha</li>
      <li>PRON: nada, ninguén</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: súa, seu, seus, súas, nosa, noso, nosos, nosas, meu, miña</li>
      <li>PRON: se, o, os, lle, me, nos, lles, eles, a, el</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: que, canto, cantas</li>
      <li>PRON: que, como, cando, onde, cal, quen, canto, cales, cantos, cuxa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: cada, todo, todos, todas, toda, ambos, ambas, entrambos</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: súa, seu, seus, súas, nosa, noso, nosos, nosas, meu, miña</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, si, consigo</li>
    </ul>
  </li>
</ul>





<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: obstante, Alternative, antimonopólico, apreciable, efectivo, funcional, gráficos, mayor, mediático, menor</li>
          <li>ADP: de, al, en, a, on</li>
          <li>ADV: concretamente</li>
          <li>CCONJ: o, y</li>
          <li>DET: la, el, los, un, Ese, a</li>
          <li>NOUN: táboa, Capítulo, cadro, figura, figuras, Califf, Cantábrica-Rías, Energy, Lei, Parque</li>
          <li>NUM: 1, 10, 20, 23, 70, -11,86, -36,03, -42,43, 105, 11</li>
          <li>PART: non</li>
          <li>PRON: como, que</li>
          <li>PROPN: 1979a, BOE, Benson, Brassington, CV, Covarrubias, Exponse, Hannan, Isla, Lim</li>
          <li>PUNCT: ,, .</li>
          <li>SCONJ: que</li>
          <li>SYM: +</li>
          <li>VERB: di, Brooman, FA+U, IPa, MECACAR, Pasa, atraviesa, autoinmune, cae, chega</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: te-rra</li>
          <li>VERB: anali</li>
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
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: poder, deber, ser, haber, estar, ter, ir, seguir, deixar, vir, acabar, levar.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2831)</li>
      <li>VERB--NOUN-ADP(a) (10)</li>
      <li>VERB--NOUN-ADP(ata) (1)</li>
      <li>VERB--NOUN-ADP(de) (12)</li>
      <li>VERB--NOUN-ADP(de)-ADP(punto) (1)</li>
      <li>VERB--NOUN-ADP(en) (1)</li>
      <li>VERB--NOUN-ADP(entre) (1)</li>
      <li>VERB--NOUN-ADP(por) (1)</li>
      <li>VERB--NOUN-ADP(sobre) (1)</li>
      <li>VERB--NOUN-ADP(xa) (1)</li>
      <li>VERB--PRON (1427)</li>
      <li>VERB--PRON-ADP(de) (2)</li>
      <li>VERB--PRON-ADP(de)-ADP(a) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4227)</li>
      <li>VERB--NOUN-ADP(a) (295)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(abandono) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(calidade) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(configuración) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(descoñecemento) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(déficit) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(referente) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(con)-ADP(horizonte) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(de) (3)</li>
      <li>VERB--NOUN-ADP(con) (2)</li>
      <li>VERB--NOUN-ADP(de) (27)</li>
      <li>VERB--NOUN-ADP(desde) (1)</li>
      <li>VERB--NOUN-ADP(en) (4)</li>
      <li>VERB--NOUN-ADP(mentres) (1)</li>
      <li>VERB--NOUN-ADP(precisamente) (1)</li>
      <li>VERB--NOUN-ADP(segundo) (1)</li>
      <li>VERB--NOUN-ADP(sobre) (1)</li>
      <li>VERB--PRON (1590)</li>
      <li>VERB--PRON-ADP(a) (6)</li>
      <li>VERB--PRON-ADP(a)-ADP(procurar) (1)</li>
      <li>VERB--PRON-ADP(para) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-ADP(a) (190)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a) (2)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(c.h.) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(coidado) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(consello) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(emprego) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(lingua) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(mantemento) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(percebe)-ADP(a)-ADP(mariñeiro) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(reciclaxe) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(sistema) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(a)-ADP(tempo) (1)</li>
      <li>VERB--NOUN-ADP(a)-ADP(de) (2)</li>
      <li>VERB--NOUN-ADP(para) (4)</li>
      <li>VERB--PRON (270)</li>
      <li>VERB--PRON-ADP(a) (7)</li>
      <li>VERB--PRON-ADP(a)-ADP(caber) (1)</li>
      <li>VERB--PRON-ADP(para) (1)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 54 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: facer se, observar se, realizar se, comprobar se, desenvolver se, incorporar se, manter se, aclarar se, almacenar se, aplicar se, apreciar se, bo se, calcular se, caracterizar se, consolidar se, corresponder se, dar se, debater se, definir se, detallar se, diferenciar se, engader se, entender se, estar se, estimar se, facilitar se, impulsar se, indicar se, informar se, introducir se, invitar se, levar se, modificar se, necesario se, notificar se, obter se, papel se, participar se, posible se, poñer se, preciso se, preguntar se, prever se, proceder se, recomendar se, reintegrar se, remitir se, representar se, reunir se, ser se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 369 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: producir se, facer se, atopar se, referir se, realizar se, considerar se, tratar se, observar se, ter se, presentar se, empregar se, establecer se, manter se, aprobar se, encontrar se, incluír se, situar se, utilizar se, desenvolver se, efectuar se, ver se, dar se, determinar se, indicar se, pretender se, analizar se, obter se, prever se, crear se, enfrontar se, esperar se, incrementar se, modificar se, reducir se, apreciar se, basear se, chegar se, comentar se, coñecer se, dicir se, haber se, incorporar se, integrar se, regular se, relacionar se, xerar se, acadar se, aplicar se, asignar se, axustar se</li>
    <ul>
      <li>Out of those, 4 lemmas occurred more than once, but never without a reflexive dependent. Examples: confundir, meter, opor, reiniciar</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>acl:relcl</a>, <a>csubj:outer</a>, <a>expl:pass</a>, <a>nsubj:outer</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>expl</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>clf</a>, <a>fixed</a>, <a>reparandum</a></li>
</ul>
