---
layout: base
title:  'UD_Norwegian-Bokmaal'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Norwegian Bokmaal

Language: [Norwegian](/no/index.html) (code: `no`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Lilja Øvrelid, Fredrik Jørgensen, Petter Hohle.

Repository: [UD_Norwegian-Bokmaal](https://github.com/UniversalDependencies/UD_Norwegian-Bokmaal)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udno_bokmaal28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: news, blog, nonfiction

Questions, comments?
General annotation questions (either Norwegian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Norwegian-Bokmaal/issues).
If you want to collaborate, please contact [liljao&nbsp;(æt)&nbsp;ifi&nbsp;•&nbsp;uio&nbsp;•&nbsp;no].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Norwegian UD treebank is based on the Bokmål section of the Norwegian
Dependency Treebank (NDT), which is a syntactic treebank of Norwegian. NDT has been automatically converted to the UD
scheme by Lilja Øvrelid at the University of Oslo.



NDT was developed 2011-2014 at the National Library of Norway in collaboration
with the Text Laboratory and the Department of Informatics at the
University of Oslo. NDT contains around 300,000 tokens taken from a variety of genres.
The treebank texts have been manually annotated for morphosyntactic
information. The morphological annotation mainly follows mainly
the [Oslo-Bergen Tagger](http://tekstlab.uio.no/obt-ny/). The syntactic
annotation follows, to a large extent, the Norwegian Reference
Grammar, as well as a dependency annotation scheme formulated at the
outset of the annotation project and iteratively refined throughout
the construction of the treebank. For more information, see the
references below.

### DATA SPLITS

In creating the data splits, care has been taken to preserve
contiguous texts in the different splits and also to keep a fair
balance of genres in each of the splits. Petter Hohle created the
splits for the Norwegian UD treebank. The splits were created by
concatenating the following files (available with the distribution of
NDT):

Training data (15696 sentences, 180 individual files):

- ap001\_0000 -- ap012\_0002 (53 files)
- bt001\_0000 -- bt005\_0001 (28 files)
- db001a\_0000 -- db013\_0004 (42 files)
- kk001\_0000 -- kk005\_0001 (10 files)
- sp-bm001\_0000 -- sp-bm001\_0008 (9 files)
- vg001\_0000 -- vg002\_0003 (8 files)
- blogg-bm001\_0000 -- blogg-bm003\_0000 (9 files)
- nou001\_0000 -- nou004\_0000 (10 files)
- st001\_0000 -- st005\_0000 (11 files)

Development data (2410 sentences, 26 individual files):

- ap012\_0003 -- ap014\_0002 (7 files)
- bt005\_0002 -- bt005\_0005 (4 files)
- db013\_0005 -- db014\_0002 (5 files)
- kk006\_00001 -- kk007\_0000 (2 files)
- sp-bm002\_0000 -- sp-bm002\_0001 (2 files)
- vg002\_0004 (1 file)
- blogg-bm003\_0001 -- blogg-bm003\_0002 (2 files)
- nou004\_0001 (1 file)
- st005\_0001 -- st005\_0002 (2 files)

Test data (1939 sentences, 26 individual files):

- ap014\_0003 -- ap015\_0002 (7 files)
- bt005\_0006 -- bt006\_0001 (4 files)
- db014\_0003 -- db014\_0007 (5 files)
- kk007\_0001 -- kk008\_0000 (2 files)
- sp-bm003\_0000 -- sp-bm003\_0001 (2 files)
- vg002\_0005 (1 file)
- blogg-bm003\_0003 -- blogg-bm003\_0004 (2 files)
- nou004\_0002 (1 file)
- st005\_0003 -- st005\_0004 (2 files)


### BASIC STATISTICS

Tree count: 20045

Word count: 311277

Token count: 311277

Dep. relations: 35 of which 2 language specific

POS tags: 17

Category=value feature pairs: 31

### TOKENIZATION
White space always indicates a token boundary and punctuation constitute separate tokens, except:

* numbers with periods, commas or colons, e.g. *1.3*, *0,6*, *10:13*
* abbreviations, e.g. *f.eks.*, *Carl J. Hambro*
* URLs, e.g. *http://www.ifi.uio.no*

The treebank does not contain multiword tokens.

### MORPHOLOGY
The PoS-tags follow the universal tag set and does not add any
language-specific PoS-tags. The morphological features follow the
Oslo-Bergen Tagger scheme (Hagen et. al., 2000). PoS-tags and
morphological features were converted automatically to the UD scheme.

### SYNTAX
The syntactic annotation in the Norwegian UD treebank conforms to the
UD guidelines, adding language-specific relations for relative clauses (`acl:relcl`)
and verb particles (`compound:prt`). The annotation has been automatically converted to
UD from the original dependency scheme described in Solberg
et. al. (2014) and further described in the NDT guidelines (Kinn
et. al.).
The conversion has not been manually checked. There are a few known discrepancies from UD:

* no mwe analysis in the treebank. This is also information that is not present in the original data.

## Acknowledgments

NDT has been automatically converted to the UD scheme by Lilja Øvrelid at the University of Oslo. Petter Hohle created the data splits and Fredrik Jørgensen aligned the treebank to the original texts.
We thank the annotators of the original NDT: Pål Kristian Eriksen, Kari Kinn and Per Erik Solberg.


# Statistics of UD Norwegian Bokmaal

## POS Tags

[ADJ](no_bokmaal-pos-ADJ.html) – [ADP](no_bokmaal-pos-ADP.html) – [ADV](no_bokmaal-pos-ADV.html) – [AUX](no_bokmaal-pos-AUX.html) – [CCONJ](no_bokmaal-pos-CCONJ.html) – [DET](no_bokmaal-pos-DET.html) – [INTJ](no_bokmaal-pos-INTJ.html) – [NOUN](no_bokmaal-pos-NOUN.html) – [NUM](no_bokmaal-pos-NUM.html) – [PART](no_bokmaal-pos-PART.html) – [PRON](no_bokmaal-pos-PRON.html) – [PROPN](no_bokmaal-pos-PROPN.html) – [PUNCT](no_bokmaal-pos-PUNCT.html) – [SCONJ](no_bokmaal-pos-SCONJ.html) – [SYM](no_bokmaal-pos-SYM.html) – [VERB](no_bokmaal-pos-VERB.html) – [X](no_bokmaal-pos-X.html)

## Features

[Abbr](no_bokmaal-feat-Abbr.html) – [Animacy](no_bokmaal-feat-Animacy.html) – [Case](no_bokmaal-feat-Case.html) – [Definite](no_bokmaal-feat-Definite.html) – [Degree](no_bokmaal-feat-Degree.html) – [Gender](no_bokmaal-feat-Gender.html) – [Mood](no_bokmaal-feat-Mood.html) – [Number](no_bokmaal-feat-Number.html) – [NumType](no_bokmaal-feat-NumType.html) – [Person](no_bokmaal-feat-Person.html) – [Polarity](no_bokmaal-feat-Polarity.html) – [Poss](no_bokmaal-feat-Poss.html) – [PronType](no_bokmaal-feat-PronType.html) – [Reflex](no_bokmaal-feat-Reflex.html) – [Tense](no_bokmaal-feat-Tense.html) – [VerbForm](no_bokmaal-feat-VerbForm.html) – [Voice](no_bokmaal-feat-Voice.html)

## Relations

[acl](no_bokmaal-dep-acl.html) – [acl:cleft](no_bokmaal-dep-acl-cleft.html) – [acl:relcl](no_bokmaal-dep-acl-relcl.html) – [advcl](no_bokmaal-dep-advcl.html) – [advmod](no_bokmaal-dep-advmod.html) – [amod](no_bokmaal-dep-amod.html) – [appos](no_bokmaal-dep-appos.html) – [aux](no_bokmaal-dep-aux.html) – [aux:pass](no_bokmaal-dep-aux-pass.html) – [case](no_bokmaal-dep-case.html) – [cc](no_bokmaal-dep-cc.html) – [ccomp](no_bokmaal-dep-ccomp.html) – [compound](no_bokmaal-dep-compound.html) – [compound:prt](no_bokmaal-dep-compound-prt.html) – [conj](no_bokmaal-dep-conj.html) – [cop](no_bokmaal-dep-cop.html) – [csubj](no_bokmaal-dep-csubj.html) – [csubj:pass](no_bokmaal-dep-csubj-pass.html) – [det](no_bokmaal-dep-det.html) – [discourse](no_bokmaal-dep-discourse.html) – [expl](no_bokmaal-dep-expl.html) – [flat:foreign](no_bokmaal-dep-flat-foreign.html) – [flat:name](no_bokmaal-dep-flat-name.html) – [iobj](no_bokmaal-dep-iobj.html) – [mark](no_bokmaal-dep-mark.html) – [nmod](no_bokmaal-dep-nmod.html) – [nsubj](no_bokmaal-dep-nsubj.html) – [nsubj:pass](no_bokmaal-dep-nsubj-pass.html) – [nummod](no_bokmaal-dep-nummod.html) – [obj](no_bokmaal-dep-obj.html) – [obl](no_bokmaal-dep-obl.html) – [orphan](no_bokmaal-dep-orphan.html) – [parataxis](no_bokmaal-dep-parataxis.html) – [punct](no_bokmaal-dep-punct.html) – [reparandum](no_bokmaal-dep-reparandum.html) – [root](no_bokmaal-dep-root.html) – [xcomp](no_bokmaal-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 20044 sentences and 310221 tokens.</li>
</ul>

<ul>
<li>This corpus contains 34509 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1583 types of words that contain both letters and punctuation. Examples: tros-, Nord-Korea, Dagbladet.no, Fr.p., pr., tv-kanalen, bl.a., dr., aftenposten.no, Mette-Marit, Kyoto-avtalen, bt.no, I., St., e-post, Sør-Afrika, Thiis-Evensen, ca., handelsportal.no, Rieber-Mohn, Schmidt-Nielsen, W., pst., 70-tallet, CO2-frie, Mayen-loven, olje-, Fr.p.s, M., dvs., f.eks., miljø-, LO-leder, flyktning-, helse-, kl., skatte-, 1970-tallet, 1980-tallet, 60-tallet, A., B., GH:WT, Jong-un, Nord-Koreas, O2-opptaket, m.m., norsk-pakistanske, nærings-, 1800-tallet</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): ei, ikke, og, å</li>
</ul>

<ul>
<li>This corpus contains 50 lemmas tagged as pronouns (PRON): alle, alt, begge, de, den, denne, der, dere, deres, det, dette, din, disse, du, en, enhver, ham, han, hans, hennes, hun, hva, hvem, hverandre, hverandres, hvilket, hvis, ikkenoe, ingen, ingenting, intet, jag, jeg, man, meg, min, noe, noen, samtlige, seg, sin, sitt, slikt, som, sånt, vi, vår, whatever, you, æ</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as determiners (DET): 135a, all, alle, annen, begge, de, den, denne, det, dette, disse, egen, en, endel, enhver, fire-fem, forrige, hin, hver, hvilken, hvis, ingen, min, neste, nineish, noe, noen, samme, samtlige, selv, selve, selveste, sjøl, slik, sådan, sånn, tenish, the</li>
</ul>

<ul>
<li>Out of the above, 16 lemmas occurred sometimes as PRON and sometimes as DET: alle, begge, de, den, denne, det, dette, disse, en, enhver, hvis, ingen, min, noe, noen, samtlige</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): bli, burde, få, ha, kunne, måtte, skulle, tørre, ville, være</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: bli, burde, få, ha, kunne, måtte, skulle, tørre, ville, være</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: er, har, var, kan, vil, skal, ble, må, hadde, skulle</li>
    <li>VERB: har, sier, er, blir, kommer, går, mener, ble, får, kom</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: være, ha, bli, kunne, få, måtte, ville, skulle, ble, vøre</li>
    <li>VERB: få, ha, bli, ta, gjøre, se, si, gå, komme, gi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: sittende, tilsvarende, stående, forurensende, økende, økt, overraskende, ledende, krevende, manglende</li>
    <li>AUX: vært, blitt, fått, måttet, kunnet, villet</li>
    <li>VERB: fått, hatt, blitt, tatt, gjort, sett, gått, kommet, lagt, sagt</li>
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
      <li>DET: den, ei, noen, all, denne, hver, egen, annen, enhver, hvilken</li>
      <li>NOUN: tid, kirke, kroner, kvinner, støtte, hjelp, uker, side, mor, endringer</li>
      <li>NUM: halvannen, annenhver</li>
      <li>PRON: hun, henne, vår, hans, deres, si, hennes, di, mi</li>
      <li>PROPN: Kristin, Marit, Hanne, Hanna, Märtha, Gro, Ingrid, Maria, Marie, Anne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>PRON: den, noen, denne, ingen, enhver, der</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: antiautoritære, stor, straffet</li>
      <li>ADJ-Part: straffet</li>
      <li>ADV: Jo</li>
      <li>DET: en, den, denne, ingen, annen, hver, egen, slik, noen, all</li>
      <li>NOUN: dag, prosent, gang, verden, del, grunn, saken, ganger, ting, millioner</li>
      <li>NUM: én, halvannen, annenhver, Èn</li>
      <li>PRON: han, sin, ham, min, hans, vår, din, deres, hennes</li>
      <li>PROPN: Jan, Espen, Martin, Olav, Erik, Øyvind, Per, Kjell, Aftenposten, Sverre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: mye, helt, godt, litt, langt, samtidig, veldig, mulig, svært, lite</li>
      <li>ADJ-Part: bortsett, knyttet, samlet, opptalt, fredet, sett, uttalt, basert, betalt, integrert</li>
      <li>DET: et, det, noe, annet, dette, hvert, eget, alt, slikt, hvilket</li>
      <li>NOUN: år, folk, land, barn, landet, mennesker, livet, spørsmål, forhold, tillegg</li>
      <li>NUM: ett, halvannet, mangt, annethvert</li>
      <li>PRON: det, dette, noe, sitt, alt, mitt, vårt, hans, hennes, ditt</li>
      <li>PROPN: Stortinget, Dagbladet, Fremskrittspartiet, Senterpartiet, Stortingets, Sørlandet, Internett, Barentshavet, Norden, Vestlandet</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>PRON: jeg, han, vi, hun, du, man, meg, oss, ham, deg</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: mange, store, nye, norske, siste, gode, få, ulike, 22., ansatte</li>
      <li>ADJ-Part: økte, fredede, gjentatte, interesserte, samlede, forente, kvalifiserte, solgte, tapte, undertrykte</li>
      <li>DET: de, andre, alle, noen, disse, slike, egne, ingen, begge, hvilke</li>
      <li>NOUN: år, prosent, folk, barn, mennesker, ganger, kroner, land, ting, millioner</li>
      <li>NUM: to, tre, fire, 2, fem, ti, 20, seks, 3, 50</li>
      <li>PRON: vi, de, oss, dem, sine, alle, våre, ingen, dere, hverandre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>NOUN: A/S, AS, EKG, IQ, KS</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mye, første, helt, litt, godt, hele, norske, stor, ny, god</li>
      <li>ADJ-Part: økt, bekymret, knyttet, samlet, overrasket, bortsett, domfelte, interessert, lovforankret, integrert</li>
      <li>DET: en, et, den, det, denne, noe, annet, dette, annen, ingen</li>
      <li>NOUN: dag, gang, tid, verden, del, år, kirke, landet, grunn, saken</li>
      <li>NUM: ett, én, ene, 1, halvannen, annenhver, halvannet, mangt, 1., annethvert</li>
      <li>PRON: det, jeg, han, hun, du, dette, man, sin, meg, den</li>
      <li>VERB-Part: overrasket</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: seg, meg, oss, dem, ham, deg, henne, dere, han, mæ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: domfeltes, manges, offentliges, ansattes, enkeltes, fattiges, mistenktes, rødgrønnes, sistnevntes, tiltaltes</li>
      <li>ADJ-Part: domfeltes, mistenktes</li>
      <li>DET: andres, dens, dets, alles, ens, annens, hvis</li>
      <li>NOUN: verdens, dagens, landets, årets, kirkens, statens, utvalgets, års, samfunnets, barnets</li>
      <li>NUM: 2, 2011s, 2s</li>
      <li>PRON: alles, ens</li>
      <li>PROPN: Norges, Regjeringens, Cathrines, Obamas, Høyres, FNs, Bertelsens, USAs, Europas, Hannahs</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen,Nom
    <ul>
      <li>PRON: ens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: jeg, han, vi, de, hun, du, man, dere, Eg, mann</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: første, hele, norske, beste, siste, nye, fleste, største, store, viktigste</li>
      <li>ADJ-Part: domfelte, samlede, mistenkte, økte, domfeltes, planlagte, undertegnede, anbefalte, betalte, drepte</li>
      <li>DET: samme, neste, forrige, andre, selve, selveste, the</li>
      <li>NOUN: landet, saken, livet, regjeringen, stedet, tiden, utvalget, politiet, staten, dagens</li>
      <li>NUM: eneste, ene</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def,Ind
    <ul>
      <li>NOUN: A/S, AS, EKG, IQ, IT, KS</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mye, helt, litt, godt, stor, ny, mest, god, norsk, langt</li>
      <li>ADJ-Part: økt, bekymret, knyttet, samlet, overrasket, bortsett, interessert, lovforankret, integrert, redusert</li>
      <li>DET: annet, annen, egen, eget, annens</li>
      <li>NOUN: år, dag, prosent, gang, tid, folk, verden, land, barn, del</li>
      <li>VERB-Part: overrasket</li>
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
      <li>ADJ: mer, flere, tidligere, bedre, større, mindre, videre, lenger, senere, høyere</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: mange, norske, mye, første, store, nye, hele, helt, litt, godt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: mest, beste, fleste, minst, største, best, viktigste, fremst, verste, nærmest</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ingen, intet</li>
      <li>PART: ikke</li>
      <li>PRON: ingen, ingenting</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: vær, Få</li>
      <li>VERB-Fin: les, la, se, tenk, Ha, ta, send, gi, husk, kom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: er, har, var, kan, vil, skal, ble, må, hadde, skulle</li>
      <li>VERB-Fin: har, sier, er, blir, kommer, går, mener, ble, får, hadde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: var, ble, hadde, skulle, ville, kunne, måtte, burde, fikk, torde</li>
      <li>VERB-Fin: ble, hadde, kom, fikk, sa, gikk, tok, var, gjorde, så</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: er, har, kan, vil, skal, må, blir, bør, får, tør</li>
      <li>VERB-Fin: har, sier, er, blir, kommer, går, mener, får, ser, gjør</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: brukes, legges, sies, gis, kreves, oppheves, settes, vises, snakkes, stilles</li>
      <li>VERB-Inf: gjøres, tas, brukes, legges, settes, styrkes, behandles, gis, gjennomføres, sies</li>
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
      <li>DET: en, et, ei, ens, at, er, ett</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Art,Prs
    <ul>
      <li>PRON: en, ens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: den, de, det, andre, denne, annet, disse, samme, dette, annen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Ind
    <ul>
      <li>DET: noe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: noen, noe, Endel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Prs
    <ul>
      <li>PRON: noe, noen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: hvilke, hvilken, hvilket</li>
      <li>PRON: hva, hvem, hvis, hvilket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ingen, intet</li>
      <li>PRON: ingenting</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg,Prs
    <ul>
      <li>PRON: ingen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: selv, egen, egne, eget, selve, 135a, sjøl, selveste, the, fire-fem</li>
      <li>PRON: det, jeg, han, vi, de, seg, hun, du, dette, man</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs,Tot
    <ul>
      <li>PRON: alle, begge, enhver, samtlige, alles</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: hverandre, hverandres</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: som</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alle, hver, hvert, all, begge, alt, enhver, samtlige, ethvert, alles</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: to, tre, fire, eneste, ett, 2, fem, ti, 20, seks</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sin, sine, hans, sitt, min, vår, deres, mitt, våre, vårt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: seg</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: jeg, vi, meg, oss, mæ, Eg, mig, æ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: du, deg, dere</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: det, han, de, hun, dette, den, noe, dem, ham, alt</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: a, kgl., flg, lat., s.k.</li>
          <li>ADP: bl.a., pr., bl, f, pr, f., inkl., mht., bla, p.g.a.</li>
          <li>ADV: ca, ca., dvs., f.eks., m.m., dvs, osv., m.v., mv, o.l.</li>
          <li>NOUN: dr., nr, NATO, PST, pst., kr, kl., res, eks, Nato</li>
          <li>PROPN: USA, Frp, FN, EU, Ap, KrF, SV, Sp, Fr.p., FNs</li>
          <li>VERB-Fin: jf</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: være.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: ha, kunne, ville, skulle, være, måtte, få, burde, tørre.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: bli.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (4772)</li>
      <li>VERB-Fin--NOUN-ADP(med) (10)</li>
      <li>VERB-Fin--NOUN-ADP(over) (2)</li>
      <li>VERB-Fin--PRON (2629)</li>
      <li>VERB-Fin--PRON-Acc (6)</li>
      <li>VERB-Fin--PRON-Nom (5622)</li>
      <li>VERB-Inf--NOUN (1057)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON (534)</li>
      <li>VERB-Inf--PRON-Acc (7)</li>
      <li>VERB-Inf--PRON-Nom (1462)</li>
      <li>VERB-Part--NOUN (1045)</li>
      <li>VERB-Part--NOUN-ADP(med) (1)</li>
      <li>VERB-Part--PRON (511)</li>
      <li>VERB-Part--PRON-Nom (1016)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (5102)</li>
      <li>VERB-Fin--NOUN-ADP(over) (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--PRON (784)</li>
      <li>VERB-Fin--PRON-Acc (819)</li>
      <li>VERB-Fin--PRON-Nom (11)</li>
      <li>VERB-Inf--NOUN (3501)</li>
      <li>VERB-Inf--PRON (400)</li>
      <li>VERB-Inf--PRON-ADP(med) (1)</li>
      <li>VERB-Inf--PRON-Acc (499)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
      <li>VERB-Part--NOUN (1271)</li>
      <li>VERB-Part--PRON (172)</li>
      <li>VERB-Part--PRON-Acc (182)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (61)</li>
      <li>VERB-Fin--PRON (81)</li>
      <li>VERB-Fin--PRON-Acc (216)</li>
      <li>VERB-Inf--NOUN (72)</li>
      <li>VERB-Inf--PRON (14)</li>
      <li>VERB-Inf--PRON-Acc (109)</li>
      <li>VERB-Part--NOUN (12)</li>
      <li>VERB-Part--PRON (14)</li>
      <li>VERB-Part--PRON-Acc (48)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 273 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: vise seg, føle seg, ta seg, dreie seg, sette seg, holde seg, komme seg, forholde seg, skille seg, legge seg, utvikle seg, befinne seg, bestemme seg, stille seg, gjøre seg, sikre seg, la seg, nærme seg, skaffe seg, uttale seg, gifte seg, klare seg, bevege seg, glede seg, tenke seg, endre seg, engasjere seg, melde seg, strekke seg, forberede seg, tillate seg, trekke seg, gi seg, reise seg, si seg, bry seg, konsentrere seg, se seg, gjemme seg, kaste seg, lære seg, prøve seg, samle seg, barrikadere seg, etterlate seg, fortone seg, få seg, kjøpe seg, knytte seg, oppføre seg</li>
    <ul>
      <li>Out of those, 18 lemmas occurred more than once, but never without a reflexive dependent. Examples: fortone, pådra, påta, vegre, ombestemme, oppholde, skynde, belage, påberope, venne, dy, forskanse, godte, hive, kvitte, lene, opparbeide, tilegne</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:cleft</a>, <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
