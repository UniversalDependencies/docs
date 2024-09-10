---
layout: base
title:  'UD_Italian-Old'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian Old

Language: [Italian](/it/index.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Claudia Corbetta, Marco Passarotti, Flavio Massimiliano Cecchini, Giovanni Moretti.

Repository: [UD_Italian-Old](https://github.com/UniversalDependencies/UD_Italian-Old)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_old214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-SA 4.0

Genre: poetry

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian-Old/issues).
If you want to collaborate, please contact [claudia&nbsp;•&nbsp;corbetta&nbsp;(æt)&nbsp;unibg&nbsp;•&nbsp;it].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | assigned by a program, not checked manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually, natively in UD style |

## Description

Italian-Old is a treebank containing **Dante Alighieri's Comedy**, based on the 1994 Petrocchi edition and taken from the [**DanteSearch corpus**](https://dantesearch.dantenetwork.it), originally created at the University of Pisa, Italy. The syntactic annotation has been done from scratch, following UD annotation scheme.

It is a treebank of Old Italian, specifically Florentine. The Comedy was composed between approximately 1306 and 1321.




This treebank includes 2 402 sentences (82 644 tokens, counting only single tokens and not considering multi-token words) and is a literary text (poetry). It contains only Inferno and Purgatorio. Specifically, Inferno includes 1 228 sentences and 41 367 tokens and Purgatorio consists of 1 174 sentences and 41 277 tokens. We are currently working on annotating Paradiso.

The treebank is split into three subsets, `dev`, `test` and `train`, with approximate ratios of 15%, 15%, and 70%, respectively, for Inferno and Purgatorio. These subsets are then merged into unique `dev`, `test` and `train` sets.

The distribution of Inferno (tokens: 41 367) with respect to the subsets is as follows:
* `train`: 902 sentences (OldItalian_Dante_Inferno-1; OldItalian_Dante_Inferno-902) - 28 995 tokens
* `dev`: 151 sentences (OldItalian_Dante_Inferno-903; OldItalian_Dante_Inferno-1053) - 6 232 tokens
* `test`: 175 sentences (OldItalian_Dante_Inferno-1054; OldItalian_Dante_Inferno-1228) - 6 140 tokens


The distribution of Purgatorio (tokens: 41 277) with respect to the subsets is as follows:
* `train`: 846 sentences (OldItalian_Dante_Purgatorio-1; OldItalian_Dante_Purgatorio-846) - 28 903 tokens
* `dev`: 165 sentences (OldItalian_Dante_Purgatorio-847; OldItalian_Dante_Purgatorio-1011) - 6 207 tokens
* `test`: 163 sentences (OldItalian_Dante_Purgatorio-1012; OldItalian_Dante_Purgatorio-1174) - 6 167 tokens


**Since the Italian-Old treebank is going to be expanded to include Paradiso, its structure is subject to changes.**


## Acknowledgments

This work has been carried out in collaboration with the research center CIRCSE (Università Cattolica del Sacro Cuore di Milano).
We extend our gratitude to all the individuals who made this work possible.
The annotation of the sonnet by Arnaut Daniel (Purgatorio, XXVI vv.140-147) was carried out by Michele Tron.


For any doubts, suggestions, or reports, please do not hesitate to contact the person in charge: claudia.corbetta@unibg.it.


## References

To cite the treebank please refer to:

* C. Corbetta, M. Passarotti, F. M. Cecchini, G. Moretti, Highway to Hell. Towards a Universal Dependencies Treebank for Dante Alighieri’s Comedy, F. Boschetti, G. Lebani, B. Magnini, N. Novielli (Eds.), Proceedings of the Ninth Italian Conference on Computational Linguistics (CLiC-it 2023, Venice,
Italy, Nov 30 - Dec 2 2023), Associazione italiana di linguistica computazionale (AILC).

Other:

* D. Alighieri, La Commedia secondo l’antica vulgata voll. i–iv, number 7 in Edizione nazionale delle Opere di Dante Alighieri a cura della Società Dantesca Italiana, Le Lettere, Florence, Italy, 1994. URL: https://www.lelettere.it/libro/9788871661483, editor: Giorgio Petrocchi.


# Statistics of UD Italian Old

## POS Tags

[ADJ](it_old-pos-ADJ.html) – [ADP](it_old-pos-ADP.html) – [ADV](it_old-pos-ADV.html) – [AUX](it_old-pos-AUX.html) – [CCONJ](it_old-pos-CCONJ.html) – [DET](it_old-pos-DET.html) – [INTJ](it_old-pos-INTJ.html) – [NOUN](it_old-pos-NOUN.html) – [NUM](it_old-pos-NUM.html) – [PART](it_old-pos-PART.html) – [PRON](it_old-pos-PRON.html) – [PROPN](it_old-pos-PROPN.html) – [PUNCT](it_old-pos-PUNCT.html) – [SCONJ](it_old-pos-SCONJ.html) – [VERB](it_old-pos-VERB.html) – [X](it_old-pos-X.html)

## Features

[Aspect](it_old-feat-Aspect.html) – [Clitic](it_old-feat-Clitic.html) – [Definite](it_old-feat-Definite.html) – [Degree](it_old-feat-Degree.html) – [Foreign](it_old-feat-Foreign.html) – [Gender](it_old-feat-Gender.html) – [Mood](it_old-feat-Mood.html) – [Number](it_old-feat-Number.html) – [NumType](it_old-feat-NumType.html) – [Person](it_old-feat-Person.html) – [Poss](it_old-feat-Poss.html) – [PronType](it_old-feat-PronType.html) – [Reflex](it_old-feat-Reflex.html) – [Tense](it_old-feat-Tense.html) – [VerbForm](it_old-feat-VerbForm.html) – [Voice](it_old-feat-Voice.html)

## Relations

[acl](it_old-dep-acl.html) – [acl:relcl](it_old-dep-acl-relcl.html) – [advcl](it_old-dep-advcl.html) – [advcl:cmp](it_old-dep-advcl-cmp.html) – [advcl:pred](it_old-dep-advcl-pred.html) – [advcl:relcl](it_old-dep-advcl-relcl.html) – [advmod](it_old-dep-advmod.html) – [advmod:lmod](it_old-dep-advmod-lmod.html) – [advmod:neg](it_old-dep-advmod-neg.html) – [advmod:tmod](it_old-dep-advmod-tmod.html) – [amod](it_old-dep-amod.html) – [appos](it_old-dep-appos.html) – [aux](it_old-dep-aux.html) – [aux:pass](it_old-dep-aux-pass.html) – [case](it_old-dep-case.html) – [cc](it_old-dep-cc.html) – [ccomp](it_old-dep-ccomp.html) – [ccomp:relcl](it_old-dep-ccomp-relcl.html) – [ccomp:reported](it_old-dep-ccomp-reported.html) – [conj](it_old-dep-conj.html) – [cop](it_old-dep-cop.html) – [csubj](it_old-dep-csubj.html) – [csubj:pass](it_old-dep-csubj-pass.html) – [csubj:relcl](it_old-dep-csubj-relcl.html) – [det](it_old-dep-det.html) – [det:poss](it_old-dep-det-poss.html) – [det:predet](it_old-dep-det-predet.html) – [discourse](it_old-dep-discourse.html) – [dislocated](it_old-dep-dislocated.html) – [expl](it_old-dep-expl.html) – [expl:impers](it_old-dep-expl-impers.html) – [expl:pass](it_old-dep-expl-pass.html) – [expl:pv](it_old-dep-expl-pv.html) – [fixed](it_old-dep-fixed.html) – [flat](it_old-dep-flat.html) – [flat:foreign](it_old-dep-flat-foreign.html) – [flat:name](it_old-dep-flat-name.html) – [flat:redup](it_old-dep-flat-redup.html) – [iobj](it_old-dep-iobj.html) – [mark](it_old-dep-mark.html) – [nmod](it_old-dep-nmod.html) – [nmod:lmod](it_old-dep-nmod-lmod.html) – [nsubj](it_old-dep-nsubj.html) – [nsubj:outer](it_old-dep-nsubj-outer.html) – [nsubj:pass](it_old-dep-nsubj-pass.html) – [nummod](it_old-dep-nummod.html) – [obj](it_old-dep-obj.html) – [obl](it_old-dep-obl.html) – [obl:agent](it_old-dep-obl-agent.html) – [obl:arg](it_old-dep-obl-arg.html) – [obl:lmod](it_old-dep-obl-lmod.html) – [obl:tmod](it_old-dep-obl-tmod.html) – [orphan](it_old-dep-orphan.html) – [parataxis](it_old-dep-parataxis.html) – [punct](it_old-dep-punct.html) – [root](it_old-dep-root.html) – [vocative](it_old-dep-vocative.html) – [xcomp](it_old-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2402 sentences, 80694 tokens and 82644 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 14262 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 247 types of words that contain both letters and punctuation. Examples: l', ch', 'l, d', s', m', i', com', ond', se', 'n, n', t', quand', quell', diss', c', e', v', dov', perch', un', ver', di', ov', vid', inver', quant', quest', vuo', 've, fu', sanz', sovr', vo', senti', rispuos', 'ntelletto, fec', mentr', 'nferno, cu', udi', altr', de', ogn', 'ntorno, tant', tutt', ell'</li>
</ul>

<ul>
<li>This corpus contains 1929 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 457 types of multi-word tokens. Examples: al, del, nel, dal, col, de', a', sen, nol, dimmi, coi, meco, ne', co', ai, seco, farsi, sul, teco, ten, da', dallato, fassi, fatti, ricorditi, volgiti, volsimi, dai, ditemi, parlarmi, vassi, vuolsi, dilli, dinne, dissemi, farne, gliel', guardommi, lèvati, men, sùe, vienne, Attienti, Rispuosemi, allungarsi, avermi, confortarmi, conviensi, dandole, dirmi.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): Ohi, o, oh</li>
</ul>

<ul>
<li>This corpus contains 90 lemmas tagged as pronouns (PRON): alcuno, altrettanto, altro, altrui, ambedue, ambo, assai, catuno, certo, che, chi, chiunque, ci, ciascheduno, ciascuno, cio', ciò, ciò', codesto, colei, coloro, colui, costei, costoro, costui, cotale, cui, desso, dove, egli, ella, elli, ello, entrambi, esse, esso, gli, i, ieu, il, io, la, le, lei, li, lo, loro, lui, me, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, nullo, ognuno, onde, ove, poco, quale, qualunque, quanto, quantunque, quello, questo, se, si, suo, sé, tale, tanto, te, ti, tu, tuo, tutte, tutto, ubi, uno, uomo, ve, vi, vicenda, voi, vos, vostro</li>
</ul>

<ul>
<li>This corpus contains 55 lemmas tagged as determiners (DET): alcuno, alquanto, altro, altrui, ambedue, aquel, assai, che, ciascuno, codesto, cotale, cotanto, cui, entrambi, esso, i, il, la, li, lo, loro, medesimo, meno, mio, molto, mon, nessuno, nostro, nullo, ogni, ognuno, parecchio, più, poco, proprio, qualche, quale, quanto, quantunque, quello, questo, solo, stesso, suo, tale, tanto, troppo, tuo, tutta, tutti, tutto, uno, veruno, vostre, vostro</li>
</ul>

<ul>
<li>Out of the above, 37 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, altrui, ambedue, assai, che, ciascuno, codesto, cotale, cui, entrambi, esso, i, il, la, li, lo, loro, mio, molto, nessuno, nostro, nullo, ognuno, poco, quale, quanto, quantunque, quello, questo, suo, tale, tanto, tuo, tutto, uno, vostro</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): avere, dovere, essere, potere, stare, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: avere, dovere, essere, potere, stare, venire, volere</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: avendo, essendo, possendo</li>
    <li>VERB: dicendo, piangendo, veggendo, andando, gridando, parlando, cantando, venendo, guardando, pensando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: è, era, fu, son, fui, se', sia, avea, fosse, eran</li>
    <li>VERB: disse, vidi, fa, va, vedi, ha, fece, rispuose, fé, par</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: cercando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: esser, essere, aver, avere, voler, poter, potere, volere</li>
    <li>VERB: veder, dir, far, fare, andar, dire, parlar, venir, voler, aver</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: disdegnoso</li>
    <li>AUX: stato, state, fossero, è, fossi, potuto, stata, stati, voluto, avesse</li>
    <li>VERB: fatto, fatta, detto, tratto, fatti, giunto, morta, vòlto, morto, morti</li>
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
      <li>ADJ: prima, alta, sola, bella, buona, trista, lunga, nova, vera, antica</li>
      <li>AUX-Part: state, stata</li>
      <li>DET: la, le, l', sua, una, mia, altra, quella, tua, questa</li>
      <li>NOUN: gente, terra, parte, via, anima, parole, mente, acqua, vita, ombra</li>
      <li>PRON: la, lei, quella, ella, le, questa, una, altra, l', essa</li>
      <li>VERB: fatta, morta, volta, stretta, aperta, aperte, rotta, veduta, partita, sciolta</li>
      <li>VERB-Inf: cessar</li>
      <li>VERB-Part: fatta, morta, volta, stretta, aperta, aperte, rotta, veduta, partita, sciolta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: buon, alto, primo, dolce, novo, mal, etterno, basso, duro, gran</li>
      <li>ADJ-Part: disdegnoso</li>
      <li>ADV: quanto, secondo, tosto</li>
      <li>AUX-Part: stato, fossero, è, fossi, potuto, stati, voluto, avesse, avessi, avuto</li>
      <li>DET: il, 'l, l', li, lo, un, i, mio, suo, quel</li>
      <li>NOUN: occhi, maestro, duca, mondo, loco, piè, tempo, viso, ciel, monte</li>
      <li>PRON: lui, li, elli, quel, lo, altro, colui, un, el, altri</li>
      <li>PROPN: Tesoro</li>
      <li>VERB: fatto, detto, tratto, fatti, giunto, vòlto, morto, morti, venuto, messo</li>
      <li>VERB-Fin: ricolto</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, detto, tratto, fatti, giunto, vòlto, morto, morti, venuto, messo</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: gran, gravi, dolci, dolenti, verdi, prime, alti, diverse, lenti, alte</li>
      <li>AUX: son, eran, fuor, fummo, sono, siete, furon, eravam, hanno, erano</li>
      <li>AUX-Fin: son, eran, fuor, fummo, sono, siete, furon, eravam, hanno, erano</li>
      <li>AUX-Part: state, fossimo</li>
      <li>DET: le, li, i, l', il, ', sue, suoi, miei, tutte</li>
      <li>NOUN: occhi, parole, cose, passi, anime, volte, ombre, piedi, piè, genti</li>
      <li>PRON: noi, voi, ci, li, ne, lor, altri, vi, tutti, loro</li>
      <li>VERB: fanno, venimmo, vanno, hanno, fatti, stanno, morti, parean, andavam, fer</li>
      <li>VERB-Fin: fanno, venimmo, vanno, hanno, stanno, parean, andavam, fer, avean, fan</li>
      <li>VERB-Inf: saliri, soffriri</li>
      <li>VERB-Part: fatti, morti, giunti, vòlti, aperte, sparte, accesi, fatte, nati, sospesi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: gran, dolce, buon, alto, grande, primo, prima, maggior, alta, sola</li>
      <li>ADJ-Part: disdegnoso</li>
      <li>ADV: repente, quanto, secondo, tosto</li>
      <li>AUX: è, era, fu, fui, se', son, sia, avea, fosse, ha</li>
      <li>AUX-Fin: è, era, fu, fui, se', son, sia, avea, fosse, ha</li>
      <li>AUX-Part: stato, fossero, è, fossi, potuto, stata, stati, voluto, avesse, avessi</li>
      <li>DET: la, il, l', 'l, lo, un, mio, sua, suo, una</li>
      <li>NOUN: maestro, gente, terra, duca, mondo, loco, parte, via, tempo, viso</li>
      <li>PRON: io, mi, tu, lui, me, ti, i', elli, lo, quel</li>
      <li>PROPN: Tesoro</li>
      <li>VERB: disse, vidi, fa, va, vedi, ha, fece, rispuose, fé, fatto</li>
      <li>VERB-Fin: disse, vidi, fa, va, vedi, ha, fece, rispuose, fé, par</li>
      <li>VERB-Inf: andare, frustato</li>
      <li>VERB-Part: fatto, fatta, detto, tratto, giunto, morta, vòlto, morto, venuto, messo</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, l', 'l, li, lo, le, i, ', l</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, un', uno</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: altissimo, lenta, lento, bassissimo, dolcissimo, famoso, miglior, novissimo, pessima, presto</li>
      <li>DET: poco</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maggior, mai, alto, cara, maggiori, meglio, peggior, tosta, Maggiore, amara</li>
      <li>ADV: più, men, tosto, meglio, oltre, avanti, giù, me', mei, meno</li>
      <li>DET: men, troppa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: basso, alto, lontan, oscuro</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, avea, eran, fosse, fossi, eravam, potea, erano, eravamo, fosser</li>
      <li>VERB-Fin: parea, avea, facea, dicea, stava, vedea, andava, pareva, parean, venìa</li>
      <li>VERB-Part: simigliante, ardente, bogliente, lucente, lucenti, possente, reverente, reverenti, somigliante, stante</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: fu, fui, fuor, fummo, furon, fu', fosti, ebbe, fue, fur</li>
      <li>AUX-Part: stato, state, fossero, è, fossi, potuto, stata, stati, avesse, avessi</li>
      <li>VERB-Fin: disse, vidi, fece, rispuose, fé, diss', cominciò, volse, dissi, volsi</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, detto, fatta, giunto, morta, morti, morto, tratto, venuto, volta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: fora, sarebbe, sarei, saria, avrei, avria, poria, averebbe, averien, avrebber</li>
      <li>VERB: saprei, direi, parrebbe, assentirei, avrebbe, avrebber, avrei, avria, cantere', conosceresti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: dei, sie, de', siate</li>
      <li>VERB-Fin: vedi, fa, di', guarda, dire, dì, va, sappi, vieni, pensa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: è, era, fu, son, fui, se', avea, eran, ha, fia</li>
      <li>VERB-Fin: disse, vidi, fa, ha, fece, rispuose, va, fé, par, diss'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sia, fosse, fossi, possa, sie, fosser, sien, avesse, fossero, volesse</li>
      <li>VERB-Fin: vada, porti, vegna, abbia, basti, faccia, sia, avesse, creda, dica</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: fia, sarà, sarai, sarò, fier, saranno, potrai, saran, avrà, essere</li>
      <li>VERB-Fin: vedrai, dirò, farà, verrà, farò, udirai, saprai, troverai, verranno, avrai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: fosse, fossi, fosser, avesse, fossero, volesse, avessi, foss', fossimo, potessi</li>
      <li>VERB-Fin: avesse, facesse, venisse, dicesse, vedessi, avessi, fosse, paresse, aprisse, avesser</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: disdegnoso</li>
      <li>AUX: era, fu, fui, avea, eran, fuor, fummo, furon, fu', eravam</li>
      <li>AUX-Fin: era, fu, fui, avea, eran, fuor, fummo, furon, fu', eravam</li>
      <li>AUX-Inf: avere</li>
      <li>AUX-Part: stato, fossero, state, è, fossi, potuto, stata, stati, voluto, avesse</li>
      <li>VERB: disse, vidi, fece, rispuose, fé, diss', parea, avea, cominciò, fatto</li>
      <li>VERB-Fin: disse, vidi, fece, rispuose, fé, diss', parea, avea, cominciò, volse</li>
      <li>VERB-Inf: tradita, visto</li>
      <li>VERB-Part: fatto, tratto, fatti, detto, venuto, giunto, morto, dato, posto, messo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: è, son, esser, se', sia, ha, può, sono, puoi, hai</li>
      <li>AUX-Fin: è, son, se', sia, ha, può, sono, puoi, hai, siete</li>
      <li>AUX-Inf: esser, essere, aver, voler, avere, poter, potere, volere</li>
      <li>VERB: fa, va, vedi, ha, veder, far, dir, fare, par, dire</li>
      <li>VERB-Fin: fa, va, vedi, ha, par, convien, è, fanno, guarda, vien</li>
      <li>VERB-Inf: veder, dir, far, fare, andar, dire, parlar, venir, voler, aver</li>
      <li>VERB-Part: bogliente, generante, lucenti, rimanente, vacante</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: avea, ha, può, puoi, hai, potea, puote, ho, ebbe, hanno</li>
      <li>AUX-Conv: avendo, essendo, possendo</li>
      <li>AUX-Fin: avea, ha, può, puoi, hai, potea, puote, ho, ebbe, hanno</li>
      <li>AUX-Inf: aver, avere, voler, poter, potere, volere</li>
      <li>AUX-Part: potuto, avesse, avessi, avuto, voluto</li>
      <li>VERB: disse, vidi, fa, vedi, ha, fece, veder, rispuose, dir, far</li>
      <li>VERB-Conv: dicendo, piangendo, andando, gridando, parlando, veggendo, cantando, venendo, guardando, pensando</li>
      <li>VERB-Fin: disse, vidi, fa, vedi, ha, fece, rispuose, fé, diss', avea</li>
      <li>VERB-Inf: veder, dir, far, fare, voler, dire, aver, vedere, riguardar, saper</li>
      <li>VERB-Part: fatto, tratto, detto, udito, fatti, veduto, dato, sofferto, visto, colto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: Sieti, de', puote</li>
      <li>AUX-Part: state</li>
      <li>VERB: fatto, fatta, morta, morti, rotto, detto, messo, volta, vòlto, aperta</li>
      <li>VERB-Fin: aspetta, piange, vede, dice, messo, noma, paga, ristora, schianta, accoglie</li>
      <li>VERB-Inf: veder, dire, intender, assolver, aver, compartir, far, fare, fornir, frugar</li>
      <li>VERB-Part: fatto, fatta, morta, morti, rotto, volta, vòlto, chiuso, detto, aperta</li>
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
      <li>DET: il, la, l', 'l, li, lo, le, i, un, una</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADJ: quella, tal</li>
      <li>DET: le, quel, quella, questa, questo, quell', quelle, quello, stesso, queste</li>
      <li>PRON: ciò, quel, colui, quei, quella, questi, questo, questa, quelli, color</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: che, quanto, quanta, Qual, Quante, quali, quanti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: altro</li>
      <li>ADV: alquanto</li>
      <li>DET: altra, altro, ogne, alcun, altrui, altri, una, alcuna, tutte, tanta</li>
      <li>PRON: altro, un, altri, ciascun, altrui, qual, una, alcun, altra, uno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: che, qual, quai, quale, quali, quant', quanto</li>
      <li>PRON: che, cui, qual, quai, quant', quali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: mio, sua, suo, mia, lor, tua, tuo, sue, suoi, miei</li>
      <li>PRON: io, si, mi, tu, me, ti, noi, s', m', i'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: qual, quale, quali, quante, quanto, cui, quanta, quanti, quantunque</li>
      <li>PRON: che, ch', chi, cui, c', qual, ond', quale, dove, cu'</li>
      <li>SCONJ: che</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutto, ogne, tutti, tutte, tutta, amendue, ambedue, tutt', ogn', ogni</li>
      <li>PRON: tutti, amendue, tutto, tutte, 'mbedue, ambedue, ambedui, intrambi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: due, tre, mille, sette, quattro, ambo, cento, cinque, diece, sei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primo, secondo, prima, prime, pria, primi, seconda, terzo, primaio, quarto</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: mio, sua, suo, mia, lor, tua, tuo, sue, suoi, miei</li>
      <li>PRON: io, mi, me, ti, tu, m', i', te, t', ei</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: si, s', mi, sé, ti, se, m', ci, me, t'</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: fui, son, era, fummo, fossi, fu', avea, eravam, ho, sono</li>
      <li>AUX-Fin: fui, son, era, fummo, fu', avea, eravam, fossi, ho, sono</li>
      <li>AUX-Part: stato, fossi, avessi, avuto, fossimo, son, sono</li>
      <li>PRON: io, mi, me, noi, m', i', ci, ne, quel, n'</li>
      <li>VERB: vidi, diss', dissi, volsi, credo, so, vid', dico, veggio, gridò</li>
      <li>VERB-Fin: vidi, diss', dissi, volsi, credo, so, vid', dico, veggio, gridò</li>
      <li>VERB-Part: morto, accorto, giunto, atteso, detto, nato, partiti, rimossi, tratto, udito</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: se', puoi, hai, siete, fosti, sarai, vuo', avete, dei, potrai</li>
      <li>AUX-Fin: se', puoi, hai, siete, fosti, sarai, vuo', avete, dei, potrai</li>
      <li>AUX-Part: potuto, state</li>
      <li>PRON: tu, ti, te, voi, vi, t', v', tal, ne, ve</li>
      <li>VERB: vedi, va, fa, di', hai, vedrai, sai, guarda, dire, dì</li>
      <li>VERB-Fin: vedi, va, fa, di', hai, vedrai, sai, guarda, dire, dì</li>
      <li>VERB-Part: venuto, fatto, tratto, disposto, giunto, veduto, accorti, assiso, caduto, colto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: è, era, fu, son, eran, sia, fosse, ha, avea, fia</li>
      <li>AUX-Fin: è, era, fu, son, eran, sia, fosse, ha, avea, fia</li>
      <li>AUX-Part: stato, fossero, è, stata, stati, avesse, potuto, state, voluto</li>
      <li>DET: esso</li>
      <li>PRON: si, s', lui, li, sé, elli, lo, la, lei, el</li>
      <li>VERB: disse, fa, ha, fece, rispuose, fé, par, parea, convien, avea</li>
      <li>VERB-Fin: disse, fa, ha, fece, rispuose, fé, par, parea, convien, avea</li>
      <li>VERB-Part: fatto, detto, rimaso, tolto, tratto, vòlto, dato, vòlti, condotto, giunti</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADP: con, co</li>
          <li>ADV: vi, ne, ci, n'</li>
          <li>DET: suo</li>
          <li>PRON: si, mi, ti, s', ne, m', li, lo, ci, la</li>
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
          <li>X: Beati, et, in, me, non, te, Dei, Deus, Domine, Satàn</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: essere.</li>
</ul>

<ul>
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: essere, avere, potere, volere, dovere, stare.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (12)</li>
      <li>VERB--PRON (23)</li>
      <li>VERB-Conv--NOUN (4)</li>
      <li>VERB-Conv--PRON (5)</li>
      <li>VERB-Fin--NOUN (1487)</li>
      <li>VERB-Fin--NOUN-ADP(con) (1)</li>
      <li>VERB-Fin--NOUN-ADP(di) (1)</li>
      <li>VERB-Fin--PRON (2633)</li>
      <li>VERB-Fin--PRON-ADP(di) (1)</li>
      <li>VERB-Inf--NOUN (83)</li>
      <li>VERB-Inf--PRON (85)</li>
      <li>VERB-Part--NOUN (134)</li>
      <li>VERB-Part--PRON (244)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (20)</li>
      <li>VERB--PRON (11)</li>
      <li>VERB-Conv--NOUN (127)</li>
      <li>VERB-Conv--NOUN-ADP(di) (1)</li>
      <li>VERB-Conv--PRON (26)</li>
      <li>VERB-Fin--NOUN (1742)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(di) (8)</li>
      <li>VERB-Fin--NOUN-ADP(in) (2)</li>
      <li>VERB-Fin--NOUN-ADP(in)-ADP(su) (1)</li>
      <li>VERB-Fin--NOUN-ADP(senza) (1)</li>
      <li>VERB-Fin--PRON (1487)</li>
      <li>VERB-Fin--PRON-ADP(con) (1)</li>
      <li>VERB-Fin--PRON-ADP(di) (1)</li>
      <li>VERB-Inf--NOUN (313)</li>
      <li>VERB-Inf--NOUN-ADP(di) (3)</li>
      <li>VERB-Inf--NOUN-ADP(senza) (1)</li>
      <li>VERB-Inf--PRON (164)</li>
      <li>VERB-Part--NOUN (113)</li>
      <li>VERB-Part--PRON (96)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (5)</li>
      <li>VERB--PRON-ADP(a) (1)</li>
      <li>VERB-Conv--PRON (10)</li>
      <li>VERB-Fin--PRON (626)</li>
      <li>VERB-Fin--PRON-ADP(dietro) (1)</li>
      <li>VERB-Fin--PRON-ADP(dinanzi) (1)</li>
      <li>VERB-Inf--PRON (54)</li>
      <li>VERB-Inf--PRON-ADP(anzi) (1)</li>
      <li>VERB-Part--PRON (88)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 437 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: fare si, volgere si, muovere si, andare se, partire si, gire se, levare si, appressare s', arrestare s', mettere si, rivolgere si, stare si, accorrere s', affiggere s', aprire s', mostrare si, sentire si, tacere si, fuggire si, pentire si, togliere si, venire se, accendere s', accorgere m', andare m', distendere si, gire si, torcere si, andare te, battere si, convenire si, dipartire si, gettare si, ricordare ti, tenere si, trarre si, accogliere s', accorgere s', accorgere si, aggirare s', aggiungere s', andare si, appiccare s', ascondere s', convertire si, dare si, dileguare si, fendere si, frangere si, lagnare si</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 68 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: fare si, chiamare si, raccogliere si, vedere si, dire si, nomare si, accogliere s', bagnare si, perdere si, piangere si, tacere si, adonare s', allegrare s', ascoltare s', bastare si, bere si, bramare si, cantare si, cavare si, chiudere si, compartire si, confessare si, conservare si, contare si, dare si, dichiarare si, divallare si, fugare si, gemere si, gire si, inghirlandare s', intendere s', leggere si, levare si, muovere si, negare si, obliare s', pagare si, parere si, pigliare si, poggiare si, porre si, premere si, purgare si, registrare si, riacquetare si, ribattere si, ricreare si, ricucire si, rompere si</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 173 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: volgere mi, fare mi, levare mi, muovere mi, rivolgere mi, partire mi, volgere ti, accorgere m', gettare mi, levare ti, meravigliare ti, rendere mi, trarre mi, vedere mi, accostare m', arrestare t', dolere mi, mettere mi, partire ti, privare sé, recare ti, ricordare ti, rimanere ti, rimembrare ti, scuotere mi, sentire mi, solvere ti, tenere ti, trarre ci, trovare mi, vedere sé, volgere ci, Lia mi, abbandonare m', accostare mi, acquattare t', adagiare t', adirare m', adornare m', adornare mi, affaticare m', ammentare t', apparecchiare m', appigliare sé, appressare ci, appressare sé, aprire t', armare t', arrestare m', assedere m'</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: arrestare, specchiare</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 27 relation subtypes: <a>acl:relcl</a>, <a>advcl:cmp</a>, <a>advcl:pred</a>, <a>advcl:relcl</a>, <a>advmod:lmod</a>, <a>advmod:neg</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>ccomp:relcl</a>, <a>ccomp:reported</a>, <a>csubj:pass</a>, <a>csubj:relcl</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>flat:redup</a>, <a>nmod:lmod</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
