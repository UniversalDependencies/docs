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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnds_lsdc212)<br />
Download all treebanks: [UD 2.12](/#download)

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
<li>This corpus contains 95 sentences, 2913 tokens and 2935 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 421 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 6 types of words that contain both letters and punctuation. Examples: E., G., Luoden-heide, Röm., St., ao.</li>
</ul>

<ul>
<li>This corpus contains 13 multi-word tokens. On average, one multi-word token consists of 2.69 syntactic words.</li>
<li>There are 8 types of multi-word tokens. Examples: to'm, im, to'n, Kumste, in'en, in't, ten, van'er.</li>
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
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): al, alle, dat, de, dee, dit, du, dår, elk, enander, et, eyn, eyner, hee, ichts, ik, jeyde, jy, keynen, man, mekare, my, niks, see, sik, wat, wer, wy</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as determiners (DET): allerley, dat, de, dee, den, disse, dyn, ear, en, et, geyn, höär, juw, keyn, myn, syn, un, uns</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: dat, de, dee, et</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): hebben, künnen, möten, möägen, sköälen, weasen, werden, willen</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as AUX and sometimes as VERB: hebben, künnen, möten, möägen, werden, willen</li>
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
    <li>AUX: syn, weasen, hebben, künnen, warden</li>
    <li>VERB: doon, seggen, holden, koupen, seen, drägen, hebben, loupen, råden, sitten</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: weasd</li>
    <li>VERB: ebracht, gån, maked, Beskreaven, afemaked, ankündigd, antwoorded, anvungen, beknütted, bewysd</li>
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
      <li>ADJ: ander, akademiske, andere, düslike, eyrste, goden, grout, hougen, junge, leve</li>
      <li>DET: de, der, en, den, syne, myn, ne, syn, dee, des</li>
      <li>NOUN: sake, stad, hand, syde, tyd, vroide, vrouwe, arbeid, nacht, nåberskop</li>
      <li>NUM: eyne</li>
      <li>PRON: dee, see, höär</li>
      <li>PROPN: Hente, Havel, Luoden-heide, Marigge, Nicolaikarke, St.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: olden</li>
      <li>DET: de, dee, des, en, gyn</li>
      <li>NOUN: gek, nachts, noud, tyden</li>
      <li>PRON: dee, eyne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc,Neut
    <ul>
      <li>DET: syn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: armen, leven, lutherske, 31., Weynige, anderen, anseenliksten, böyse, drüdden, düchtige</li>
      <li>DET: de, den, en, m, dee, dem, eynen, mynen, n, nen</li>
      <li>NOUN: man, buur, junge, böyme, dag, dokter, gelouve, gelouven, hiamel, houpe</li>
      <li>PRON: hee, dee, den, em, e, hum, deane, ean, eynder, eyne</li>
      <li>PROPN: Hiärmen, Andrees, Bennad, Claus, Friedrich, Harms, Hein, Henrick, Krisjaon, Lulef</li>
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
      <li>ADJ: vöärneame, Leve, aardig, ander, anders, beiden, beste, besten, drüdde, eiselik</li>
      <li>DET: en, dat, et, de, n, t, allerley, den, ear, keyn</li>
      <li>NOUN: lüde, kinder, lüdens, mål, bittyn, ende, huus, lüüd, ouge, ougen</li>
      <li>NUM: eynen</li>
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
      <li>ADJ: olden, Leve, Weynige, anderen, anseenliksten, beiden, düslike, fyne, fynen, geleyrde</li>
      <li>AUX: sint, weren, willet, konnen, köänet, hadden, mus, sküllet, sullen, warden</li>
      <li>AUX-Fin: sint, willet, hadden, konnen, sullen, warden, weren, wullen</li>
      <li>DET: de, den, syne, eare, en, Dat, dee, keyne, unsen, uw</li>
      <li>NOUN: lüde, kinder, böyme, pearde, smartsen, arms, beyne, dage, dagen, daler</li>
      <li>PRON: see, dee, alle, wy, hee, mekare, se, sik</li>
      <li>VERB: saeten, hebben, anhebbet, blyvet, brennen, drådnägelen, döppen, gnageden, gåt, hove</li>
      <li>VERB-Fin: hebben, blyvet, drådnägelen, hove, koamet, kwaemen, loupen, maket, sadelet, saeten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ander, eyrste, armen, grout, lutherske, veal, 31., aardig, akademiske, andere</li>
      <li>AUX: is, was, hadde, het, kon, wardt, weer, wil, hebbe, kan</li>
      <li>AUX-Fin: is, was, het, weer, wil, hadde, kan, skölde, hevt, kun</li>
      <li>DET: de, en, den, dat, der, et, syn, m, myn, dee</li>
      <li>NOUN: sake, buur, man, stad, hand, junge, syde, tyd, vroide, vrouwe</li>
      <li>NUM: eyne, eynen</li>
      <li>PRON: ik, et, hee, dat, dee, my, wat, man, sik, em</li>
      <li>PROPN: Marigge, Jüsken, Kiel, Wiesken, Adolf, Anton, Dithmarschen, Dreier, E., G.</li>
      <li>VERB: hadde, leyt, höyrt, kumt, nam, sea, segt, stun, Sü, dacht</li>
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
      <li>ADJ: aardig, andere, beiden, drüdden, düchtige, enkele, eyrste, fynen, ganses, geistlike</li>
      <li>DET: de, en, den, dat, syn, et, unsen, dee, eare, eynen</li>
      <li>NOUN: bittyn, gek, korv, pearde, rad, sake, vroide, aldaagsktüüg, arvdeyl, baas</li>
      <li>PRON: et, dat, niks, wat, den, hum, nist, see, al, alle</li>
      <li>PROPN: Garrelt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Dat
    <ul>
      <li>ADJ: ander, vöärneame, akademiske, anseenliksten, armen, eyrste, gemeynen, hunderdjärige, katoolsk, leve</li>
      <li>DET: de, den, en, syne, dat, et, myn, dyn, iaren, nen</li>
      <li>NOUN: stad, buur, man, syde, vroidenvest, aerde, beyne, bloudtügen, bookhandeling, dysen</li>
      <li>NUM: hunderd</li>
      <li>PRON: sik, my, myn, em, enander, ow, al, eynen, höär, uw</li>
      <li>PROPN: Havel, Luoden-heide, St., Zütphen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: olden, 31., anderen, besten, eyrste, glönnigen, goden, grynenden, leven</li>
      <li>DET: der, m, n, dem, den, En, de, er, eyner, mynen</li>
      <li>NOUN: ougen, ende, houpe, barge, deyl, doude, eyke, fitsen, gelouven, god</li>
      <li>NUM: eyne, eynen</li>
      <li>PRON: em, mik, my, deane</li>
      <li>PROPN: Marigge, Nicolaikarke</li>
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
      <li>ADJ: ander, lutherske, völle, Leve, anderen, armen, beste, böyse, drüdde, düslike</li>
      <li>DET: de, en, dat, dee, et, syne, myn, ne, syn, Unse</li>
      <li>NOUN: arbeid, buur, gelouve, junge, kinder, lüde, lüdens, lüüd, sake, tyd</li>
      <li>NUM: tein</li>
      <li>PRON: ik, et, hee, dee, see, dat, y, man, wat, alle</li>
      <li>PROPN: Hiärmen, Andrees, Hein, Henrick, Jouke, Krisjaon, Lulef, Röyverbarg, oktober</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: de, den, dat, der, et, en, m, dee, n, dem</li>
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
      <li>ADJ: Later, duurliker, eernsthafter, naeger, seaker, vröer, wyder</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: good, byster, grout, houg, kold, natüürlik, sat, ander, völle, Hard</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: eyrste, best, anseenliksten, beste, besten, ryksten, sköynsten, wennigste</li>
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
      <li>VERB-Part: ebracht, gån, maked, Beskreaven, afemaked, ankündigd, antwoorded, anvungen, beknütted, bewysd</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Sü, Haal, Süg, geavet, kom, låt, skenket, vertellet</li>
      <li>VERB-Fin: Haal, Süg, geavet, skenket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: is, was, hadde, het, kon, wardt, wil, hebbe, sint, weer</li>
      <li>AUX-Fin: is, was, het, weer, wil, hadde, kan, sint, skölde, willet</li>
      <li>VERB: hadde, leyt, saeten, hebben, höyrt, kumt, nam, sea, segt, stun</li>
      <li>VERB-Fin: leyt, hadde, hebben, hevt, höyrt, segt, sit, smit, stund, Kumst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Sub
    <ul>
      <li>AUX: hadde, kon, mus, sol, wol, wul</li>
      <li>VERB: sat, wol, wüs</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: möchte, künne, möcht, weer, wörde</li>
      <li>AUX-Fin: künne, möcht</li>
      <li>VERB: Bestünde, hädde, kaem, kaeme, leyt, miat</li>
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
      <li>AUX: was, hadde, kon, weer, weren, konnen, möchte, skölde, wardt, wul</li>
      <li>AUX-Fin: was, weer, hadde, skölde, hadden, konnen, kun, mochte, möcht, skul</li>
      <li>VERB: hadde, leyt, saeten, nam, stun, dacht, ging, gung, höyrde, kaem</li>
      <li>VERB-Fin: leyt, hadde, stund, bedüdde, gröäl, hädde, höyld, höyrde, kaem, kam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: is, het, wil, hebbe, sint, willet, kan, mot, mut, sin</li>
      <li>AUX-Fin: is, het, wil, kan, sint, willet, hevt, künne, mut, müchte</li>
      <li>VERB: hebben, höyrt, kumt, segt, do, geit, givt, hevt, hängt, kümt</li>
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
      <li>DET: de, en, den, dat, der, et, m, dee, n, dem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: dee, disse, dissen</li>
      <li>PRON: dee, dat, deane, det, dit, dát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: man, eyne, eyn, eynder, eynen, eyner, wat, yts</li>
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
      <li>PRON: wat, Wer, hwat</li>
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
      <li>DET: keyne, gyn, keyn, kyn, kyne, kynen</li>
      <li>PRON: niks, nist, keynen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: syn, myn, syne, unsen, eare, myne, mynen, Unse, des, dyn</li>
      <li>PRON: ik, et, hee, see, my, sik, dat, y, em, myn</li>
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
      <li>DET: syn, syne, myn, unsen, eare, myne, mynen, Unse, dyn, ear</li>
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
      <li>AUX: hebbe, sin, skölde, was, wil, wul, hadde, heb, hev, kon</li>
      <li>AUX-Fin: skölde, wil, müchte, sin, sul, wul</li>
      <li>PRON: ik, my, myn, wy, mik, et, ikke</li>
      <li>VERB: hadde, dacht, las, segge, bedanke, do, dors, gåt, hebben, heeld</li>
      <li>VERB-Fin: hadde, hebben, kryge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: y, du, jy, ow, uw, e</li>
      <li>VERB: Sü, Haal, Kumst, Süg, bruukst, do, geavet, heb, hebben, hest</li>
      <li>VERB-Fin: Haal, Kumst, Süg, geavet, hebben, skenket, skynst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: is, was, hadde, het, kon, wardt, weer, willet, kan, konnen</li>
      <li>AUX-Fin: is, was, het, weer, hadde, kan, willet, hadden, hevt, konnen</li>
      <li>PRON: et, hee, see, sik, dat, em, dee, det, e, hum</li>
      <li>VERB: leyt, hadde, saeten, höyrt, kumt, nam, segt, stun, geit, ging</li>
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
      <li>DET: syn, syne, ear, synen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: unsen, eare, Unse, ear</li>
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
          <li>ADP: in, van, mid, an, to, by, up, vöär, uut, nå</li>
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
          <li>DET: myn, unsen, myne, mynen, Unse</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: dyn, juwen, ouw, uw</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: syn, syne, eare, ear, höären, synen</li>
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
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, künnen, willen, weasen, sköälen, möten, werden, möägen.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, weasen.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (25)</li>
      <li>VERB--PRON-Nom (78)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Nom (21)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Nom (33)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Nom (36)</li>
      <li>VERB-Part--NOUN-Nom (8)</li>
      <li>VERB-Part--PRON-Nom (18)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (29)</li>
      <li>VERB--NOUN-Acc,Dat-ADP(mid) (1)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (20)</li>
      <li>VERB--PRON-Acc,Dat (15)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (20)</li>
      <li>VERB-Fin--PRON-Acc (8)</li>
      <li>VERB-Fin--PRON-Acc,Dat (6)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN-Acc (17)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(vöär) (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (10)</li>
      <li>VERB-Inf--PRON-Acc,Dat (4)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Acc (11)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
      <li>VERB-Part--PRON-Acc,Dat (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--NOUN-Acc,Dat (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--PRON-Acc,Dat (4)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc,Dat (6)</li>
      <li>VERB-Inf--NOUN-Acc,Dat (1)</li>
      <li>VERB-Inf--PRON-Acc,Dat (3)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
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
  <li>This corpus contains 7 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: låten sik, entsluten sik, koaken sik, maken sik, setten sik, weaten sik, öäverdenken sik</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>aux:pass</a>, <a>compound:prt</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
