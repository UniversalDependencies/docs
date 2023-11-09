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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_old213)<br />
Download all treebanks: [UD 2.13](/#download)

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




This treebank includes 1 228 sentences (41 367 tokens, counting only single tokens and not considering multi-token words) and is a literary text (poetry). It contains only the first Cantica of the Comedy, Inferno. We are currently working on annotating Purgatorio and Paradiso.

The treebank is split into three subsets, `dev`, `test` and `train`, with a respective approximate ratio of 10%/10%/80%.
The distribution of the Inferno with respect to the subsets is as follows:

* `train`: 1-18 Canti
* `dev`: 19-26 Canti
* `test`: 27-34 Canti

Since the Italian-Old treebank is going to be expanded to include Purgatorio and Paradiso, its structure is subject to changes.


## Acknowledgments

This work has been carried out in collaboration with the research center CIRCSE (Università Cattolica del Sacro Cuore di Milano) with the support of the University of Pavia.
We extend our gratitude to all the individuals who made this work possible.

For any doubts, suggestions, or reports, please do not hesitate to contact the person in charge: claudia.corbetta@unibg.it.


## References

To cite the treebank please refer to:

* C. Corbetta, M. Passarotti, F. M. Cecchini, G. Moretti, Highway to Hell. Towards a Universal Dependencies Treebank for Dante Alighieri’s Comedy, F. Boschetti, G. Lebani, B. Magnini, N. Novielli (Eds.), Proceedings of the Ninth Italian Conference on Computational Linguistics (CLiC-it 2023, Venice,
Italy, Nov 30 - Dec 2 2023), Associazione italiana di linguistica computazionale (AILC).

Other:

* D. Alighieri, La Commedia secondo l’antica vulgata voll. i–iv, number 7 in Edizione nazionale delle Opere di Dante Alighieri a cura della Società Dantesca Italiana, Le Lettere, Florence, Italy, 1994. URL: https://www.lelettere.it/libro/9788871661483, editor: Giorgio Petrocchi.


# Statistics of UD Italian Old

## POS Tags

[ADJ](it_old-pos-ADJ.html) – [ADP](it_old-pos-ADP.html) – [ADV](it_old-pos-ADV.html) – [AUX](it_old-pos-AUX.html) – [CCONJ](it_old-pos-CCONJ.html) – [DET](it_old-pos-DET.html) – [INTJ](it_old-pos-INTJ.html) – [NOUN](it_old-pos-NOUN.html) – [NUM](it_old-pos-NUM.html) – [PRON](it_old-pos-PRON.html) – [PROPN](it_old-pos-PROPN.html) – [PUNCT](it_old-pos-PUNCT.html) – [SCONJ](it_old-pos-SCONJ.html) – [VERB](it_old-pos-VERB.html) – [X](it_old-pos-X.html)

## Features

[Aspect](it_old-feat-Aspect.html) – [Clitic](it_old-feat-Clitic.html) – [Definite](it_old-feat-Definite.html) – [Degree](it_old-feat-Degree.html) – [Foreign](it_old-feat-Foreign.html) – [Gender](it_old-feat-Gender.html) – [Mood](it_old-feat-Mood.html) – [Number](it_old-feat-Number.html) – [NumType](it_old-feat-NumType.html) – [Person](it_old-feat-Person.html) – [Poss](it_old-feat-Poss.html) – [PronType](it_old-feat-PronType.html) – [Reflex](it_old-feat-Reflex.html) – [Tense](it_old-feat-Tense.html) – [VerbForm](it_old-feat-VerbForm.html) – [Voice](it_old-feat-Voice.html)

## Relations

[acl](it_old-dep-acl.html) – [acl:relcl](it_old-dep-acl-relcl.html) – [advcl](it_old-dep-advcl.html) – [advcl:cmp](it_old-dep-advcl-cmp.html) – [advcl:pred](it_old-dep-advcl-pred.html) – [advcl:relcl](it_old-dep-advcl-relcl.html) – [advmod](it_old-dep-advmod.html) – [advmod:lmod](it_old-dep-advmod-lmod.html) – [advmod:neg](it_old-dep-advmod-neg.html) – [advmod:tmod](it_old-dep-advmod-tmod.html) – [amod](it_old-dep-amod.html) – [appos](it_old-dep-appos.html) – [aux](it_old-dep-aux.html) – [aux:pass](it_old-dep-aux-pass.html) – [case](it_old-dep-case.html) – [cc](it_old-dep-cc.html) – [ccomp](it_old-dep-ccomp.html) – [ccomp:relcl](it_old-dep-ccomp-relcl.html) – [ccomp:reported](it_old-dep-ccomp-reported.html) – [conj](it_old-dep-conj.html) – [cop](it_old-dep-cop.html) – [csubj](it_old-dep-csubj.html) – [csubj:pass](it_old-dep-csubj-pass.html) – [csubj:relcl](it_old-dep-csubj-relcl.html) – [det](it_old-dep-det.html) – [det:poss](it_old-dep-det-poss.html) – [det:predet](it_old-dep-det-predet.html) – [discourse](it_old-dep-discourse.html) – [dislocated](it_old-dep-dislocated.html) – [expl](it_old-dep-expl.html) – [expl:impers](it_old-dep-expl-impers.html) – [expl:pass](it_old-dep-expl-pass.html) – [expl:pv](it_old-dep-expl-pv.html) – [fixed](it_old-dep-fixed.html) – [flat](it_old-dep-flat.html) – [flat:foreign](it_old-dep-flat-foreign.html) – [flat:name](it_old-dep-flat-name.html) – [flat:redup](it_old-dep-flat-redup.html) – [iobj](it_old-dep-iobj.html) – [mark](it_old-dep-mark.html) – [nmod](it_old-dep-nmod.html) – [nmod:lmod](it_old-dep-nmod-lmod.html) – [nsubj](it_old-dep-nsubj.html) – [nsubj:outer](it_old-dep-nsubj-outer.html) – [nsubj:pass](it_old-dep-nsubj-pass.html) – [nummod](it_old-dep-nummod.html) – [obj](it_old-dep-obj.html) – [obl](it_old-dep-obl.html) – [obl:agent](it_old-dep-obl-agent.html) – [obl:arg](it_old-dep-obl-arg.html) – [obl:lmod](it_old-dep-obl-lmod.html) – [obl:tmod](it_old-dep-obl-tmod.html) – [orphan](it_old-dep-orphan.html) – [parataxis](it_old-dep-parataxis.html) – [punct](it_old-dep-punct.html) – [root](it_old-dep-root.html) – [vocative](it_old-dep-vocative.html) – [xcomp](it_old-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1228 sentences, 40386 tokens and 41367 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 8084 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 181 types of words that contain both letters and punctuation. Examples: l', 'l, ch', d', s', i', m', com', se', 'n, ond', quand', c', quell', di', n', t', e', v', perch', diss', dov', ov', vid', un', ver', quest', vo', vuo', 'nferno, 've, cu', inver', quant', sanz', fec', rispuos', 'ntorno, fu', sovr', tutt', altr', de', grand', mentr', que', senti', udi', 'nnanzi, 'ntese</li>
</ul>

<ul>
<li>This corpus contains 972 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 238 types of multi-word tokens. Examples: al, del, nel, dal, col, de', a', sen, nol, dimmi, coi, co', ne', meco, seco, sul, ten, da', ai, dai, dilli, gliel', guardommi, teco, volsimi, vuolsi, Attienti, Fatti, Lèvati, Volgiti, dallato, dandole, dinne, dirne, dirotti, ditemi, farne, fassi, fidandomi, fuggirsi, gissi, levorsi, men, mostrocci, parlarmi, partirsi, puossi, pàrtiti, vederlo, Andovvi.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 78 lemmas tagged as pronouns (PRON): alcuno, altro, altrui, ambedue, assai, catuno, certo, che, chi, ci, ciascheduno, ciascuno, cio', ciò, ciò', codesto, colei, coloro, colui, costei, costoro, costui, cotale, cui, desso, egli, ella, ello, entrambi, esso, i, il, io, la, le, lei, li, lo, loro, lui, me, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, nullo, ognuno, ove, poco, quale, qualunque, quanto, quello, questo, se, si, suo, sé, tale, tanto, te, ti, tu, tuo, tutte, tutto, uno, uomo, ve, vi, vicenda, voi, vostro</li>
</ul>

<ul>
<li>This corpus contains 45 lemmas tagged as determiners (DET): alcuno, alquanto, altro, altrui, ambedue, che, ciascuno, codesto, cotale, cotanto, entrambi, il, li, loro, medesimo, meno, mio, molto, nessuno, nostro, nullo, ogni, parecchio, più, poco, proprio, qualche, quale, quanto, quantunque, quello, questo, solo, stesso, suo, tale, tanto, troppo, tuo, tutta, tutti, tutto, uno, veruno, vostro</li>
</ul>

<ul>
<li>Out of the above, 29 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, altrui, ambedue, che, ciascuno, codesto, cotale, entrambi, il, li, loro, mio, molto, nessuno, nostro, nullo, poco, quale, quanto, quello, questo, suo, tale, tanto, tuo, tutto, uno, vostro</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as auxiliaries (AUX): avere, dovere, essere, potere, stare, volere</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: avere, essere, potere, stare, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: avendo, possendo</li>
    <li>VERB: dicendo, parlando, veggendo, gridando, piangendo, pensando, temendo, andando, credendo, dando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: è, era, fu, son, se', fui, sia, avea, eran, fosse</li>
    <li>VERB: disse, vidi, fa, vedi, fece, ha, rispuose, va, fé, avea</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: esser, voler, essere, aver, avere, volere</li>
    <li>VERB: veder, far, dir, parlar, venir, fare, dire, venire, aver, parlare</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: disdegnoso</li>
    <li>AUX: stato, fossi, state, è, avesse, avessi, avuto, fossero, fossimo, potuto</li>
    <li>VERB: fatto, detto, fatta, morta, fatti, giunto, morto, venuto, accorto, stretta</li>
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
      <li>ADJ: lunga, trista, alta, prima, buona, destra, piena, alte, bella, nova</li>
      <li>AUX-Part: state, stata</li>
      <li>DET: la, le, l', sua, una, altra, quella, tua, questa, mia</li>
      <li>NOUN: terra, gente, parte, parole, via, anima, man, acqua, vita, faccia</li>
      <li>PRON: quella, la, le, altra, una, l', questa, lei, colei, ella</li>
      <li>VERB: fatta, morta, stretta, rotta, volta, aperte, diserta, fatte, giunte, levata</li>
      <li>VERB-Inf: cessar</li>
      <li>VERB-Part: fatta, morta, stretta, rotta, volta, aperte, diserta, fatte, giunte, levata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: primo, alto, buon, mal, secondo, tristo, basso, vivo, duro, lasso</li>
      <li>ADJ-Part: disdegnoso</li>
      <li>AUX-Part: stato, fossi, è, avesse, avessi, avuto, fossero, fossimo, potuto, sono</li>
      <li>DET: il, 'l, l', li, lo, i, un, mio, suo, quel</li>
      <li>NOUN: maestro, duca, mondo, loco, occhi, piè, tempo, fondo, viso, capo</li>
      <li>PRON: lui, li, elli, quel, lo, altro, un, colui, el, 'l</li>
      <li>PROPN: Tesoro</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, detto, fatti, giunto, morto, venuto, accorto, vòlto, ardito, caduto</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: gran, gravi, dolenti, dolci, alte, diverse, grand', grandi, orribili, verdi</li>
      <li>AUX: son, eran, fuor, siete, sono, fummo, eravam, furon, erano, fur</li>
      <li>AUX-Fin: son, eran, fuor, siete, sono, fummo, eravam, furon, erano, fur</li>
      <li>AUX-Part: state, fossimo</li>
      <li>DET: le, li, i, l', il, suoi, tutti, ', sue, tutte</li>
      <li>NOUN: occhi, parole, cose, piedi, anime, genti, piè, ali, volte, braccia</li>
      <li>PRON: noi, ci, li, voi, altri, lor, ne, vi, tutti, loro</li>
      <li>VERB: fanno, venimmo, hanno, vanno, stanno, fatti, avean, fan, fecer, morti</li>
      <li>VERB-Fin: fanno, venimmo, hanno, vanno, stanno, avean, fan, fecer, trovammo, verranno</li>
      <li>VERB-Part: fatti, morti, aperte, giunti, fatte, giunte, perduti, sospesi, stretti, venuti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: gran, dolce, grande, primo, alto, buon, dolente, forte, lunga, maggior</li>
      <li>ADJ-Part: disdegnoso</li>
      <li>ADV: repente</li>
      <li>AUX: è, era, fu, se', fui, sia, son, avea, fosse, ha</li>
      <li>AUX-Fin: è, era, fu, se', fui, sia, son, avea, fosse, ha</li>
      <li>AUX-Part: stato, fossi, è, avesse, avessi, avuto, fossero, potuto, sono, stata</li>
      <li>DET: la, il, l', 'l, lo, un, mio, suo, sua, quel</li>
      <li>NOUN: maestro, duca, terra, mondo, loco, gente, parte, via, tempo, anima</li>
      <li>PRON: io, mi, tu, me, i', ti, lui, m', elli, quel</li>
      <li>PROPN: Tesoro</li>
      <li>VERB: disse, vidi, fa, vedi, fece, ha, rispuose, va, fé, avea</li>
      <li>VERB-Fin: disse, vidi, fa, vedi, fece, ha, rispuose, va, fé, avea</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, detto, fatta, morta, giunto, morto, venuto, accorto, stretta, vòlto</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, l', 'l, le, li, lo, i, ', l</li>
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
      <li>ADJ: altissimo, lenta, bassissimo, miglior, pessima, presto, superno, tristissima, verdissime</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maggior, mai, maggiori, bianca, fero, lungo, miglior, minor, peggior, peggiore</li>
      <li>ADV: più, men, meglio, giù, me', meno</li>
      <li>DET: più, troppa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: basso, lontan, oscuro</li>
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
      <li>AUX-Fin: era, avea, eran, fosse, fossi, eravam, erano, potea, dovea, eravamo</li>
      <li>VERB-Fin: avea, parea, facea, tenea, stava, andava, avean, pareva, piangea, vedea</li>
      <li>VERB-Part: possente, amante, bogliente, boglienti, casso, correnti, dolenti, godenti, lucenti, munta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: fu, fui, fuor, fummo, ebbe, furon, fosti, fu', fur, fuoro</li>
      <li>AUX-Part: stato, fossi, state, è, avesse, avessi, avuto, fossero, fossimo, potuto</li>
      <li>VERB-Fin: disse, vidi, fece, rispuose, fé, dissi, volse, diss', prese, cominciò</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, detto, morta, fatta, giunto, accorto, morto, stretta, venuto, vòlto</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: sarei, sarebbe, avrei, saria, averien, avrebber, avria, fora, poria, vorrebbe</li>
      <li>VERB: direi, avrebber, avrei, converrebbe, darebbe, darei, dicerei, dimesso, mosso, parlerei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: dei, de', sie</li>
      <li>VERB-Fin: di', fa, vedi, guarda, sappi, va, dì, pensa, aiuta, mira</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: è, era, fu, son, se', fui, avea, eran, fuor, ha</li>
      <li>VERB-Fin: disse, vidi, fa, fece, ha, rispuose, fé, avea, convien, dissi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sia, fosse, fossi, sien, avesse, avessi, fossero, sian, foss', sie</li>
      <li>VERB-Fin: vada, porti, abbia, sappi, vegna, venisse, basti, credi, faccia, fosse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: fia, sarai, sarà, saranno, potrai, saran, sarò, fier, avrà, potrete</li>
      <li>VERB-Fin: vedrai, dirò, farà, verrà, verranno, saprai, udirai, farò, troverai, verrò</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: fosse, fossi, avesse, avessi, fossero, foss', fosser, fossimo, potessi, volesse</li>
      <li>VERB-Fin: venisse, fosse, vedessi, avesse, credesse, dicesse, stesse, uscisser, assalisse, aunasse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: disdegnoso</li>
      <li>AUX: era, fu, fui, avea, eran, fuor, fummo, ebbe, eravam, furon</li>
      <li>AUX-Fin: era, fu, fui, avea, eran, fuor, fummo, ebbe, eravam, furon</li>
      <li>AUX-Part: stato, fossi, state, è, avesse, avessi, avuto, fossero, fossimo, potuto</li>
      <li>VERB: disse, vidi, fece, rispuose, fé, avea, dissi, volse, fatto, parea</li>
      <li>VERB-Fin: disse, vidi, fece, rispuose, fé, avea, dissi, volse, parea, diss'</li>
      <li>VERB-Inf: tradita</li>
      <li>VERB-Part: fatto, fatti, detto, giunto, venuto, caduto, dato, morto, udito, veduta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: è, son, se', esser, sia, ha, sono, può, siete, ho</li>
      <li>AUX-Fin: è, son, se', sia, ha, sono, può, siete, ho, dee</li>
      <li>AUX-Inf: esser, voler, essere, aver, avere, volere</li>
      <li>VERB: fa, vedi, ha, far, va, veder, convien, di', dir, par</li>
      <li>VERB-Fin: fa, vedi, ha, va, convien, di', par, fanno, guarda, hai</li>
      <li>VERB-Inf: veder, far, dir, parlar, venir, fare, dire, venire, aver, parlare</li>
      <li>VERB-Part: rimanente, vacante</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: avea, ha, può, ho, ebbe, dee, hai, hanno, puoi, potea</li>
      <li>AUX-Conv: avendo, possendo</li>
      <li>AUX-Fin: avea, ha, può, ho, ebbe, dee, hai, hanno, puoi, potea</li>
      <li>AUX-Inf: voler, aver, avere, volere</li>
      <li>AUX-Part: avesse, avessi, avuto, potuto</li>
      <li>VERB: disse, vidi, fa, vedi, fece, ha, rispuose, far, fé, avea</li>
      <li>VERB-Conv: dicendo, parlando, veggendo, gridando, piangendo, pensando, temendo, andando, credendo, dando</li>
      <li>VERB-Fin: disse, vidi, fa, vedi, fece, ha, rispuose, fé, avea, di'</li>
      <li>VERB-Inf: far, veder, dir, fare, dire, aver, vedere, saper, riguardar, tòrre</li>
      <li>VERB-Part: fatto, udito, detto, colto, dato, tratto, veduto, disposto, dolenti, levata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: Sieti, de', puote</li>
      <li>VERB: fatto, fatta, morta, ardito, detto, rotta, rotto, smarrito, stretta, tolto</li>
      <li>VERB-Fin: messo, accoglie, allegra, ammaestrato, aperta, apposto, aspetta, aunasse, bagna, bagnava</li>
      <li>VERB-Inf: veder, assolver, dire, frustato, lasciare, mozzo, recetto, seguir, tolto, urto</li>
      <li>VERB-Part: fatto, fatta, morta, ardito, detto, rotta, rotto, smarrito, stretta, accorto</li>
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
      <li>DET: il, la, l', 'l, le, li, lo, i, un, una</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADJ: quella, tal</li>
      <li>DET: quel, quella, questa, questo, quell', quelle, stesso, questi, quest', le</li>
      <li>PRON: ciò, quel, colui, quei, questi, quella, quelli, questa, questo, costui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: quanto, che, quanta, Qual, quali, quanti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: altro</li>
      <li>DET: altra, altro, altri, alcun, una, alcuna, un, molte, tanta, altre</li>
      <li>PRON: altro, un, altri, altrui, ciascun, alcun, altra, una, qual, uno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: che, qual, quant', quanto</li>
      <li>PRON: che, cui, qual, quai, quali</li>
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
      <li>DET: mio, suo, sua, lor, tua, mia, tuo, suoi, sue, miei</li>
      <li>PRON: io, mi, si, tu, me, i', ti, li, s', lui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: qual, quali, quante, Quale, quanti, quanto, quantunque, quanta</li>
      <li>PRON: che, ch', chi, cui, c', qual, cu', quali, quale, quai</li>
      <li>SCONJ: che</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutto, ogne, tutti, tutte, tutta, amendue, tutt', ambedue, ogn', ogni</li>
      <li>PRON: tutti, tutto, tutte, 'mbedue, ambedue, amendue, intrambi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: due, tre, mille, ambo, cento, sette, diece, quattro, cinque, sei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primo, secondo, prime, quarto, quinto, sesto, terzo, ottava, prima, primaio</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: mio, suo, sua, lor, tua, mia, tuo, suoi, sue, miei</li>
      <li>PRON: suo, suoi, lor, mia, nostro, si, sue, tuo, tuoi, vostri</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: si, s', mi, sé, se, ti, m', ci, me, t'</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: fui, son, era, avea, fossi, fummo, ho, eravam, sarei, sia</li>
      <li>AUX-Fin: fui, son, era, avea, fossi, fummo, ho, eravam, sia, fu'</li>
      <li>AUX-Part: stato, fossi, avessi, avuto, fossimo, sono</li>
      <li>PRON: io, mi, me, i', noi, m', ci, ne, quel, quei</li>
      <li>VERB: vidi, dissi, gridò, diss', venimmo, vid', credo, volsi, vo', cominciai</li>
      <li>VERB-Fin: vidi, dissi, gridò, diss', venimmo, vid', credo, volsi, vo', cominciai</li>
      <li>VERB-Part: detto, giunto, morto, udito, veduto, accorto, atteso, avuto, concetto, coperto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: se', siete, sarai, fosti, hai, puoi, vuo', dei, potrai, avete</li>
      <li>AUX-Fin: se', siete, sarai, fosti, hai, puoi, vuo', dei, potrai, avete</li>
      <li>AUX-Part: state</li>
      <li>PRON: tu, ti, te, voi, t', vi, tal, v', qual, ve</li>
      <li>VERB: vedi, va, di', fa, hai, sappi, vedrai, credi, guarda, sai</li>
      <li>VERB-Fin: vedi, va, di', fa, hai, sappi, vedrai, credi, guarda, sai</li>
      <li>VERB-Part: venuto, disposto, fatto, accorti, caduto, colto, giunte, giunti, giunto, morto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: è, fu, era, son, sia, eran, fosse, fuor, ha, avea</li>
      <li>AUX-Fin: è, fu, era, son, sia, eran, fosse, fuor, ha, avea</li>
      <li>AUX-Part: stato, è, avesse, fossero, potuto, stata, stati</li>
      <li>PRON: si, li, s', lui, elli, lo, sé, ei, el, 'l</li>
      <li>VERB: disse, fa, fece, ha, rispuose, fé, avea, convien, volse, par</li>
      <li>VERB-Fin: disse, fa, fece, ha, rispuose, fé, avea, convien, volse, par</li>
      <li>VERB-Part: fatto, dato, giunti, vòlto, caduto, colto, detto, feruto, giunto, mosso</li>
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
          <li>ADV: vi</li>
          <li>DET: suo</li>
          <li>PRON: mi, si, ti, li, s', ne, m', lo, ci, 'l</li>
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
          <li>X: pape, aleppe</li>
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
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: essere, avere, potere, dovere, volere, stare.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--PRON (12)</li>
      <li>VERB-Conv--NOUN (2)</li>
      <li>VERB-Conv--PRON (3)</li>
      <li>VERB-Fin--NOUN (715)</li>
      <li>VERB-Fin--PRON (1400)</li>
      <li>VERB-Inf--NOUN (37)</li>
      <li>VERB-Inf--PRON (38)</li>
      <li>VERB-Part--NOUN (57)</li>
      <li>VERB-Part--PRON (141)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (10)</li>
      <li>VERB--PRON (3)</li>
      <li>VERB-Conv--NOUN (51)</li>
      <li>VERB-Conv--PRON (15)</li>
      <li>VERB-Fin--NOUN (900)</li>
      <li>VERB-Fin--NOUN-ADP(di) (1)</li>
      <li>VERB-Fin--NOUN-ADP(in) (1)</li>
      <li>VERB-Fin--NOUN-ADP(senza) (1)</li>
      <li>VERB-Fin--PRON (757)</li>
      <li>VERB-Inf--NOUN (155)</li>
      <li>VERB-Inf--NOUN-ADP(di) (2)</li>
      <li>VERB-Inf--NOUN-ADP(senza) (1)</li>
      <li>VERB-Inf--PRON (73)</li>
      <li>VERB-Part--NOUN (59)</li>
      <li>VERB-Part--PRON (51)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (2)</li>
      <li>VERB-Conv--PRON (6)</li>
      <li>VERB-Fin--PRON (336)</li>
      <li>VERB-Fin--PRON-ADP(dietro) (1)</li>
      <li>VERB-Fin--PRON-ADP(dinanzi) (1)</li>
      <li>VERB-Inf--PRON (26)</li>
      <li>VERB-Part--PRON (45)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 246 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: volgere si, fare si, muovere si, partire si, andare se, levare si, gire se, rivolgere si, appressare s', fuggire si, togliere si, accorrere s', arrestare s', pentire si, sentire si, aggirare s', aggiungere s', appiccare s', battere si, convenire si, mettere si, tenere si, accendere s', accogliere s', accorgere m', accorgere si, andare te, aprire s', ascondere s', attuffare s', avventare s', convertire si, dileguare si, dismontare si, distendere si, fendere si, frangere si, gettare si, gire si, intoppare s', lagnare si, lasciare si, mirare si, parere si, percuotere si, porre si, restare si, ritrarre si, scemare si, stare si</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 35 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: fare si, chiamare si, bagnare si, vedere si, accogliere s', allegrare s', bramare si, chiudere si, confessare si, dare si, dire si, divallare si, gemere si, gire si, levare si, muovere si, obliare s', perdere si, piangere si, poggiare si, raccogliere si, riacquetare si, rompere si, scoccare si, scoprire si, seguire si, spandere si, stentare si, tacere si, torcere si, trangugiare si, trarre si, udire s', usare s', volgere si</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 98 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: volgere mi, fare mi, muovere mi, accorgere m', levare mi, partire mi, accostare m', levare ti, partire ti, recare ti, rimembrare ti, rivolgere mi, sentire mi, vedere mi, volgere ti, abbandonare m', acquattare t', adirare m', apparecchiare m', appigliare sé, appressare ci, aprire t', armare t', arrestare m', assedere m', assettare m', assidere m', attaccare m', attenere ti, bruciare mi, calare ti, cercare ti, chinare ti, condurre mi, confortare mi, congiungere ti, credere mi, crucciare ti, cuocere mi, dare mi, dilaccare mi, dipartire ci, discarnare mi, dolere mi, dolere ti, esaltare m', ficcare ti, fidare ti, folle mi, forbire ti</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: rimembrare, accostare</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 27 relation subtypes: <a>acl:relcl</a>, <a>advcl:cmp</a>, <a>advcl:pred</a>, <a>advcl:relcl</a>, <a>advmod:lmod</a>, <a>advmod:neg</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>ccomp:relcl</a>, <a>ccomp:reported</a>, <a>csubj:pass</a>, <a>csubj:relcl</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>flat:redup</a>, <a>nmod:lmod</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
