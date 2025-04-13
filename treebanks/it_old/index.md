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
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Claudia Corbetta, Marco Passarotti, Flavio Massimiliano Cecchini, Giovanni Moretti.

Repository: [UD_Italian-Old](https://github.com/UniversalDependencies/UD_Italian-Old)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_old215)<br />
Download all treebanks: [UD 2.15](/#download)

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



This treebank includes 3 419 sentences (122 038 syntactic words) and is a literary text (poetry). It is divided into three sections, known as Cantiche: Inferno, Purgatorio, and Paradiso. Specifically, Inferno includes 1 228 sentences and 41 368 syntactic words; Purgatorio consists of 1 174 sentences and 41 277 syntactic words; while Paradiso contains 1 017 sentences and 39 393 syntactic words.

The treebank is split into three subsets, `dev`, `test` and `train`, with approximate ratios of 10%, 10%, and 80%, respectively, for Inferno, Purgatorio, and Paradiso. These subsets are then merged into unique `dev`, `test` and `train` sets.

The distribution of Inferno (tokens: 41 368) with respect to the subsets is as follows:
* `train`: 1002 sentences (OldItalian_Dante_Inferno-1; OldItalian_Dante_Inferno-1002) - 33104 tokens
* `dev`: 107 sentences (OldItalian_Dante_Inferno-1003; OldItalian_Dante_Inferno-1109) - 4136 tokens
* `test`: 119 sentences (OldItalian_Dante_Inferno-1110; OldItalian_Dante_Inferno-1228) - 4128 tokens

The distribution of Purgatorio (tokens: 41 277) with respect to the subsets is as follows:
* `train`: 958 sentences (OldItalian_Dante_Purgatorio-1; OldItalian_Dante_Purgatorio-958) - 33031 tokens
* `dev`: 100 sentences (OldItalian_Dante_Purgatorio-959; OldItalian_Dante_Purgatorio-1058) - 4130 tokens
* `test`: 116 sentences (OldItalian_Dante_Purgatorio-1059; OldItalian_Dante_Purgatorio-1174) - 4116 tokens

The distribution of Paradiso (tokens: 39 393) with respect to the subsets is as follows:
* `train`: 814 sentences (OldItalian_Dante_Paradiso-1; OldItalian_Dante_Paradiso-814) - 31546 tokens
* `dev`: 101 sentences (OldItalian_Dante_Paradiso-815; OldItalian_Dante_Paradiso-915) - 3951 tokens
* `test`: 102 sentences (OldItalian_Dante_Paradiso-916; OldItalian_Dante_Paradiso-1017) - 3896 tokens

**!! Italian-Old treebank is still under revision to check for mistakes and inconsistencies throughout the annotation of the Cantiche; therefore, its structure is subject to change.**


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

[acl](it_old-dep-acl.html) – [acl:relcl](it_old-dep-acl-relcl.html) – [advcl](it_old-dep-advcl.html) – [advcl:cmp](it_old-dep-advcl-cmp.html) – [advcl:pred](it_old-dep-advcl-pred.html) – [advcl:relcl](it_old-dep-advcl-relcl.html) – [advmod](it_old-dep-advmod.html) – [advmod:lmod](it_old-dep-advmod-lmod.html) – [advmod:neg](it_old-dep-advmod-neg.html) – [advmod:tmod](it_old-dep-advmod-tmod.html) – [amod](it_old-dep-amod.html) – [appos](it_old-dep-appos.html) – [aux](it_old-dep-aux.html) – [aux:pass](it_old-dep-aux-pass.html) – [case](it_old-dep-case.html) – [cc](it_old-dep-cc.html) – [ccomp](it_old-dep-ccomp.html) – [ccomp:relcl](it_old-dep-ccomp-relcl.html) – [ccomp:reported](it_old-dep-ccomp-reported.html) – [conj](it_old-dep-conj.html) – [cop](it_old-dep-cop.html) – [csubj](it_old-dep-csubj.html) – [csubj:pass](it_old-dep-csubj-pass.html) – [csubj:relcl](it_old-dep-csubj-relcl.html) – [det](it_old-dep-det.html) – [det:poss](it_old-dep-det-poss.html) – [det:predet](it_old-dep-det-predet.html) – [discourse](it_old-dep-discourse.html) – [dislocated](it_old-dep-dislocated.html) – [expl](it_old-dep-expl.html) – [expl:impers](it_old-dep-expl-impers.html) – [expl:pass](it_old-dep-expl-pass.html) – [expl:pv](it_old-dep-expl-pv.html) – [fixed](it_old-dep-fixed.html) – [flat](it_old-dep-flat.html) – [flat:foreign](it_old-dep-flat-foreign.html) – [flat:name](it_old-dep-flat-name.html) – [flat:redup](it_old-dep-flat-redup.html) – [iobj](it_old-dep-iobj.html) – [mark](it_old-dep-mark.html) – [nmod](it_old-dep-nmod.html) – [nmod:lmod](it_old-dep-nmod-lmod.html) – [nmod:poss](it_old-dep-nmod-poss.html) – [nsubj](it_old-dep-nsubj.html) – [nsubj:outer](it_old-dep-nsubj-outer.html) – [nsubj:pass](it_old-dep-nsubj-pass.html) – [nummod](it_old-dep-nummod.html) – [obj](it_old-dep-obj.html) – [obl](it_old-dep-obl.html) – [obl:agent](it_old-dep-obl-agent.html) – [obl:arg](it_old-dep-obl-arg.html) – [obl:lmod](it_old-dep-obl-lmod.html) – [obl:tmod](it_old-dep-obl-tmod.html) – [orphan](it_old-dep-orphan.html) – [parataxis](it_old-dep-parataxis.html) – [punct](it_old-dep-punct.html) – [root](it_old-dep-root.html) – [vocative](it_old-dep-vocative.html) – [xcomp](it_old-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3419 sentences, 119060 tokens and 122038 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 19208 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 285 types of words that contain both letters and punctuation. Examples: l', ch', 'l, d', s', m', i', com', ond', t', 'n, se', n', quell', quand', c', diss', perch', v', vid', e', dov', quant', ver', un', ov', quest', di', inver', vuo', fu', sanz', 've, udi', fec', vo', senti', u', sovr', ell', cu', mentr', rispuos', altr', tutt', 'nferno, 'ntelletto, 'ntorno, de', ogn'</li>
</ul>

<ul>
<li>This corpus contains 2950 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 617 types of multi-word tokens. Examples: del, al, nel, dal, col, a', de', sen, nol, ne', ai, dimmi, meco, coi, co', farsi, seco, da', sul, teco, ten, fassi, ditemi, piùe, dallato, fatti, volgiti, fessi, ricorditi, volsimi, conviensi, dai, dissemi, fammi, fummi, parlarmi, puossi, vassi, vuolsi, Vedrassi, cen, conveniesi, dille, dilli, dinne, farmi, farne, femmi, giùe, gliel.</li>
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
<li>This corpus contains 94 lemmas tagged as pronouns (PRON): alcuno, altrettanto, altro, altrui, ambedue, ambo, assai, catuno, certo, che, chi, chiascheduno, chiunque, ci, ciascheduno, ciascuno, cio', ciò, ciò', codesto, colei, coloro, colui, costei, costoro, costui, cotale, cotanto, cui, desso, dove, egli, ella, elli, ello, entrambi, esse, esso, gli, i, ieu, il, io, la, le, lei, li, lo, loro, lui, me, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, nullo, ognuno, onde, ove, poco, proprio, quale, qualunque, quanto, quantunque, quello, questo, se, si, suo, sé, tale, tanto, te, ti, tu, tuo, tutte, tutto, ubi, uno, uomo, ve, vi, vicenda, voi, voialtri, vos, vostro</li>
</ul>

<ul>
<li>This corpus contains 58 lemmas tagged as determiners (DET): alcuno, alquanto, altro, altrui, ambedue, aquel, assai, certo, che, ciascuno, codesto, cotale, cotanto, cui, entrambi, esso, i, il, la, li, lo, loro, medesimo, meno, mio, molto, mon, nessuno, nostro, nullo, ogni, ognuno, parecchio, più, poco, proprio, qualche, quale, qualunque, quanto, quantunque, quello, questo, solo, stesso, suo, tale, tanto, troppo, tuo, tutta, tutti, tutto, un, uno, veruno, vostre, vostro</li>
</ul>

<ul>
<li>Out of the above, 41 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, altrui, ambedue, assai, certo, che, ciascuno, codesto, cotale, cotanto, cui, entrambi, esso, i, il, la, li, lo, loro, mio, molto, nessuno, nostro, nullo, ognuno, poco, proprio, quale, qualunque, quanto, quantunque, quello, questo, suo, tale, tanto, tuo, tutto, uno, vostro</li>
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
    <li>AUX: possendo, essendo, avendo</li>
    <li>VERB: dicendo, cantando, veggendo, parlando, piangendo, andando, guardando, gridando, venendo, pensando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: è, fu, era, son, fui, se', avea, ha, fosse, sia</li>
    <li>NOUN: luce</li>
    <li>VERB: disse, fa, vidi, vedi, ha, fece, va, fé, rispuose, convien</li>
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
    <li>VERB: veder, far, dir, fare, parlar, vedere, voler, aver, dire, andar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: disdegnoso</li>
    <li>AUX: stato, state, è, fosse, fossero, fossi, son, stata, potuto, stati</li>
    <li>VERB: fatto, fatta, tratto, detto, giunto, vòlto, messo, morta, venuto, volta</li>
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
      <li>ADJ: prima, bella, alta, santa, sola, divina, buona, umana, viva, lunga</li>
      <li>AUX: state, dee, stata</li>
      <li>AUX-Part: state, stata</li>
      <li>DET: la, l', le, sua, mia, una, quella, questa, tua, altra</li>
      <li>NOUN: terra, gente, parte, mente, donna, vita, parole, luce, anima, vista</li>
      <li>PRON: la, lei, quella, ella, le, una, l', essa, questa, altra</li>
      <li>VERB: fatta, veduta, morta, volta, stretta, aperta, aperte, rotta, partita, sciolta</li>
      <li>VERB-Inf: cessar</li>
      <li>VERB-Part: fatta, veduta, morta, volta, stretta, aperta, aperte, rotta, partita, sciolta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: alto, primo, buon, dolce, etterno, gran, santo, secondo, novo, vivo</li>
      <li>ADJ-Part: disdegnoso</li>
      <li>ADV: poco, ben, tosto, 'ncontro, molto, quanto, secondo, sùbito, tanto</li>
      <li>AUX-Part: stato, è, fosse, fossero, fossi, son, potuto, stata, stati, voluto</li>
      <li>DET: il, 'l, l', li, lo, un, i, mio, suo, quel</li>
      <li>NOUN: occhi, mondo, maestro, ciel, viso, loco, duca, amor, lume, tempo</li>
      <li>PRON: lui, quel, li, elli, lo, colui, altro, un, el, quei</li>
      <li>PROPN: Tesoro</li>
      <li>VERB: fatto, tratto, detto, giunto, vòlto, messo, venuto, fatti, morti, chiuso</li>
      <li>VERB-Fin: ricolto</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, tratto, detto, giunto, vòlto, messo, venuto, fatti, morti, chiuso</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: gravi, dolci, gran, diverse, alte, diversi, sante, alti, dolenti, grandi</li>
      <li>AUX: son, eran, fuor, sono, furon, siete, fummo, fur, eravam, hanno</li>
      <li>AUX-Fin: son, eran, fuor, sono, furon, siete, fummo, fur, eravam, hanno</li>
      <li>AUX-Part: state, fossimo</li>
      <li>DET: le, li, i, il, l', sue, miei, ', suoi, tutti</li>
      <li>NOUN: occhi, parole, cose, anime, piedi, volte, ali, genti, passi, ombre</li>
      <li>PRON: noi, voi, ci, li, ne, vi, lor, altri, tutti, loro</li>
      <li>VERB: fanno, hanno, vanno, venimmo, stanno, fatti, fan, morti, parean, andavam</li>
      <li>VERB-Fin: fanno, hanno, vanno, venimmo, stanno, fan, parean, andavam, fenno, fer</li>
      <li>VERB-Inf: saliri, soffriri</li>
      <li>VERB-Part: fatti, morti, giunti, vòlti, aperte, nati, sparte, accesi, eletti, fatte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: gran, dolce, alto, primo, prima, buon, grande, bella, maggior, alta</li>
      <li>ADJ-Part: disdegnoso</li>
      <li>ADV: poco, ben, repente, tosto, 'ncontro, molto, quanto, secondo, sùbito, tanto</li>
      <li>AUX: è, fu, era, fui, se', avea, fosse, ha, son, sia</li>
      <li>AUX-Fin: è, fu, era, fui, se', avea, ha, fosse, son, sia</li>
      <li>AUX-Part: stato, è, fosse, fossero, fossi, son, stata, potuto, stati, voluto</li>
      <li>DET: il, la, l', 'l, lo, un, mio, sua, suo, mia</li>
      <li>NOUN: mondo, terra, gente, maestro, parte, ciel, mente, viso, loco, duca</li>
      <li>NOUN-Fin: luce</li>
      <li>PRON: io, mi, lui, tu, quel, me, lo, elli, ti, i'</li>
      <li>PROPN: Tesoro</li>
      <li>VERB: disse, fa, vidi, vedi, ha, fece, va, fé, fatto, rispuose</li>
      <li>VERB-Fin: disse, fa, vidi, vedi, ha, fece, va, fé, rispuose, convien</li>
      <li>VERB-Inf: andare, frustato</li>
      <li>VERB-Part: fatto, fatta, tratto, detto, giunto, vòlto, messo, morta, venuto, volta</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, l', 'l, li, lo, i, le, ', l</li>
      <li>PRON: l', le</li>
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
      <li>ADJ: altissimo, dolcissimo, lenta, lento, alto, bassissimo, chiarissima, famoso, giustissimo, illustri</li>
      <li>DET: poco</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maggior, alto, dolce, tardo, bella, cara, maggiori, grande, grata, mai</li>
      <li>ADV: più, men, tosto, meglio, oltre, sù, avanti, forte, giù, mei</li>
      <li>DET: men, troppa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: basso, bella, alte, alto, cara, caro, dia, lontan, lontana, luculenta</li>
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
      <li>AUX-Fin: era, avea, fosse, eran, fossi, potea, eravam, fosser, avesse, erano</li>
      <li>VERB-Fin: parea, avea, facea, dicea, vedea, stava, pareva, andava, venìa, parean</li>
      <li>VERB-Part: ardente, lucente, distante, parvente, possente, lucenti, seguente, simigliante, ardenti, bogliente</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: fu, fui, fuor, fu', furon, fummo, fue, ebbe, fur, fosti</li>
      <li>AUX-Part: stato, state, è, fosse, fossero, fossi, son, stata, potuto, stati</li>
      <li>VERB-Fin: disse, vidi, fece, fé, rispuose, cominciò, diss', vid', volse, dissi</li>
      <li>VERB-Inf: frustato</li>
      <li>VERB-Part: fatto, fatta, detto, giunto, tratto, volta, morta, morti, venuto, vòlto</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: sarebbe, fora, saria, sarei, avria, avrei, poria, avrebbe, dovria, avresti</li>
      <li>VERB: parrebbe, saprei, avria, direi, avrebbe, crederebbe, farebbe, faria, sazio, starebbe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: siate, dei, sie, de'</li>
      <li>VERB-Fin: vedi, fa, dì, dire, di', guarda, va, pensa, sappi, vieni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: è, fu, era, son, fui, se', avea, ha, eran, sono</li>
      <li>NOUN-Fin: luce</li>
      <li>VERB-Fin: disse, vidi, fa, ha, fece, fé, rispuose, va, convien, cominciò</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: fosse, sia, fossi, fosser, avesse, possa, sien, sie, fossero, avessi</li>
      <li>VERB-Fin: vada, porti, basti, vegna, paia, veggia, abbia, avesse, creda, faccia</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: fia, sarà, sarai, saranno, fier, sarò, saran, potrai, potrà, essere</li>
      <li>VERB-Fin: vedrai, dirò, farà, farò, verrà, udirai, vederai, parrà, saprai, troverai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: fosse, fossi, fosser, avesse, fossero, avessi, volesse, potesse, dovessi, foss'</li>
      <li>VERB-Fin: avesse, vedessi, dicesse, facesse, fosse, venisse, avessi, fesse, andasse, ardesse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: disdegnoso</li>
      <li>AUX: fu, era, fui, avea, eran, fuor, fu', furon, fummo, fue</li>
      <li>AUX-Fin: fu, era, fui, avea, eran, fuor, fu', furon, fummo, fue</li>
      <li>AUX-Inf: avere</li>
      <li>AUX-Part: stato, è, state, fosse, fossero, fossi, son, stata, potuto, stati</li>
      <li>VERB: disse, vidi, fece, fé, rispuose, cominciò, fatto, parea, diss', avea</li>
      <li>VERB-Fin: disse, vidi, fece, fé, rispuose, cominciò, parea, diss', avea, vid'</li>
      <li>VERB-Inf: fatta, fatto, inteso, tradita, usata, visto</li>
      <li>VERB-Part: fatto, tratto, detto, fatti, venuto, giunto, posto, messo, morto, veduto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: è, son, esser, se', ha, sia, sono, può, hai, puoi</li>
      <li>AUX-Fin: è, son, se', ha, sia, sono, può, hai, puoi, puote</li>
      <li>AUX-Inf: esser, essere, aver, avere, voler, poter, potere, volere</li>
      <li>NOUN-Fin: luce</li>
      <li>VERB: fa, veder, vedi, ha, va, far, fare, dir, dire, convien</li>
      <li>VERB-Fin: fa, vedi, ha, va, convien, par, fanno, vien, vede, dico</li>
      <li>VERB-Inf: veder, far, dir, fare, parlar, vedere, voler, aver, dire, andar</li>
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
      <li>AUX: avea, ha, può, hai, puoi, puote, ho, ebbe, potea, hanno</li>
      <li>AUX-Conv: possendo, essendo, avendo</li>
      <li>AUX-Fin: avea, ha, può, hai, puoi, puote, ho, ebbe, potea, hanno</li>
      <li>AUX-Inf: aver, avere, voler, poter, potere, volere</li>
      <li>AUX-Part: potuto, avesse, avessi, voluto</li>
      <li>VERB: disse, fa, vidi, vedi, veder, ha, fare, fece, fé, far</li>
      <li>VERB-Conv: dicendo, cantando, parlando, piangendo, andando, guardando, veggendo, gridando, venendo, pensando</li>
      <li>VERB-Fin: disse, fa, vidi, vedi, ha, fece, fé, rispuose, cominciò, diss'</li>
      <li>VERB-Inf: veder, far, dir, fare, vedere, voler, aver, dire, saper, udir</li>
      <li>VERB-Part: fatto, tratto, ardente, detto, udito, veduto, lucente, visto, fatti, posto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: Sie, de', puote</li>
      <li>AUX-Part: state, stato</li>
      <li>VERB: fatto, fatta, detto, aperta, messo, volta, chiuso, manifesto, morta, morti</li>
      <li>VERB-Fin: detto, vede, aspetta, vedere, creata, dice, messo, vedrà, vinto, acquistò</li>
      <li>VERB-Inf: veder, dire, intender, render, agguagliar, ascosa, assolver, assomigliare, aver, battuta</li>
      <li>VERB-Part: fatto, fatta, aperta, volta, chiuso, manifesto, morta, morti, veduta, rotto</li>
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
      <li>DET: il, la, l', 'l, li, lo, i, le, un, una</li>
      <li>PRON: l', le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADJ: quella</li>
      <li>DET: le, quel, quella, questa, questo, quell', quelle, queste, questi, quello</li>
      <li>PRON: ciò, quel, colui, quella, quei, questo, questi, questa, quelli, costui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: che, quanta, quanto, quali, qual, quante, quanti, quale</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: altro</li>
      <li>ADV: poco, alquanto, molto, tanto</li>
      <li>DET: altra, altro, ogne, alcun, tutto, tutte, altri, altrui, tutti, altre</li>
      <li>PRON: altro, altri, un, ciascun, altrui, qual, altra, una, alcun, uno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: qual, che, quai, quanto, quale, quali, quant', quanta, quanti</li>
      <li>PRON: che, qual, cui, quai, quant', Quale, quali</li>
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
      <li>DET: mio, sua, suo, mia, lor, tua, tuo, sue, miei, suoi</li>
      <li>PRON: si, io, mi, tu, s', ti, me, m', noi, lui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: qual, quale, quali, quante, quanto, quanta, cui, quanti, quantunque, quai</li>
      <li>PRON: che, ch', chi, cui, ond', qual, c', quale, dove, cu'</li>
      <li>SCONJ: che, ch'</li>
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
      <li>ADJ: una</li>
      <li>NUM: due, tre, mille, sette, quattro, ambo, cento, cinque, diece, sei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primo, prima, secondo, pria, terzo, prime, primi, quarto, seconda, quinta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: mio, sua, suo, mia, lor, tua, tuo, sue, miei, suoi</li>
      <li>PRON: io, mi, tu, ti, me, m', te, i', sé, t'</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: si, s', mi, sé, ti, se, m', t', ci, me</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: fui, son, era, ho, fu', fummo, fossi, avea, sono, eravam</li>
      <li>AUX-Fin: fui, son, era, ho, fu', fummo, avea, fossi, eravam, sono</li>
      <li>AUX-Part: stato, fossi, son, avessi, fossimo, sono, stati</li>
      <li>PRON: io, mi, me, m', noi, i', ci, ne, quel, n'</li>
      <li>VERB: vidi, vid', diss', dissi, dico, credo, veggio, volsi, so, gridò</li>
      <li>VERB-Fin: vidi, vid', diss', dissi, dico, credo, veggio, volsi, so, gridò</li>
      <li>VERB-Part: morto, accorto, detto, giunto, messo, veduto, venuto, visto, atteso, avuto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: se', hai, puoi, siete, fosti, sarai, vuo', avete, dei, siate</li>
      <li>AUX-Fin: se', hai, puoi, siete, fosti, sarai, vuo', avete, dei, siate</li>
      <li>AUX-Part: potuto, state</li>
      <li>PRON: tu, ti, te, voi, t', vi, tal, v', tale, ne</li>
      <li>VERB: vedi, va, fa, vedrai, credi, di', sai, dì, hai, dire</li>
      <li>VERB-Fin: vedi, va, fa, vedrai, credi, di', sai, dì, hai, dire</li>
      <li>VERB-Part: venuto, fatto, tratto, veduto, assiso, disposto, giunto, riposato, accorti, caduto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: è, fu, era, son, ha, fosse, avea, eran, sia, fia</li>
      <li>AUX-Fin: è, fu, era, son, ha, fosse, avea, eran, sia, fia</li>
      <li>AUX-Part: stato, è, fosse, fossero, stata, state, avesse, potuto, stati, voluto</li>
      <li>DET: esso</li>
      <li>NOUN-Fin: luce</li>
      <li>PRON: si, s', lui, li, sé, elli, lo, la, lei, ella</li>
      <li>VERB: disse, fa, ha, fece, fé, rispuose, convien, cominciò, par, parea</li>
      <li>VERB-Fin: disse, fa, ha, fece, fé, rispuose, convien, cominciò, par, parea</li>
      <li>VERB-Part: fatto, tratto, detto, tolto, giunto, posto, rimaso, vòlto, dato, mosso</li>
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
          <li>ADV: vi, ci, ne, li, n'</li>
          <li>DET: suo</li>
          <li>PRON: si, mi, s', ti, m', ne, li, lo, la, ci</li>
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
          <li>X: Beati, Ave, Dei, te, Deus, et, in, me, necesse, non</li>
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
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: essere, avere, potere, dovere, volere, stare, venire.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (26)</li>
      <li>VERB--PRON (37)</li>
      <li>VERB-Conv--NOUN (4)</li>
      <li>VERB-Conv--PRON (9)</li>
      <li>VERB-Fin--NOUN (2271)</li>
      <li>VERB-Fin--NOUN-ADP(con) (1)</li>
      <li>VERB-Fin--NOUN-ADP(di) (1)</li>
      <li>VERB-Fin--PRON (3879)</li>
      <li>VERB-Fin--PRON-ADP(a) (3)</li>
      <li>VERB-Fin--PRON-ADP(di) (2)</li>
      <li>VERB-Inf--NOUN (133)</li>
      <li>VERB-Inf--PRON (116)</li>
      <li>VERB-Part--NOUN (185)</li>
      <li>VERB-Part--PRON (333)</li>
      <li>VERB-Part--PRON-ADP(a) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (42)</li>
      <li>VERB--PRON (24)</li>
      <li>VERB-Conv--NOUN (168)</li>
      <li>VERB-Conv--NOUN-ADP(di) (1)</li>
      <li>VERB-Conv--PRON (45)</li>
      <li>VERB-Fin--NOUN (2506)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(da) (1)</li>
      <li>VERB-Fin--NOUN-ADP(di) (19)</li>
      <li>VERB-Fin--NOUN-ADP(in) (3)</li>
      <li>VERB-Fin--NOUN-ADP(in)-ADP(su) (1)</li>
      <li>VERB-Fin--NOUN-ADP(senza) (1)</li>
      <li>VERB-Fin--PRON (2138)</li>
      <li>VERB-Fin--PRON-ADP(con) (1)</li>
      <li>VERB-Fin--PRON-ADP(di) (4)</li>
      <li>VERB-Inf--NOUN (464)</li>
      <li>VERB-Inf--NOUN-ADP(di) (4)</li>
      <li>VERB-Inf--NOUN-ADP(senza) (1)</li>
      <li>VERB-Inf--PRON (228)</li>
      <li>VERB-Inf--PRON-ADP(di) (1)</li>
      <li>VERB-Part--NOUN (156)</li>
      <li>VERB-Part--PRON (140)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (7)</li>
      <li>VERB--PRON-ADP(a) (1)</li>
      <li>VERB-Conv--PRON (11)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--PRON (877)</li>
      <li>VERB-Fin--PRON-ADP(dietro) (1)</li>
      <li>VERB-Fin--PRON-ADP(dinanzi) (1)</li>
      <li>VERB-Fin--PRON-ADP(presso) (1)</li>
      <li>VERB-Inf--PRON (77)</li>
      <li>VERB-Inf--PRON-ADP(anzi) (1)</li>
      <li>VERB-Part--PRON (113)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 617 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: fare si, muovere si, volgere si, partire si, andare se, levare si, mostrare si, mettere si, stare si, accendere s', gire se, tacere si, girare si, rivolgere si, affiggere s', arrestare s', appressare s', aprire s', accorgere m', accorrere s', nascondere si, sentire si, dipartire si, distendere si, pentire si, torcere si, appuntare s', convenire si, fuggire si, quietare si, stendere si, togliere si, trarre si, trovare si, venire se, accogliere s', accorgere s', andare m', gire si, spaziare si, tenere si, volgere mi, abbandonare s', accostare s', andare te, ascondere s', avvivare s', battere si, cambiare si, celare si</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 97 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: fare si, vedere si, chiamare si, dire si, raccogliere si, nomare si, accogliere s', bagnare si, intendere s', parere si, perdere si, piangere si, tacere si, trarre si, adempiere s', adonare s', allegrare s', appellare s', ascoltare s', aspettare s', assolvere si, bastare si, bere si, bramare si, cancellare si, cantare si, cavare si, chiavare si, chiudere si, compartire si, confessare si, confondere si, consentire si, conservare si, contare si, convertire si, correre si, dare si, dichiarare si, disascondere si, divallare si, fugare si, gemere si, gire si, gridare si, indurre s', inghirlandare s', iniziare s', leggere si, levare si</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 225 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: volgere mi, fare mi, rivolgere mi, levare mi, muovere mi, meravigliare ti, vedere mi, volgere ti, fare ti, levare ti, partire mi, rendere mi, accorgere m', gettare mi, girare sé, rivolgere ti, sentire mi, trarre mi, volgere ci, accostare m', apparecchiare m', appressare sé, armare m', arrestare t', dare mi, dolere mi, mettere mi, misurare sé, partire ti, privare sé, recare ti, riconoscere sé, ricordare ti, rimanere ti, rimembrare ti, ritrarre mi, rivolgere sé, scuotere mi, solvere ti, tacere mi, tenere ti, trarre ci, trovare mi, vedere sé, Lia mi, abbagliare t', abbandonare m', accorgere te, accorrere m', accostare mi</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: arrestare, prestare</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 28 relation subtypes: <a>acl:relcl</a>, <a>advcl:cmp</a>, <a>advcl:pred</a>, <a>advcl:relcl</a>, <a>advmod:lmod</a>, <a>advmod:neg</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>ccomp:relcl</a>, <a>ccomp:reported</a>, <a>csubj:pass</a>, <a>csubj:relcl</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>flat:redup</a>, <a>nmod:lmod</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
