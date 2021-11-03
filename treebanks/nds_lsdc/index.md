---
layout: base
title:  'UD_Low_Saxon-LSDC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Low Saxon LSDC

Language: [Low Saxon](/nds/index.html) (code: `nds`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Janine Siewert.

Repository: [UD_Low_Saxon-LSDC](https://github.com/UniversalDependencies/UD_Low_Saxon-LSDC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnds_lsdc29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: fiction, nonfiction

Questions, comments?
General annotation questions (either Low Saxon-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Low_Saxon-LSDC/issues).
If you want to collaborate, please contact [janine&nbsp;•&nbsp;siewert&nbsp;(æt)&nbsp;helsinki&nbsp;•&nbsp;fi].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The UD Low Saxon LSDC dataset consists of sentences in 18 Low Saxon dialects from both Germany and the Netherlands. These sentences are (or are to become) part of the LSDC dataset and represent the language from the 19th and early 20th century in genres such as short stories, novels, speeches, letters and fairytales.




The first version of the UD Low Saxon LSDC dataset contains 18 Low Saxon dialects from both Germany and the Netherlands represented by 2 sentences each and belonging to the domains of short stories, novels, speeches, letters and fairytales. Each sentence was chosen from a different text to present some of the variation within the different dialect groups. In the second version, 40 sentences from four Westphalian dialects, two from Germany and two from the Netherlands, were added. The coverage of other dialect groups will be improved in future releases.

Since there is no official interregional spelling, the interregional spelling suggestion used by e.g. the Dutch Low Saxon Wikipedia (_Nysassiske Skryvwyse_, described in more detail here: https://skryvwyse.eu/ (only in Low Saxon)) is used as a compromise for normalisation, but the original spelling of the source is included in the line "text_orig =" and a Middle Low Saxon lemma is added in the tenth column ("lemma[gml]=xxx") in order to make the Modern Low Saxon data more easily comparable with the Middle Low Saxon data in the reference corpus "Referenzkorpus Mittelniederdeutsch/Niederrheinisch". For this reason, the Middle Low Saxon lemma forms follow the "Mittelniederdeutsches Handwörterbuch" by Agathe Lasch et al. like in the reference corpus. Middle Low Saxon lemmata are only added in the cases where there is an attestation in Middle Low Saxon, i.e. the word is either listed in the Handwörterbuch or is found in the reference corpus. Middle Low Saxon lemmata are still included if the word's meaning has changed, but we did not e.g. create new complex word lemmata from known simplex words and neither did we reconstruct potential Middle Low Saxon forms for words which have not yet been attested at that stage of the language.

The dataset contains only sentences from copyright-free material from the 19th and early 20th century. Part of the sentences are already included in the first release of the LSDC dataset found here: https://github.com/Helsinki-NLP/LSDC/ See there for further information on the origin of the data. The other sentences originate mostly from Joh. A. Leopold's work 'Van de Schelde tot te Weichsel', a digitised version of which is accessible here: https://www.dbnl.org/titels/titel.php?id=leop008sche00 An exception constitutes the text 'Krisjaon Klaover' to be found in the Twentse Taalbank: http://www.twentsetaalbank.nl/docs/TWA.1894-Heinink-Krisjaon_Klaover-150.pdf These other sentences will be added to the next release of the LSDC dataset.

Due to the small size of the dataset, it has not yet been split into training, development and test sets.


## Acknowledgments

The following people were involved in the creation of this dataset:

* Janine Siewert (data collection, selection and annotation)
* Jack Michael Rueter (annotation-related advice)

## References

If you use this treebank, please cite this paper:

```
@inproceedings{siewert-etal-2021-towards,
title = "Towards a balanced annotated Low {S}axon dataset for diachronic investigation of dialectal variation",
author = {Siewert, Janine and
Scherrer, Yves and
Tiedemann, J{\"o}rg},
booktitle = "Proceedings of the 17th Conference on Natural Language Processing (KONVENS 2021)",
month = "6--9 " # sep,
year = "2021",
address = {D{\"u}sseldorf, Germany},
publisher = "KONVENS 2021 Organizers",
url = "https://aclanthology.org/2021.konvens-1.25",
pages = "242--246",
}

```
### References used for the creation of this dataset:

* Lasch, Agathe et al. 1928 ff. *Mittelniederdeutsches Handwörterbuch.* Neumünster: Wachholtz.
* ReN-Team. 2019. *Referenzkorpus Mittelniederdeutsch/Niederrheinisch (1200-1650).* Archived in Hamburger Zentrum für Sprachkorpora. Version 1.0. Publication date 2019-08-14. http://hdl.handle.net/11022/0000-0007-D829-8.



# Statistics of UD Low Saxon LSDC

## POS Tags

[ADJ](nds_lsdc-pos-ADJ.html) – [ADP](nds_lsdc-pos-ADP.html) – [ADV](nds_lsdc-pos-ADV.html) – [AUX](nds_lsdc-pos-AUX.html) – [CCONJ](nds_lsdc-pos-CCONJ.html) – [DET](nds_lsdc-pos-DET.html) – [INTJ](nds_lsdc-pos-INTJ.html) – [NOUN](nds_lsdc-pos-NOUN.html) – [NUM](nds_lsdc-pos-NUM.html) – [PART](nds_lsdc-pos-PART.html) – [PRON](nds_lsdc-pos-PRON.html) – [PROPN](nds_lsdc-pos-PROPN.html) – [PUNCT](nds_lsdc-pos-PUNCT.html) – [SCONJ](nds_lsdc-pos-SCONJ.html) – [VERB](nds_lsdc-pos-VERB.html) – [X](nds_lsdc-pos-X.html)

## Features

[AdpType](nds_lsdc-feat-AdpType.html) – [Aspect](nds_lsdc-feat-Aspect.html) – [Case](nds_lsdc-feat-Case.html) – [Definite](nds_lsdc-feat-Definite.html) – [Degree](nds_lsdc-feat-Degree.html) – [Foreign](nds_lsdc-feat-Foreign.html) – [Gender](nds_lsdc-feat-Gender.html) – [Gender[psor]](nds_lsdc-feat-Gender-psor.html) – [Mood](nds_lsdc-feat-Mood.html) – [Number](nds_lsdc-feat-Number.html) – [Number[psor]](nds_lsdc-feat-Number-psor.html) – [NumType](nds_lsdc-feat-NumType.html) – [PartType](nds_lsdc-feat-PartType.html) – [Person](nds_lsdc-feat-Person.html) – [Person[psor]](nds_lsdc-feat-Person-psor.html) – [Polite](nds_lsdc-feat-Polite.html) – [Poss](nds_lsdc-feat-Poss.html) – [PronType](nds_lsdc-feat-PronType.html) – [Reflex](nds_lsdc-feat-Reflex.html) – [Tense](nds_lsdc-feat-Tense.html) – [VerbForm](nds_lsdc-feat-VerbForm.html) – [VerbType](nds_lsdc-feat-VerbType.html)

## Relations

[acl](nds_lsdc-dep-acl.html) – [advcl](nds_lsdc-dep-advcl.html) – [advmod](nds_lsdc-dep-advmod.html) – [amod](nds_lsdc-dep-amod.html) – [appos](nds_lsdc-dep-appos.html) – [aux](nds_lsdc-dep-aux.html) – [aux:pass](nds_lsdc-dep-aux-pass.html) – [case](nds_lsdc-dep-case.html) – [cc](nds_lsdc-dep-cc.html) – [ccomp](nds_lsdc-dep-ccomp.html) – [compound](nds_lsdc-dep-compound.html) – [compound:prt](nds_lsdc-dep-compound-prt.html) – [conj](nds_lsdc-dep-conj.html) – [cop](nds_lsdc-dep-cop.html) – [csubj](nds_lsdc-dep-csubj.html) – [det](nds_lsdc-dep-det.html) – [det:poss](nds_lsdc-dep-det-poss.html) – [discourse](nds_lsdc-dep-discourse.html) – [dislocated](nds_lsdc-dep-dislocated.html) – [expl](nds_lsdc-dep-expl.html) – [expl:pv](nds_lsdc-dep-expl-pv.html) – [fixed](nds_lsdc-dep-fixed.html) – [flat](nds_lsdc-dep-flat.html) – [iobj](nds_lsdc-dep-iobj.html) – [mark](nds_lsdc-dep-mark.html) – [nmod](nds_lsdc-dep-nmod.html) – [nmod:poss](nds_lsdc-dep-nmod-poss.html) – [nsubj](nds_lsdc-dep-nsubj.html) – [nsubj:pass](nds_lsdc-dep-nsubj-pass.html) – [nummod](nds_lsdc-dep-nummod.html) – [obj](nds_lsdc-dep-obj.html) – [obl](nds_lsdc-dep-obl.html) – [obl:agent](nds_lsdc-dep-obl-agent.html) – [orphan](nds_lsdc-dep-orphan.html) – [parataxis](nds_lsdc-dep-parataxis.html) – [punct](nds_lsdc-dep-punct.html) – [root](nds_lsdc-dep-root.html) – [vocative](nds_lsdc-dep-vocative.html) – [xcomp](nds_lsdc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 76 sentences, 2314 tokens and 2325 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 340 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words that contain both letters and punctuation. Examples: Luoden-heide</li>
</ul>

<ul>
<li>This corpus contains 7 multi-word tokens. On average, one multi-word token consists of 2.57 syntactic words.</li>
<li>There are 7 types of multi-word tokens. Examples: Kumste, im, in'en, in't, ten, to'm, van'er.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): en, neet, nich, te, to</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as pronouns (PRON): al, alle, dat, de, dee, dit, du, dår, elk, enander, et, eyn, eyner, hee, ichts, ik, jeyde, jy, keynen, man, mekare, niks, see, sik, wat, wy</li>
</ul>

<ul>
<li>This corpus contains 17 lemmas tagged as determiners (DET): dat, de, dee, den, disse, dyn, ear, en, et, geyn, höär, juw, keyn, myn, syn, un, uns</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: dat, de, dee, et</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): hebben, künnen, möten, möägen, sköälen, weasen, werden, willen</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: hebben, künnen, möägen, werden, willen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: is, was, het, weer, wil, hadde, kan, sint, skölde, willet</li>
    <li>VERB: leyt, hadde, hebben, hevt, höyrt, segt, sit, smit, stund, Haal</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: syn, hebben, künnen, weasen</li>
    <li>VERB: doon, seen, holden, loupen, råden, seggen, sitten, slåpen, söken, vrågen</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: weasd</li>
    <li>VERB: ebracht, gån, ankündigd, antwoorded, bewysd, bruked, dröygd, edån, ekommen, eleyrd</li>
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
      <li>ADJ: ander, andere, düslike, eyrste, goden, grout, hougen, junge, nüllige, olden</li>
      <li>DET: de, der, den, syne, en, myn, ne, syn, dee, des</li>
      <li>NOUN: stad, vrouwe, hand, nacht, nåberskop, steade, syde, tåfel, vrouw, aerde</li>
      <li>NUM: eyne</li>
      <li>PRON: dee, höär, see</li>
      <li>PROPN: Hente, Havel, Luoden-heide, Marigge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: olden</li>
      <li>DET: de, des, gyn</li>
      <li>NOUN: gek, nachts, noud, tyden</li>
      <li>PRON: eyne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: armen, Weynige, anderen, anseenliksten, böyse, drüdden, düchtige, eyrste, fynen, lange</li>
      <li>DET: de, den, en, dee, dem, eynen, mynen, nen, Unse, des</li>
      <li>NOUN: buur, man, junge, böyme, dag, dokter, hiamel, houpe, kop, korv</li>
      <li>PRON: hee, dee, den, em, e, hum, ean, eyne, üm</li>
      <li>PROPN: Hiärmen, Andrees, Bennad, Hein, Krisjaon, Lulef, Röyverbarg, Winkel, Winkels</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>NOUN: bast, noorden, vlas, westen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: aardig, ander, anders, beiden, besten, drüdde, eiselik, enkele, eyrste, fyne</li>
      <li>DET: en, dat, de, et, t, den, keyn, kyn, myn, n</li>
      <li>NOUN: kinder, lüde, lüdens, mål, bittyn, huus, lüüd, ouge, ougen, pearde</li>
      <li>PRON: et, dat, wat, niks, det, al, allens, dit, dát, hwat</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: olden, Weynige, anderen, anseenliksten, beiden, düslike, fyne, fynen, geleyrde, gemeynen</li>
      <li>AUX: weren, konnen, sint, willet, hadden, sullen, warden, wullen, wörden</li>
      <li>AUX-Fin: sint, willet, hadden, konnen, sullen, warden, weren, wullen</li>
      <li>DET: de, den, syne, eare, en, Dat, dee, uw</li>
      <li>NOUN: kinder, lüde, böyme, pearde, arms, beyne, dage, dagen, dysen, döppe</li>
      <li>PRON: see, alle, dee, hee, wy, mekare, se, sik</li>
      <li>VERB: saeten, hebben, blyvet, brennen, drådnägelen, döppen, gnageden, gåt, hove, koamet</li>
      <li>VERB-Fin: hebben, blyvet, drådnägelen, hove, koamet, kwaemen, loupen, maket, sadelet, saeten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ander, eyrste, armen, grout, veal, aardig, andere, anderen, anders, besten</li>
      <li>AUX: was, is, hadde, kon, het, hebbe, weer, wil, kan, sin</li>
      <li>AUX-Fin: is, was, het, weer, wil, hadde, kan, skölde, hevt, kun</li>
      <li>DET: de, en, den, dat, der, et, syn, myn, dee, dem</li>
      <li>NOUN: buur, stad, junge, man, vrouwe, Belsebul, Sikkebård, Smalbek, bittyn, dag</li>
      <li>NUM: eyne</li>
      <li>PRON: ik, et, hee, dat, my, dee, wat, em, myn, den</li>
      <li>PROPN: Marigge, Jüsken, Wiesken, Adolf, Anton, Dreier, Göttin, Hente, Hiärmen, Janhiarm</li>
      <li>VERB: hadde, leyt, nam, sea, stun, dacht, geit, ging, gung, hevt</li>
      <li>VERB-Fin: leyt, hadde, hevt, höyrt, segt, sit, smit, stund, Haal, Kumst</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: aardig, andere, beiden, drüdden, düchtige, enkele, eyrste, fynen, good, grout</li>
      <li>DET: de, den, en, dat, syn, et, dee, eare, eynen, t</li>
      <li>NOUN: bittyn, gek, korv, pearde, rad, baas, bast, bewys, bind, book</li>
      <li>PRON: et, dat, wat, niks, den, hum, al, alle, det, ean</li>
      <li>PROPN: Garrelt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Dat
    <ul>
      <li>DET: den</li>
      <li>NOUN: leyren, noorden, nysgyrigheid, skanden, westen, åvend</li>
      <li>PRON: sik, my, myn, em, enander, ow, höär, uw</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: eyrste, olden, ander, anderen, anseenliksten, armen, besten, glönnigen, goden, grynenden</li>
      <li>DET: de, den, der, dem, syne, en, et, myn, n, dyn</li>
      <li>NOUN: ougen, stad, buur, hiamel, houpe, kop, nåberskop, syde, aerde, barge</li>
      <li>NUM: eyne</li>
      <li>PRON: em, mik, my, al, eynen</li>
      <li>PROPN: Havel, Luoden-heide, Marigge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: des, en</li>
      <li>NOUN: nachts, åvends, moders</li>
      <li>PROPN: Winkels</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ander, völle, anderen, armen, böyse, drüdde, düslike, eiselik, fyne, geleyrde</li>
      <li>DET: de, en, dat, syne, dee, myn, ne, Syn, Unse, et</li>
      <li>NOUN: buur, junge, kinder, lüde, lüdens, lüüd, vrouwe, wind, Beaden, Dokter</li>
      <li>PRON: ik, hee, et, dee, see, dat, y, alle, den, du</li>
      <li>PROPN: Hiärmen, Andrees, Hein, Jouke, Krisjaon, Lulef, Röyverbarg</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: de, den, dat, der, et, en, dee, dem, des, n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: en, ne, nen, eyne, eynen, eyner</li>
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
      <li>ADJ: Later, seaker, wyder</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: good, byster, kold, natüürlik, sat, völle, Hard, ander, angst, armen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: eyrste, best, anseenliksten, besten, ryksten, sköynsten</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Part: weasd</li>
      <li>VERB-Part: ebracht, gån, ankündigd, antwoorded, bewysd, bruked, dröygd, edån, ekommen, eleyrd</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Haal, Sü, Süg, geavet, kom, skenket, vertellet</li>
      <li>VERB-Fin: Haal, Süg, geavet, skenket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: was, is, hadde, kon, het, hebbe, weer, weren, wil, kan</li>
      <li>AUX-Fin: is, was, het, weer, wil, hadde, kan, sint, skölde, willet</li>
      <li>VERB: hadde, leyt, saeten, hebben, nam, sea, stun, dacht, do, geit</li>
      <li>VERB-Fin: leyt, hadde, hebben, hevt, höyrt, segt, sit, smit, stund, Kumst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: hadde, kon, künne, möcht, sol, wol</li>
      <li>AUX-Fin: künne, möcht</li>
      <li>VERB: hädde, kaem, miat, sat, wol, wüs</li>
      <li>VERB-Fin: hädde, miat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: was, hadde, kon, weer, weren, konnen, skölde, hadden, kun, mochte</li>
      <li>AUX-Fin: was, weer, hadde, skölde, hadden, konnen, kun, mochte, möcht, skul</li>
      <li>VERB: hadde, leyt, saeten, nam, stun, dacht, ging, gung, höyrde, kaem</li>
      <li>VERB-Fin: leyt, hadde, stund, bedüdde, gröäl, hädde, höyld, höyrde, kaem, kam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: is, het, hebbe, wil, kan, sin, sint, willet, heb, hevt</li>
      <li>AUX-Fin: is, het, wil, kan, sint, willet, hevt, künne, mut, müchte</li>
      <li>VERB: hebben, do, geit, hevt, höyrt, kümt, mankeert, segge, segt, sit</li>
      <li>VERB-Fin: hebben, hevt, höyrt, segt, sit, smit, Kumst, blivt, blyvet, drådnägelen</li>
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
      <li>DET: de, en, den, dat, der, et, dee, dem, des, eynen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: disse, dissen</li>
      <li>PRON: dat, dee, det, dit, dát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: man, eyne, eyn, eynen, eyner, wat, yts</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Int
    <ul>
      <li>PRON: wat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Neg,Tot
    <ul>
      <li>DET: gin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: wat, hwat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>PRON: wat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: gyn, keyn, keyne, kyn, kyne, kynen</li>
      <li>PRON: niks, keynen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: syn, myn, syne, eare, myne, mynen, Unse, des, dyn, höären</li>
      <li>PRON: ik, et, hee, my, sik, dat, see, y, em, myn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: enander, mekare, sik</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: dee, den, wat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: alle, al, allens, elk, jeydet</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: dree, eyn, twey, vyv</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: syn, syne, myn, eare, myne, mynen, Unse, dyn, höären, juwen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sik</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: hebbe, sin, skölde, was, wil, hadde, heb, kon, müchte, sul</li>
      <li>AUX-Fin: skölde, wil, müchte, sin, sul, wul</li>
      <li>PRON: ik, my, myn, mik, wy, et, ikke</li>
      <li>VERB: hadde, dacht, las, segge, bedanke, do, dors, gåt, hebben, heeld</li>
      <li>VERB-Fin: hadde, hebben, kryge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: y, du, jy, ow, uw, e</li>
      <li>VERB: Haal, Kumst, Sü, Süg, bruukst, do, geavet, heb, hebben, hest</li>
      <li>VERB-Fin: Haal, Kumst, Süg, geavet, hebben, skenket, skynst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: was, is, hadde, kon, het, weer, kan, konnen, weren, willet</li>
      <li>AUX-Fin: is, was, het, weer, hadde, kan, willet, hadden, hevt, konnen</li>
      <li>PRON: et, hee, dat, sik, see, em, dee, det, e, hum</li>
      <li>VERB: hadde, leyt, saeten, nam, stun, geit, ging, gung, hevt, höyrde</li>
      <li>VERB-Fin: leyt, hadde, hevt, höyrt, segt, sit, smit, stund, bedüdde, blivt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>PRON: Jy</li>
      <li>VERB-Fin: geavet, skenket</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: Syn, höären</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: syn, syne, synen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: eare, Unse, unsen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: syn, syne, myn, myne, mynen, dyn, höären, synen</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: in, van, mid, up, an, by, to, vöär, uut, nå</li>
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
          <li>X: decipi, mundus, vult, Amicorum, Batavorum, De, Iovivat, Prosaluut, arum, bedrogen</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Inf
        <ul>
          <li>PART: te, to</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: nich, neet, en</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>DET: myn, myne, mynen, Unse, unsen</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: dyn, juwen, ouw, uw</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: syn, syne, eare, höären, synen</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Aux
        <ul>
          <li>AUX: het, is, wil, hadde, kan, skölde, willet, hadden, hebben, hevt</li>
          <li>AUX-Fin: het, is, wil, hadde, kan, skölde, willet, hadden, hevt, konnen</li>
          <li>AUX-Inf: hebben</li>
        </ul>
      </li>
      <li>Cop
        <ul>
          <li>AUX-Fin: is, was, weer, sint, weren</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>AUX-Fin: kun, künne, möcht, sul, wul</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: weasen.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, künnen, willen, weasen, sköälen, möten, möägen, werden.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, weasen.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (19)</li>
      <li>VERB--PRON-Nom (65)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Nom (21)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Nom (33)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Nom (27)</li>
      <li>VERB-Part--NOUN-Nom (6)</li>
      <li>VERB-Part--PRON-Nom (12)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (23)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Acc (15)</li>
      <li>VERB--PRON-Acc,Dat (10)</li>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (20)</li>
      <li>VERB-Fin--PRON-Acc (8)</li>
      <li>VERB-Fin--PRON-Acc,Dat (6)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN-Acc (11)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(vöär) (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (9)</li>
      <li>VERB-Inf--PRON-Acc,Dat (3)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Part--NOUN-Acc (9)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--PRON-Acc,Dat (4)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc,Dat (6)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--PRON-Acc,Dat (3)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Dat (2)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 5 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: besteaden sik, eaten sik, lägeren sik, setten sik, vorwunderen sik</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 6 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: låten sik, koaken sik, maken sik, setten sik, weaten sik, öäverdenken sik</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>aux:pass</a>, <a>compound:prt</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
