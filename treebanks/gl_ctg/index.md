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
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Xavier Gómez Guinovart.

Repository: [UD_Galician-CTG](https://github.com/UniversalDependencies/UD_Galician-CTG)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgl_ctg26)<br />
Download all treebanks: [UD 2.6](/#download)

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

[ADJ](gl_ctg-pos-ADJ.html) – [ADP](gl_ctg-pos-ADP.html) – [ADV](gl_ctg-pos-ADV.html) – [AUX](gl_ctg-pos-AUX.html) – [CCONJ](gl_ctg-pos-CCONJ.html) – [DET](gl_ctg-pos-DET.html) – [INTJ](gl_ctg-pos-INTJ.html) – [NOUN](gl_ctg-pos-NOUN.html) – [NUM](gl_ctg-pos-NUM.html) – [PART](gl_ctg-pos-PART.html) – [PRON](gl_ctg-pos-PRON.html) – [PROPN](gl_ctg-pos-PROPN.html) – [PUNCT](gl_ctg-pos-PUNCT.html) – [SCONJ](gl_ctg-pos-SCONJ.html) – [SYM](gl_ctg-pos-SYM.html) – [VERB](gl_ctg-pos-VERB.html)

## Features

[Foreign](gl_ctg-feat-Foreign.html) – [Polarity](gl_ctg-feat-Polarity.html)

## Relations

[acl](gl_ctg-dep-acl.html) – [advcl](gl_ctg-dep-advcl.html) – [advmod](gl_ctg-dep-advmod.html) – [amod](gl_ctg-dep-amod.html) – [appos](gl_ctg-dep-appos.html) – [aux](gl_ctg-dep-aux.html) – [case](gl_ctg-dep-case.html) – [cc](gl_ctg-dep-cc.html) – [ccomp](gl_ctg-dep-ccomp.html) – [conj](gl_ctg-dep-conj.html) – [cop](gl_ctg-dep-cop.html) – [dep](gl_ctg-dep-dep.html) – [det](gl_ctg-dep-det.html) – [flat](gl_ctg-dep-flat.html) – [iobj](gl_ctg-dep-iobj.html) – [mark](gl_ctg-dep-mark.html) – [nmod](gl_ctg-dep-nmod.html) – [nsubj](gl_ctg-dep-nsubj.html) – [nummod](gl_ctg-dep-nummod.html) – [obj](gl_ctg-dep-obj.html) – [obl](gl_ctg-dep-obl.html) – [punct](gl_ctg-dep-punct.html) – [root](gl_ctg-dep-root.html) – [xcomp](gl_ctg-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3993 sentences, 126011 tokens and 138837 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 13812 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 242 types of words that contain both letters and punctuation. Examples: etc., AA., CC., C., S.A., a., art., pp., d/105, L., 1.ª, 2.a, 2.º, 5.º, 80/68/CEE, 92/43/CEE, B., C.H., Castela-A, E., EE.UU., I., J., Timbre-Real, c​o​n​t​e​n​c​i​o​s​o​-​a​d​m​i​n​i​s​t​r​a​t​i​v​o, gr., m/105h, marítimo-terrestre, ptas., v​a​r​i​a​n​z​a​s​-​c​o​v​a​r​i​a​n​z​a​s, -n/2, 08.05.432A.740.0, 1%dos, 1.1.-España, 1.Programa, 1.a, 101/97/CE, 12.1.e, 123.A, 149.1.21.ª, 1999/519/EC, 2.o, 2000/76/CE, 2005,mais, 21.Un, 3.º, 35.3.n, 4.º, 620.1.º, 76/464/CEE</li>
</ul>

<ul>
<li>This corpus contains 12750 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 1211 types of multi-word tokens. Examples: do, da, no, dos, na, das, ao, á, nos, ó, polo, nas, co, pola, dun, coa, dunha, neste, aos, ós, nun, deste, desta, nunha, polos, cos, cunha, nesta, coas, cun, termos, polas, tódolos, destes, destas, nestes, deles, pódese, noutros, tódalas, delas, doutros, doutras, trátase, del, nese, débese, modifícase, nalgúns, desa.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: X</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): Ln, föhn, non, on, senon</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as pronouns (PRON): algo, alguén, aquel, aquilo, cal, cando, canto, che, como, consigo, cuxo, el, este, eu, iso, isto, lle, me, min, nada, ninguén, nos, nós, o, onde, que, quen, quén, se, si, te, ti, un, vos, vostede</li>
</ul>

<ul>
<li>This corpus contains 29 lemmas tagged as determiners (DET): algún, ambos, aquel, cada, calquera, canto, certo, demais, entrambos, ese, este, mesmo, meu, moito, ningún, noso, o, outro, pouco, propio, que, senllos, seu, tal, tanto, teu, todo, un, varios</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: aquel, canto, este, o, que, un</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): estar, ser</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: estar, ser</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








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










<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: obstante, apreciable, efectivo, funcional, vascularizados</li>
          <li>ADP: de, en</li>
          <li>ADV: concretamente</li>
          <li>DET: a</li>
          <li>NOUN: táboa, Capítulo, cadro, figura, figuras, Califf, Cantábrica-Rías, Lei, Parque, Punto</li>
          <li>NUM: 1, 10, 20, 23, 70, -11,86, -36,03, -42,43, 105, 11</li>
          <li>PART: non</li>
          <li>PRON: como</li>
          <li>PROPN: 1979a, BOE, Benson, Brassington, CV, Covarrubias, Exponse, Isla, Lim, Lin</li>
          <li>SYM: +</li>
          <li>VERB: di, Brooman, Cíes, FA+U, Hannan, IPa, MECACAR, Pasa, autoinmune, cae</li>
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
<li>This corpus uses 89 lemmas as auxiliaries (<a>aux</a>). Examples: poder, deber, ser, haber, estar, ter, ir, seguir, chegar, continuar, deixar, tender, vir, como, empezar, acabar, axudar, pasar, facer, tratar, comezar, adoitar, dar, proceder, a, caber, comenzar, contribuír, corresponder, custar, falar, interesar, necesitar, obrigar, outro, repartir, ver, volver, 16, abster, acceder, aceptar, acostumbrarse, analizar, apabulladas, aprender, aquel, bloquear, buscar, calquera.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3121)</li>
      <li>VERB--NOUN-ADP(a) (2)</li>
      <li>VERB--NOUN-ADP(ata) (2)</li>
      <li>VERB--NOUN-ADP(aínda)-ADP(xa) (1)</li>
      <li>VERB--NOUN-ADP(como) (8)</li>
      <li>VERB--NOUN-ADP(de) (13)</li>
      <li>VERB--NOUN-ADP(en) (4)</li>
      <li>VERB--NOUN-ADP(entre) (1)</li>
      <li>VERB--NOUN-ADP(sobre) (1)</li>
      <li>VERB--PRON (1826)</li>
      <li>VERB--PRON-ADP(de) (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4434)</li>
      <li>VERB--NOUN-ADP(a) (1)</li>
      <li>VERB--NOUN-ADP(como) (7)</li>
      <li>VERB--NOUN-ADP(con) (2)</li>
      <li>VERB--NOUN-ADP(de) (17)</li>
      <li>VERB--NOUN-ADP(en) (3)</li>
      <li>VERB--NOUN-ADP(falar) (1)</li>
      <li>VERB--NOUN-ADP(historicamente) (1)</li>
      <li>VERB--NOUN-ADP(investir) (1)</li>
      <li>VERB--NOUN-ADP(medio) (1)</li>
      <li>VERB--NOUN-ADP(mentres) (1)</li>
      <li>VERB--NOUN-ADP(precisamente)-ADP(superior) (1)</li>
      <li>VERB--NOUN-ADP(segundo) (1)</li>
      <li>VERB--NOUN-ADP(sobre) (1)</li>
      <li>VERB--NOUN-ADP(só) (1)</li>
      <li>VERB--PRON (1608)</li>
      <li>VERB--PRON-ADP(como) (1)</li>
      <li>VERB--PRON-ADP(para) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (276)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 13 relation types are not used in this corpus at all: <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>fixed</a>, <a>compound</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
