---
layout: base
title:  'UD_Old_Occitan-CorAG'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Old Occitan CorAG

Language: [Old Occitan](/pro/index.html) (code: `pro`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Barbara Francioni, Natasha Romanova, Rayan Ziane, Caroline Calvet, Khensa Daoudi, Pierre Larrivée.

Repository: [UD_Old_Occitan-CorAG](https://github.com/UniversalDependencies/UD_Old_Occitan-CorAG)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpro_corag219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: legal

Questions, comments?
General annotation questions (either Old Occitan-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Old_Occitan-CorAG/issues).
If you want to collaborate, please contact [natalia&nbsp;•&nbsp;romanova&nbsp;(æt)&nbsp;unicaen&nbsp;•&nbsp;fr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description
UD_Old_Occitan-CorAG (Corpus de l'Ancien Gascon) is a corpus of medieval and early modern legal texts in Gascon, a variety of Old Occitan. The texts were digitized from existing editions and subsequently manually annotated in Universal Dependencies (PoS, functions and some morphological features).



In November 2026, CorAG corpus contains six medieval texts and one sixteenth-century text:


| Source | Train (sent) | Train (tok) | Dev (sent) | Dev (tok) | Test (sent) | Test (tok) | Total (sent) | Total (tok) |
|--------|--------------|-------------|------------|-----------|-------------|------------|--------------|-------------|
| 1214-1342_Deux | 257 | 9,020 | 30 | 1,017 | 56 | 1,595 | 343 | 11,632 |
| 1251_Bagn | 58 | 2,317 | 8 | 270 | 12 | 435 | 78 | 3,022 |
| 1260_Bagn | 25 | 1,217 | 4 | 161 | 4 | 282 | 33 | 1,660 |
| 1270_Orthez | 26 | 976 | 3 | 135 | 5 | 229 | 34 | 1,340 |
| 1278_Herr | 39 | 1,337 | 7 | 182 | 7 | 263 | 53 | 1,782 |
| 1460_Bearn | 606 | 20,045 | 52 | 2,306 | 95 | 3,603 | 753 | 25,954 |
| 1564_Stil | 600 | 21,419 | 41 | 2,400 | 60 | 3,789 | 701 | 27,608 |
| Total | 1611 | 56,331 | 145 | 6,471 | 239 | 10,196 | 1995 | 72,998 |

| Split | Sentences | Tokens | % (tokens) |
|-------|-----------|--------|------------|
| train | 1,611 | 56,331 | 77.2% |
| dev | 145 | 6,471 | 8.9% |
| test | 239 | 10,196 | 14.0% |
| total | 1,995 | 72,998 | 100.0% |

The split was created using scripts that can be consulted [here](https://github.com/Corpus-Diachroniques-CRISCO/CorAG_tools).

## Acknowledgments
The corpus is part of Professor Pierre Larrivée's (University of Caen) [Senior membership project](https://www.iufrance.fr/les-membres-de-liuf/membre/2346-pierre-larrivee.html) with the Institut Universitaire de France (2022-2027).

Manual correction of the automatic annotation of 1214-1342_Deux, 1251_Bagn, 1260_Bagn, 1270_Orthez, 1278_Herr and 1460_Bearn was performed by [Barbara Francioni](https://cv.hal.science/barbara-francioni) with the help from [Natasha Romanova](https://cv.hal.science/natasha-romanova) and [Rayan Ziane](https://cv.hal.science/rayan-ziane). Correction of 1564_Stil was done by [Caroline Calvet](https://cv.hal.science/caroline-calvet) and [Barbara Francioni](https://cv.hal.science/barbara-francioni) with the help from [Natasha Romanova](https://cv.hal.science/natasha-romanova).

Technical support by [Rayan Ziane](https://cv.hal.science/rayan-ziane) and Khensa Daoudi. Digitization by Christelle Violette. Project coordination by [Natasha Romanova](https://cv.hal.science/natasha-romanova).

We thank Professor Martin Glessgen and his team at the University of Zurich (authors of the online resource [Documents linguistiques galloromans](https://gallrom.linguistik.uzh.ch/#/) for providing us with their editions of the thirteenth-century texts included in the corpus.

The version of the treebank from November 2025 can also be consulted and queried via the CRISCO Lab (University of Caen) [TXM portal](https://txm-crisco.huma-num.fr/txm/) where 1240-1314_Deux and 1460_Bearn are also available consultation as a digital edition (Larrivée P. & Francioni B. (eds.) 2026. CorAG Corpus, v. 1.2 (EA 4255). Caen: CRISCO).

We thank the members of the Modern Occitan [Tolosa Treebank](https://github.com/UniversalDependencies/UD_Occitan-TTB) for their help and advice in the early stages of the annotation process.

## References
To cite the corpus, please refer to:
* Romanova, Natasha, Ziane, Rayan & Francioni, Barbara, 2025. « Adaptation of models for parsing of Old Gascon ». _Proceedings of Journées scientifiques du réseau thématique LIFT2 linguistique informatique, formelle et de terrain_. 16-17 October 2025, Paris. URL: https://lift2-2025.sciencesconf.org/667164 (8pp.)

See also:
* Daoudi, Khensa, Dehouck, Mathieu, Romanova, Natasha & Ziane, Rayan, 2025. « Explicit Edge Length Coding to Improve Long Sentence Parsing Performance ». _Proceedings of the First Workshops on Advancing NLP for Low-Resource Languages_. 13 September 2025, Varna, Bulgaria. URL: https://acl-bg.org/proceedings/2025/LowResNLP%202025/index.html (pp. 102-110)



# Statistics of UD Old Occitan CorAG

## POS Tags

[ADJ](pro_corag-pos-ADJ.html) – [ADP](pro_corag-pos-ADP.html) – [ADV](pro_corag-pos-ADV.html) – [AUX](pro_corag-pos-AUX.html) – [CCONJ](pro_corag-pos-CCONJ.html) – [DET](pro_corag-pos-DET.html) – [NOUN](pro_corag-pos-NOUN.html) – [NUM](pro_corag-pos-NUM.html) – [PART](pro_corag-pos-PART.html) – [PRON](pro_corag-pos-PRON.html) – [PROPN](pro_corag-pos-PROPN.html) – [PUNCT](pro_corag-pos-PUNCT.html) – [SCONJ](pro_corag-pos-SCONJ.html) – [VERB](pro_corag-pos-VERB.html)

## Features

[ExtPos](pro_corag-feat-ExtPos.html) – [Gender](pro_corag-feat-Gender.html) – [Number](pro_corag-feat-Number.html) – [Person](pro_corag-feat-Person.html) – [Polarity](pro_corag-feat-Polarity.html) – [Poss](pro_corag-feat-Poss.html) – [PronType](pro_corag-feat-PronType.html) – [Reflex](pro_corag-feat-Reflex.html) – [Tense](pro_corag-feat-Tense.html) – [VerbForm](pro_corag-feat-VerbForm.html) – [Voice](pro_corag-feat-Voice.html)

## Relations

[acl](pro_corag-dep-acl.html) – [acl:relcl](pro_corag-dep-acl-relcl.html) – [advcl](pro_corag-dep-advcl.html) – [advmod](pro_corag-dep-advmod.html) – [amod](pro_corag-dep-amod.html) – [appos](pro_corag-dep-appos.html) – [aux](pro_corag-dep-aux.html) – [aux:pass](pro_corag-dep-aux-pass.html) – [case](pro_corag-dep-case.html) – [cc](pro_corag-dep-cc.html) – [ccomp](pro_corag-dep-ccomp.html) – [conj](pro_corag-dep-conj.html) – [cop](pro_corag-dep-cop.html) – [csubj](pro_corag-dep-csubj.html) – [det](pro_corag-dep-det.html) – [discourse](pro_corag-dep-discourse.html) – [discourse:enunc](pro_corag-dep-discourse-enunc.html) – [dislocated](pro_corag-dep-dislocated.html) – [expl](pro_corag-dep-expl.html) – [fixed](pro_corag-dep-fixed.html) – [flat](pro_corag-dep-flat.html) – [iobj](pro_corag-dep-iobj.html) – [mark](pro_corag-dep-mark.html) – [nmod](pro_corag-dep-nmod.html) – [nsubj](pro_corag-dep-nsubj.html) – [nummod](pro_corag-dep-nummod.html) – [obj](pro_corag-dep-obj.html) – [obl](pro_corag-dep-obl.html) – [orphan](pro_corag-dep-orphan.html) – [parataxis](pro_corag-dep-parataxis.html) – [punct](pro_corag-dep-punct.html) – [root](pro_corag-dep-root.html) – [xcomp](pro_corag-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1995 sentences, 70995 tokens and 72998 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4978 tokens (7%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 347 types of words that contain both letters and punctuation. Examples: de-, -lo, a-, l', -los, d', que-, s', e-, -lodit, n', d’, -losdits, no-, ss., -n, -s, -u, -us, .vi., l’, -la, Entre-dos-Mars, en-, P., si-, .LXVI., &c., -en, -m, .i., .v., .xx., -loquoal, B., -lodeyt, Arn., W., lo-, qui-, qu', -que, -si, .XXX., .iii., .x., -quere, -queres, .XL., -Arnaut</li>
</ul>

<ul>
<li>This corpus contains 2003 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 227 types of multi-word tokens. Examples: deu, au, deus, del, dels, aux, aus, que-ls, deudit, e-ls, deusdits, als, ausdits, que-n, audit, que-u, no-s, al, e-l, lo-n, que-l, que-us, dequeres, de-la, dequere, e-si, no-l, no-n, auquoal, dequets, deudeyt, que-s, a-ffase, a-la, dequeg, dequet, deuquoal, deusquoaux, e-nos, e-u, en-la, nou, per-abenture, ausquaus, e-la, eus, lo, pe-us, que-m, qui-ls.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): -que, qe, que, que-</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: es, sera, seran, sie, son, fo, aura, sien, será, ere</li>
    <li>VERB: deu, es, pot, ha, ordonnam, fasse, judya, fe, a, ditz</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: esser, ester, haber, estar, aver, aber, estre, estâr, avere, eser</li>
    <li>VERB: far, estar, dar, aver, probar, pagar, prener, fár, bailhar, jurar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: sobredeyt, sobredeytas, dits, sobredeyta, sobredeytz, sobredeyts, avantditz, degude, quitis, dit</li>
    <li>AUX: estat, estant, estade, estats, estades, estad, estada, estadas, estan, estatz</li>
    <li>VERB: feyt, feyte, judyat, establit, tengut, passat, feytes, ordonnat, appuntat, dat</li>
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
      <li>ADJ-Part: sobredeytas, sobredeyta, degude, degudas, supplicade, susdites, condamnade, dite, irade, iudyade</li>
      <li>AUX-Part: estade, estades, estada, estadas</li>
      <li>DET: augune</li>
      <li>PRON: la, las, aqueres, aquere, aqueras, ere, -quere, -queres, acquere, questas</li>
      <li>VERB-Fin: mande</li>
      <li>VERB-Part: feyte, feytes, feyta, passade, recebudes, declarade, dade, bailhade, Conegude, bailhades</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ-Part: sobredeyt, dits, sobredeytz, sobredeyts, avantditz, quitis, dit, amat, amatz, deputat</li>
      <li>AUX-Part: estat, estant, estats, estad, estades, estan, estatz, estàt</li>
      <li>DET: augun</li>
      <li>PRON: lo, los, luy, lor, -los, hom, asso, ac, eg, aqueg</li>
      <li>VERB-Fin: audit, deu, restituit</li>
      <li>VERB-Part: feyt, judyat, establit, tengut, passat, ordonnat, appuntat, dat, autreyat, bailhat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: so, ag, ço, ac, -ço, o, -quero, -quet, acquet, res</li>
      <li>VERB-Part: Notum, Actum</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ-Part: sobredeytas, dits, sobredeytz, sobredeyts, avantditz, degudas, susdites, amatz, ditz, pleyteyantz</li>
      <li>AUX-Fin: seran, son, sien, an, auran, avem, sian, fossen, ayen, eren</li>
      <li>AUX-Part: estats, estades, estadas, estatz</li>
      <li>PRON: los, nos, lor, -los, autres, vos, las, edz, aqueres, -us</li>
      <li>VERB-Fin: ordonnam, volem, dam, autreiam, mandam, son, deben, deven, faran, devem</li>
      <li>VERB-Part: feytes, passats, tenguts, recebudes, tienguts, condamnats, estatz, recebuts, admetuts, bailhades</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ-Part: sobredeyt, sobredeyta, degude, quitis, dit, supplicade, amat, condamnade, deputat, dite</li>
      <li>AUX-Fin: es, sera, sie, fo, aura, será, ere, a, ave, serà</li>
      <li>AUX-Part: estat, estant, estade, estad, estada, estan, estàt</li>
      <li>DET: augun, augune</li>
      <li>PRON: lo, autre, so, luy, l', hom, ac, asso, la, eg</li>
      <li>VERB-Fin: deu, es, pot, ha, fasse, judya, fe, a, ditz, poeyra</li>
      <li>VERB-Part: feyt, feyte, judyat, establit, tengut, passat, ordonnat, appuntat, dat, autreyat</li>
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
      <li>ADJ: nulle</li>
      <li>ADP: sens, senhs, sentz, ses, chens, senes</li>
      <li>ADV: no, no-, non, que, gayres, mes, -no, augunement, mais, plus</li>
      <li>CCONJ: ni, ny, ne, ni-, ne-</li>
      <li>DET: nulh, nulhe, aucuna, nulhs, null, aucun, degune, augune, degun, nulha</li>
      <li>PRON: res, negun, augun, augune, degun, aucun, augunes, nulhs, re</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>




<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>ADJ-Part: iuratory, decisory, defendaduyra, fasedeyra, fasedor, frustratoris, habeduyra, impetrante, juraduyra, sequideyra</li>
      <li>VERB-Part: applicadors, MISsoris, anadurs, applicadore, applicadores, arbitradore, aveniduy, comparidour, comptador, comptadors</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: sobredeyt, sobredeytas, dits, sobredeyta, sobredeytz, sobredeyts, avantditz, degude, quitis, dit</li>
      <li>AUX-Part: estat, estade, estats, estades, estad, estada, estadas, estatz, estàt</li>
      <li>VERB-Part: feyt, feyte, judyat, establit, tengut, passat, feytes, ordonnat, appuntat, dat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: pleyteyantz, alugantz, cedents, citant, comparent, comparentes, comparents, domandante, enseguens, estan</li>
      <li>AUX-Part: estant, estan</li>
      <li>VERB-Part: estan, disen, fasen, seguin, fazen, haben, contenent, declaran, disent, reffondin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: sobredeyt, sobredeytas, dits, sobredeyta, sobredeytz, sobredeyts, avantditz, quitis, dit, degudas</li>
      <li>VERB-Fin: audit, restituit</li>
      <li>VERB-Part: feyt, feyte, judyat, establit, tengut, feytes, ordonnat, appuntat, tiengut, deyt</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: so, ac, asso, aqueg, aqueres, aquet, ag, aquero, aquetz, aquets</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: autre, hom, autres, vn, un, augu, augun, c., tot, tout</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: augune, augun, augunes</li>
      <li>PRON: res, negun, augun, auguns, degun, ren, degune, aucun, augune, augunes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: se, lo, y, en, los, nos, luy, lor, s', l'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: losquoals</li>
      <li>PRON: qui, que, ond, loquoal, losquaus, ont, lasquaus, loquau, losquoaux, lasquoalles</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: son</li>
      <li>PRON: sons, nostre, nostres, sonx, lors, soes, sont, sos, vostres</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, s', -s, si, s, me, -m, -se, s'-, si-</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: avem, ey, abem, suy, auem, ayam, em, agu, aiam, eram</li>
      <li>PRON: nos, jo, mi, me, nous, -m, -nos, io, m', -mi</li>
      <li>VERB: ordonnam, volem, dam, autreiam, mandam, devem, dey, bolem, deffendem, inhibim</li>
      <li>VERB-Fin: ordonnam, volem, dam, autreiam, mandam, devem, dey, bolem, deffendem, inhibim</li>
      <li>VERB-Inf: Ordonnam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: edz, avetz, ayats, serat</li>
      <li>PRON: vos, -us, vous, bos, t', vostres</li>
      <li>VERB-Fin: ditz, fasats, sapiat, faciats, fassatz, sapiatz, suple, audiretz, fasatz, prengats</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: es, sera, seran, sie, son, fo, aura, sien, será, ere</li>
      <li>PRON: se, lo, y, en, los, luy, lor, s', l', -los</li>
      <li>VERB-Fin: deu, es, pot, ha, fasse, judya, fe, a, ditz, poeyra</li>
      <li>VERB-Part: estan</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: per, entro, d', quand, saub, contra, contre, ensemble, ob, à</li>
          <li>ADV: fore, quand, quant, ainxi, cum, no, afin, comme, ensemble, ensemps</li>
          <li>NOUN: faute</li>
          <li>SCONJ: QVAND, cum, si</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: per</li>
          <li>ADV: tant, ayssi, cy, no, aixi, assi, ayssi-, certas, cum, si</li>
          <li>PRON: so, ço, so-</li>
          <li>SCONJ: si, -si, ayssicum, cum, se</li>
          <li>VERB-Fin: es</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: ayssi, tout, aixi, ayssi-, ensemps</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: en, entro, per, à, ab, de, senhs, saub, segont, a</li>
          <li>ADV: tant, ayssi, sino, sinon, aixi, auparauant, encoeres, ainsi, apres, dauant</li>
          <li>CCONJ: pero</li>
          <li>NOUN: rason</li>
          <li>PRON: só</li>
          <li>SCONJ: si, affin, jassia, jassie, cum, deque, mentra, que, dequé, sinauque</li>
          <li>VERB: pausat, suppausat, actendut, expausat</li>
          <li>VERB-Part: pausat, actendut, expausat</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB-Fin--NOUN (1258)</li>
      <li>VERB-Fin--PRON (880)</li>
      <li>VERB-Inf--NOUN (10)</li>
      <li>VERB-Inf--NOUN-ADP(_) (2)</li>
      <li>VERB-Inf--PRON (6)</li>
      <li>VERB-Part--NOUN (736)</li>
      <li>VERB-Part--NOUN-ADP(_) (6)</li>
      <li>VERB-Part--PRON (400)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--NOUN (1095)</li>
      <li>VERB-Fin--NOUN-ADP(_) (3)</li>
      <li>VERB-Fin--PRON (511)</li>
      <li>VERB-Inf--NOUN (707)</li>
      <li>VERB-Inf--NOUN-ADP(_) (5)</li>
      <li>VERB-Inf--PRON (277)</li>
      <li>VERB-Inf--PRON-ADP(_) (1)</li>
      <li>VERB-Part--NOUN (324)</li>
      <li>VERB-Part--NOUN-ADP(_) (1)</li>
      <li>VERB-Part--PRON (155)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (223)</li>
      <li>VERB-Inf--PRON (56)</li>
      <li>VERB-Part--PRON (99)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 3 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: _ se, _ -s, _ si-</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 3 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>discourse:enunc</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
