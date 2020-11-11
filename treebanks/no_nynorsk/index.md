---
layout: base
title:  'UD_Norwegian-Nynorsk'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Norwegian Nynorsk

Language: [Norwegian](/no/index.html) (code: `no`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.0 release.

The following people have contributed to making this treebank part of UD: Lilja Øvrelid, Fredrik Jørgensen, Petter Hohle.

Repository: [UD_Norwegian-Nynorsk](https://github.com/UniversalDependencies/UD_Norwegian-Nynorsk)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udno_nynorsk27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 4.0

Genre: news, blog, nonfiction

Questions, comments?
General annotation questions (either Norwegian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Norwegian-Nynorsk/issues).
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

The Norwegian UD treebank is based on the Nynorsk section of the Norwegian
Dependency Treebank (NDT), which is a syntactic treebank of Norwegian.
NDT has been automatically converted to the UD
scheme by Lilja Øvrelid at the University of Oslo.



NDT was developed 2011-2014 at the National Library of Norway in collaboration
with the Text Laboratory and the Department of Informatics at the
University of Oslo.
NDT contains around 300,000 tokens taken from a variety of genres.
The treebank texts have been manually annotated for morphosyntactic
information. The morphological annotation mainly follows
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

Train:

blogg-nn001_0000 -- blogg-nn003_0001
dot001_0000 -- dot014_0007
firda-nn001_0000 -- firda-nn004_0005
kk-nn001_0000 -- kk-nn006_0002
mom001_0000 -- mom003_0004
st-nn001_0000 -- st-nn002_0000
vtb-nn001_0000 -- vtb-nn006_0004

Dev:

blogg-nn003_0002
dot014_0008 -- dot015_0002
firda-nn004_0006 -- firda-nn005_0002
kk-nn006_0003 -- kk-nn007_0002
mom003_0005
st-nn002_0001
vtb-nn006_0005 -- vtb-nn007_0001

Test:

blogg-nn003_0003
dot015_0003 -- dot016_0004
firda-nn005_0003 -- firda-nn005_0006
kk-nn007_0003 -- kk-nn007_0006
mom003_0006
st-nn002_0002
vtb-nn007_0002 -- vtb-nn007_0004

### BASIC STATISTICS


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


### REFERENCES

Kristin Hagen, Janne Bondi Johannessen and Anders Nøklestad: "A
Constraint-based Tagger for Norwegian". 2000. Proceedings of the 17th
Scandinavian Conference in Linguistics.

Kari Kinn, Per Erik Solberg and Pål Kristian Eriksen. "NDT Guidelines
for Morphological Annotation". National Library Tech Report.

Per Erik Solberg, Arne Skjærholt, Lilja Øvrelid, Kristin Hagen and
Janne Bondi Johannessen. 2014."The Norwegian Dependency Treebank",
Proceedings of LREC 2014, Reykjavik

Velldal, Erik; Øvrelid, Lilja & Hohle, Petter (2017). Joint UD Parsing of Norwegian Bokmål and Nynorsk , In Jörg Tiedemann (ed.), Proceedings of the 21st Nordic Conference on Computational Linguistics (NoDaLiDa). Linköping University Electronic Press. ISBN 978-91-7685-601-7. Article no. 001. s 1 - 10

## Acknowledgments

NDT has been automatically converted to the UD scheme by Lilja Øvrelid at the University of Oslo. Petter Hohle created the data splits and Fredrik Jørgensen aligned the treebank to the original texts.
We thank the annotators of the original NDT: Pål Kristian Eriksen, Kari Kinn and Per Erik Solberg.


### CHANGELOG


# Statistics of UD Norwegian Nynorsk

## POS Tags

[ADJ](no_nynorsk-pos-ADJ.html) – [ADP](no_nynorsk-pos-ADP.html) – [ADV](no_nynorsk-pos-ADV.html) – [AUX](no_nynorsk-pos-AUX.html) – [CCONJ](no_nynorsk-pos-CCONJ.html) – [DET](no_nynorsk-pos-DET.html) – [INTJ](no_nynorsk-pos-INTJ.html) – [NOUN](no_nynorsk-pos-NOUN.html) – [NUM](no_nynorsk-pos-NUM.html) – [PART](no_nynorsk-pos-PART.html) – [PRON](no_nynorsk-pos-PRON.html) – [PROPN](no_nynorsk-pos-PROPN.html) – [PUNCT](no_nynorsk-pos-PUNCT.html) – [SCONJ](no_nynorsk-pos-SCONJ.html) – [SYM](no_nynorsk-pos-SYM.html) – [VERB](no_nynorsk-pos-VERB.html) – [X](no_nynorsk-pos-X.html)

## Features

[Abbr](no_nynorsk-feat-Abbr.html) – [Animacy](no_nynorsk-feat-Animacy.html) – [Case](no_nynorsk-feat-Case.html) – [Definite](no_nynorsk-feat-Definite.html) – [Degree](no_nynorsk-feat-Degree.html) – [Gender](no_nynorsk-feat-Gender.html) – [Mood](no_nynorsk-feat-Mood.html) – [Number](no_nynorsk-feat-Number.html) – [NumType](no_nynorsk-feat-NumType.html) – [Person](no_nynorsk-feat-Person.html) – [Polarity](no_nynorsk-feat-Polarity.html) – [Poss](no_nynorsk-feat-Poss.html) – [PronType](no_nynorsk-feat-PronType.html) – [Tense](no_nynorsk-feat-Tense.html) – [VerbForm](no_nynorsk-feat-VerbForm.html)

## Relations

[acl](no_nynorsk-dep-acl.html) – [acl:cleft](no_nynorsk-dep-acl-cleft.html) – [acl:relcl](no_nynorsk-dep-acl-relcl.html) – [advcl](no_nynorsk-dep-advcl.html) – [advmod](no_nynorsk-dep-advmod.html) – [amod](no_nynorsk-dep-amod.html) – [appos](no_nynorsk-dep-appos.html) – [aux](no_nynorsk-dep-aux.html) – [aux:pass](no_nynorsk-dep-aux-pass.html) – [case](no_nynorsk-dep-case.html) – [cc](no_nynorsk-dep-cc.html) – [ccomp](no_nynorsk-dep-ccomp.html) – [compound](no_nynorsk-dep-compound.html) – [compound:prt](no_nynorsk-dep-compound-prt.html) – [conj](no_nynorsk-dep-conj.html) – [cop](no_nynorsk-dep-cop.html) – [csubj](no_nynorsk-dep-csubj.html) – [csubj:pass](no_nynorsk-dep-csubj-pass.html) – [det](no_nynorsk-dep-det.html) – [discourse](no_nynorsk-dep-discourse.html) – [expl](no_nynorsk-dep-expl.html) – [flat:foreign](no_nynorsk-dep-flat-foreign.html) – [flat:name](no_nynorsk-dep-flat-name.html) – [iobj](no_nynorsk-dep-iobj.html) – [mark](no_nynorsk-dep-mark.html) – [nmod](no_nynorsk-dep-nmod.html) – [nsubj](no_nynorsk-dep-nsubj.html) – [nsubj:pass](no_nynorsk-dep-nsubj-pass.html) – [nummod](no_nynorsk-dep-nummod.html) – [obj](no_nynorsk-dep-obj.html) – [obl](no_nynorsk-dep-obl.html) – [orphan](no_nynorsk-dep-orphan.html) – [parataxis](no_nynorsk-dep-parataxis.html) – [punct](no_nynorsk-dep-punct.html) – [reparandum](no_nynorsk-dep-reparandum.html) – [root](no_nynorsk-dep-root.html) – [xcomp](no_nynorsk-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 17575 sentences and 301353 tokens.</li>
</ul>

<ul>
<li>This corpus contains 30772 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1302 types of words that contain both letters and punctuation. Examples: Vest-Telemark, kap., kultur-, firda.no, jf., nr., s., I., H., ca., etc., St.meld., Strøm-Erichsen, helse-, mill., 1990-åra, m.a., 1800-talet, t.v., EØS-avtalen, Dyrsku'n, olje-, A., arbeids-, dvs., km/t, ml-rørsla, www.firda.no, 1700-talet, 1990-talet, Anne-Grete, Paulus', Saudi-Arabia, d., lov-, 20-åra, e., u-land, 1970-åra, 90-talet, G., K., Ki-moon, Kyoto-avtalen, PB., e-post, f.v., miljø-, o., raud-grøne</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): ei, einast, eingong, ikkje, og, å</li>
</ul>

<ul>
<li>This corpus contains 45 lemmas tagged as pronouns (PRON): alle, alt, begge, båe, d., de, dei, deira, den, denne, der, desse, det, dette, din, du, dykkar, eg, ein, han, hans, hennar, ho, ingen, ingenting, kva, kvarandre, kven, kån, kåns, man, me, min, mine, noko, nokon, nokre, seg, sin, slikt, som, somme, sånt, vi, vår</li>
</ul>

<ul>
<li>This corpus contains 43 lemmas tagged as determiners (DET): II, III, a, all, alle, annan, annen, begge, de, dei, den, denne, desse, det, dette, dinnja, eige, eigen, ein, einkvan, einkvar, eit, et, forrige, four, førre, hass, hin, ingen, kva, kvar, mangt, neste, noko, nokon, same, samme, sjølv, sjølve, slik, sånn, the, ½</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: alle, begge, de, dei, den, denne, desse, det, dette, ein, ingen, kva, noko, nokon</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as auxiliaries (AUX): bli, burde, få, ha, kunne, måtte, skulle, tore, vere, verte, vilje</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as AUX and sometimes as VERB: bli, burde, få, ha, kunne, måtte, skulle, tore, vere, verte, vilje</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: er, har, var, kan, skal, vil, må, vart, blir, hadde</li>
    <li>VERB: har, seier, er, kjem, får, meiner, går, fekk, kom, blir</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADV: hende</li>
    <li>AUX: vere, vera, ha, bli, få, kunne, kunna, verta, verte, måtte</li>
    <li>VERB: få, ha, ta, gå, bli, sjå, gjere, gje, gjera, seie</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: sett, lagt, auka, gjort, manglande, samla, avgjerande, følgjande, aukande, komande</li>
    <li>AUX: vore, blitt, vorte, fått, kunna, måtta, måtte, fengje, vilja</li>
    <li>VERB: fått, hatt, gjort, sett, gått, vore, teke, kome, sagt, blitt</li>
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
      <li>ADJ: lita, bundi, opa, teki, vedteki</li>
      <li>ADJ-Part: teki, vedteki</li>
      <li>DET: ei, den, denne, anna, slik, eiga, all, inga, kvar, noko</li>
      <li>NOUN: tid, kroner, regjeringa, saka, verda, boka, tida, meldinga, lov, grad</li>
      <li>NUM: éi, annakvar, ei</li>
      <li>PRON: ho, si, henne, vår, hans, mi, hennar, di, deira, ei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>PRON: den, denne, dén</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: liten, open, kristen, oppteken, god, lunken, medfaren, sliten, velkomen, Forboden</li>
      <li>DET: ein, den, denne, kvar, eigen, annan, nokon, ingen, all, slik</li>
      <li>NOUN: dag, prosent, del, millionar, gong, grunn, Olav, leiar, bruk, kommunen</li>
      <li>NUM: éin, en, annankvar, èin</li>
      <li>PRON: han, sin, vår, min, hans, nokon, hennar, deira, ingen, din</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: mykje, godt, heilt, langt, svært, litt, rett, veldig, viktig, norsk</li>
      <li>ADJ-Part: sett, lagt, gjort, sagt, utvida, knytt, teke, vedteke, gjeve, samla</li>
      <li>DET: eit, det, anna, noko, dette, kvart, eitt, eige, alt, slikt</li>
      <li>NOUN: år, folk, språk, stortinget, landet, land, Framstegspartiet, tillegg, departementet, arbeidet</li>
      <li>NUM: annakvart, halvanna, halvtanna, noe</li>
      <li>PRON: det, dette, noko, sitt, alt, vårt, mitt, hans, slikt, hennar</li>
      <li>VERB-Part: blir, innført, lagt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>PRON: dei, eg, vi, ein, me, du, oss, meg, kven, de</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: mange, store, nye, ulike, norske, gode, 1., siste, tilsette, få</li>
      <li>ADJ-Part: samla, tekne, auka, brukte, frammøtte, komne, reduserte, interesserte, knytte, nemnde</li>
      <li>DET: dei, andre, alle, desse, nokre, slike, ingen, eigne, begge, nokon</li>
      <li>NOUN: år, folk, prosent, kroner, millionar, åra, pengar, land, menneske, tiltak</li>
      <li>NUM: to, tre, fire, ti, fem, 20, seks, 2005, 2006, 2</li>
      <li>PRON: dei, vi, me, oss, sine, alle, våre, de, ingen, kvarandre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>NOUN: BNP, AS, KS, PS, SS</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mykje, heile, godt, heilt, norsk, viktig, langt, svært, litt, rett</li>
      <li>ADJ-Part: sett, lagt, gjort, auka, samla, knytt, utvida, sagt, kalla, brukt</li>
      <li>DET: ein, den, eit, ei, det, denne, anna, noko, dette, kvar</li>
      <li>NOUN: dag, tid, år, del, språk, landet, regjeringa, saka, verda, gong</li>
      <li>NUM: eine, éin, éi, en, annankvar, annakvar, annakvart, ei, halvanna, halvtanna</li>
      <li>PRON: det, han, eg, seg, ein, dette, ho, du, noko, sin</li>
      <li>VERB-Part: blir, innført, lagt, stoppa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: seg, dei, oss, meg, han, henne, deg, ho, dykk, kån</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: liks, enkeltes, intellektuelles, kristnes, mogleges, rettes, tilsettes</li>
      <li>DET: andres, dens, dets</li>
      <li>NOUN: dømes, dagens, årets, språkets, verdas, års, SVs, kyrkjas, landets, EUs</li>
      <li>PROPN: Guds, Noregs, Breiviks, Høgres, Parkinsons, Europas, Paulus', Hitlers, Venstres, Tysklands</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: han, eg, dei, vi, ho, me, du, de, man, ha</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: heile, nye, norske, siste, første, fyrste, fleste, gamle, store, beste</li>
      <li>ADJ-Part: tiltalte, samla, auka, nemnde, framlagde, planlagde, sikta, utvida, desentraliserte, føretrekte</li>
      <li>ADV: sjølve</li>
      <li>DET: same, sjølve, neste, førre, andre, Forrige, sama</li>
      <li>NOUN: landet, regjeringa, saka, verda, departementet, arbeidet, åra, boka, kommunen, tida</li>
      <li>NUM: einaste, eine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def,Ind
    <ul>
      <li>NOUN: BNP, AS, IT, KS, PS, SS</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mykje, godt, heilt, norsk, viktig, langt, mest, svært, litt, rett</li>
      <li>ADJ-Part: sett, lagt, gjort, auka, knytt, samla, utvida, sagt, kalla, brukt</li>
      <li>DET: anna, eigen, annan, eige, eiga, annen, egen</li>
      <li>NOUN: år, dag, folk, tid, prosent, språk, kroner, del, millionar, land</li>
      <li>VERB-Part: blir, innført, lagt, stoppa</li>
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
      <li>ADJ: meir, fleire, tidlegare, større, vidare, betre, mindre, lenger, nærare, seinare</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: mange, mykje, nye, store, heile, godt, heilt, norske, norsk, siste</li>
      <li>ADJ-Part: Samla, utpeikt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: mest, minst, fleste, beste, største, viktigaste, fremst, best, flest, meste</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ingen, inga</li>
      <li>PART: ikkje</li>
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
      <li>AUX-Fin: ver, bli</li>
      <li>VERB-Fin: sjå, Les, del, la, ta, legg, tenk, ha, hell, hugs</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: er, har, var, kan, skal, vil, må, vart, blir, hadde</li>
      <li>VERB-Fin: har, seier, er, kjem, får, meiner, går, fekk, blir, kom</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: var, vart, hadde, kunne, skulle, ville, måtte, blei, burde, fekk</li>
      <li>VERB-Fin: fekk, kom, hadde, gjekk, sa, vart, var, tok, gjorde, såg</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: er, har, kan, skal, vil, må, blir, vert, bør, får</li>
      <li>VERB-Fin: har, seier, er, kjem, får, meiner, går, blir, ser, gjer</li>
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
      <li>DET: ein, eit, ei, eitt, en, eir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Art,Prs
    <ul>
      <li>PRON: ein, ei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: den, dei, det, andre, denne, anna, same, dette, desse, slike</li>
      <li>NUM: fem-seks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: noko, nokre, nokon, noka, nokor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Prs
    <ul>
      <li>PRON: noko, nokon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: kva</li>
      <li>PRON: kva, kven</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ingen, inga</li>
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
      <li>DET: sjølv, sjølve, eigen, eige, eigne, eiga, the, II, III, eitkvart</li>
      <li>PRON: det, dei, han, eg, vi, seg, dette, ho, me, du</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs,Tot
    <ul>
      <li>PRON: alle, begge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: kvarandre</li>
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
      <li>DET: alle, kvar, kvart, all, alt, begge, einkvar</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: to, tre, 1, fire, ti, fem, 20, seks, 2005, 2006</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sin, sine, sitt, si, hans, vår, våre, hennar, vårt, deira</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: eg, vi, me, oss, meg, kån</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: du, de, deg, dykk</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: det, dei, han, dette, ho, noko, alt, den, alle, nokon</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: ok, d., ang., fung., l., rk, sk., spes</li>
          <li>ADP: m.a., pr.</li>
          <li>ADV: etc, ca., etc., t.v., dvs., f.v., ca, t.d., f.eks., t.h.</li>
          <li>CCONJ: el., o.</li>
          <li>NOUN: USA, SV, kap., Ap, EU, Sp, OECD, nr., s., Frp</li>
          <li>PRON: d.</li>
          <li>PROPN: Ap</li>
          <li>VERB-Fin: jf., e.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: vere.</li>
</ul>

<ul>
<li>This corpus uses 11 lemmas as auxiliaries (<a>aux</a>). Examples: ha, kunne, skulle, vilje, måtte, vere, få, burde, verte, bli, tore.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: verte, bli.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (5915)</li>
      <li>VERB-Fin--NOUN-ADP(blant) (1)</li>
      <li>VERB-Fin--NOUN-ADP(med) (6)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--PRON (2761)</li>
      <li>VERB-Fin--PRON-Acc (11)</li>
      <li>VERB-Fin--PRON-Nom (4186)</li>
      <li>VERB-Inf--NOUN (1574)</li>
      <li>VERB-Inf--NOUN-ADP(med) (4)</li>
      <li>VERB-Inf--PRON (891)</li>
      <li>VERB-Inf--PRON-Acc (3)</li>
      <li>VERB-Inf--PRON-Nom (1079)</li>
      <li>VERB-Part--NOUN (845)</li>
      <li>VERB-Part--NOUN-ADP(med) (1)</li>
      <li>VERB-Part--PRON (373)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (679)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (4854)</li>
      <li>VERB-Fin--NOUN-ADP(med) (1)</li>
      <li>VERB-Fin--PRON (723)</li>
      <li>VERB-Fin--PRON-Acc (652)</li>
      <li>VERB-Fin--PRON-Nom (12)</li>
      <li>VERB-Inf--NOUN (3570)</li>
      <li>VERB-Inf--PRON (360)</li>
      <li>VERB-Inf--PRON-Acc (390)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (973)</li>
      <li>VERB-Part--PRON (117)</li>
      <li>VERB-Part--PRON-Acc (153)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (76)</li>
      <li>VERB-Fin--PRON (124)</li>
      <li>VERB-Fin--PRON-Acc (147)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN (75)</li>
      <li>VERB-Inf--PRON (17)</li>
      <li>VERB-Inf--PRON-Acc (97)</li>
      <li>VERB-Part--NOUN (12)</li>
      <li>VERB-Part--PRON (16)</li>
      <li>VERB-Part--PRON-Acc (40)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:cleft</a>, <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
