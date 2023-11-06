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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnds_lsdc213)<br />
Download all treebanks: [UD 2.13](/#download)

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

The UD Low Saxon LSDC dataset consists of sentences in 8 major Low Saxon dialect groups from both Germany and the Netherlands. These sentences are (or are to become) part of the LSDC dataset and represent the language from mostly the 19th and early 20th century in genres such as short stories, novels, speeches, letters and fairytales.




The first version of the UD Low Saxon LSDC dataset contained 18 Low Saxon (sub-)dialects from both Germany and the Netherlands represented by 2 sentences each and belonging to the domains of short stories, novels, speeches, letters and fairytales. Each sentence was chosen from a different text to present some of the variation within the different dialect groups. In the second version, 40 sentences from four Westphalian dialects, two from Germany and two from the Netherlands, were added. The coverage of other dialect groups will be improved in future releases. For the third version, we have raised the number of sentences to 190 and made slight modifications to the subgrouping of the dialects. The major dialect group is shown as the third segment of the sentence ID. The following dialects are included:
* BRA = Brandenburgish
* DNS = German North Saxon
* DWF = German Westphalian
* MVP = Mecklenburgish – West Pomeranian
* NNS = Dutch North Saxon
* NPR = Low Prussian
* NWF = Dutch Westphalian
* OFL = Eastphalian

Since there is no official interregional spelling, the interregional spelling suggestion used by e.g. the Dutch Low Saxon Wikipedia (_Nysassiske Skryvwyse_, described in more detail here: https://skryvwyse.eu/ (only in Low Saxon)) is used as a compromise for normalisation, but the original spelling of the source is included in the line "text_orig =" and a Middle Low Saxon lemma is added in the tenth column ("lemma_gml=xxx") in order to make the Modern Low Saxon data more easily comparable with the Middle Low Saxon data in the reference corpus "Referenzkorpus Mittelniederdeutsch/Niederrheinisch". For this reason, the Middle Low Saxon lemma forms largely follow the "Mittelniederdeutsches Handwörterbuch" by Agathe Lasch et al. like in the reference corpus. Middle Low Saxon lemmata are only added in the cases where there is an attestation in Middle Low Saxon, i.e. the word is either listed in the Handwörterbuch or is found in the reference corpus. Middle Low Saxon lemmata are still included if the word's meaning has changed, an in addition, we have done our best to create new complex word lemmata from known simplex words and reconstruct potential Middle Low Saxon forms for words which have not yet been attested at that stage of the language.

The first version of the dataset contained only sentences from copyright-free material from the 19th and early 20th century. Part of the sentences are already included in the first release of the LSDC dataset found here: https://github.com/Helsinki-NLP/LSDC/ See there for further information on the origin of the data. The other sentences originate mostly from Joh. A. Leopold's work 'Van de Schelde tot te Weichsel', a digitised version of which is accessible here: https://www.dbnl.org/titels/titel.php?id=leop008sche00 An exception constitutes the text 'Krisjaon Klaover' to be found in the Twentse Taalbank: http://www.twentsetaalbank.nl/docs/TWA.1894-Heinink-Krisjaon_Klaover-150.pdf These other sentences will be added to the next release of the LSDC dataset. The third version of the dataset also includes a few sentences from works by modern authors from which we have received permission to include small parts of their work in annotated corpora.

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

[acl](nds_lsdc-dep-acl.html) – [acl:relcl](nds_lsdc-dep-acl-relcl.html) – [advcl](nds_lsdc-dep-advcl.html) – [advmod](nds_lsdc-dep-advmod.html) – [amod](nds_lsdc-dep-amod.html) – [appos](nds_lsdc-dep-appos.html) – [aux](nds_lsdc-dep-aux.html) – [aux:pass](nds_lsdc-dep-aux-pass.html) – [case](nds_lsdc-dep-case.html) – [cc](nds_lsdc-dep-cc.html) – [ccomp](nds_lsdc-dep-ccomp.html) – [compound](nds_lsdc-dep-compound.html) – [compound:prt](nds_lsdc-dep-compound-prt.html) – [conj](nds_lsdc-dep-conj.html) – [cop](nds_lsdc-dep-cop.html) – [csubj](nds_lsdc-dep-csubj.html) – [det](nds_lsdc-dep-det.html) – [det:poss](nds_lsdc-dep-det-poss.html) – [discourse](nds_lsdc-dep-discourse.html) – [dislocated](nds_lsdc-dep-dislocated.html) – [expl](nds_lsdc-dep-expl.html) – [expl:pv](nds_lsdc-dep-expl-pv.html) – [fixed](nds_lsdc-dep-fixed.html) – [flat](nds_lsdc-dep-flat.html) – [iobj](nds_lsdc-dep-iobj.html) – [mark](nds_lsdc-dep-mark.html) – [nmod](nds_lsdc-dep-nmod.html) – [nmod:poss](nds_lsdc-dep-nmod-poss.html) – [nsubj](nds_lsdc-dep-nsubj.html) – [nsubj:pass](nds_lsdc-dep-nsubj-pass.html) – [nummod](nds_lsdc-dep-nummod.html) – [obj](nds_lsdc-dep-obj.html) – [obl](nds_lsdc-dep-obl.html) – [obl:agent](nds_lsdc-dep-obl-agent.html) – [orphan](nds_lsdc-dep-orphan.html) – [parataxis](nds_lsdc-dep-parataxis.html) – [punct](nds_lsdc-dep-punct.html) – [root](nds_lsdc-dep-root.html) – [vocative](nds_lsdc-dep-vocative.html) – [xcomp](nds_lsdc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 189 sentences, 4659 tokens and 4683 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 683 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 11 types of words that contain both letters and punctuation. Examples: 'e, 'n, 't, E., G., Luoden-heide, Röm., St., ao., gir-af-geskigde, vyv-</li>
</ul>

<ul>
<li>This corpus contains 15 multi-word tokens. On average, one multi-word token consists of 2.60 syntactic words.</li>
<li>There are 10 types of multi-word tokens. Examples: to'm, im, to'n, Kumste, am, bym, in'en, in't, ten, van'er.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): en, neet, nich, nit, te, to</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as pronouns (PRON): Hiärmen, al, alle, alles, ander, dat, de, dee, dit, du, dår, dê, elk, enander, et, eyn, eyner, eynig, hee, ichts, ik, jeyde, jy, keynen, man, mekare, my, niks, see, sik, wat, wee, wekker, wer, wy</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as determiners (DET): al, alle, allerley, de, dee, den, disse, dyn, ear, en, et, geyn, höär, juw, keyn, myn, neyn, syn, un, uns</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: al, alle, de, dee, et</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): doon, hebben, künnen, möten, möägen, sköälen, weasen, werden, willen</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: doon, hebben, künnen, möten, möägen, weasen, werden, willen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: is, was, het, sint, weer, wil, hadde, kan, skölde, willet</li>
    <li>VERB: leyt, hadde, hebben, hevt, höyrt, segt, sit, smit, stund, Haal</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: syn, weasen, hebben, künnen, warden, werden</li>
    <li>VERB: seen, seggen, doon, holden, koupen, geaven, vrågen, drägen, hangen, hebben</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: vorlåten, vorvreaten</li>
    <li>AUX: weasd, west, worden</li>
    <li>VERB: giaven, gån, worden, ebracht, maked, Beskreaven, afemaked, afklopped, ankündigd, anskriaden</li>
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
      <li>ADJ: ander, junge, akademiske, andere, düslike, eyrste, gladde, goden, grout, hougen</li>
      <li>DET: de, der, en, syne, myn, ne, dear, den, syn, alle</li>
      <li>NOUN: vrouwe, stad, sake, tyd, syde, hand, tåfel, vroide, arbeid, dumheid</li>
      <li>NUM: eyne</li>
      <li>PRON: dee, see, ear, höär</li>
      <li>PROPN: Hente, Havel, Luoden-heide, Marigge, Nicolaikarke, St., Trina</li>
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
      <li>ADJ: anderen, armen, leven, lutherske, 31., Weynige, anseenliksten, belangryke, beste, besten</li>
      <li>DET: de, den, en, dem, m, eynen, dee, syn, synen, mynen</li>
      <li>NOUN: heyre, man, buur, god, küänig, dage, junge, kearl, apostel, böyme</li>
      <li>PRON: hee, dee, em, den, man, en, hum, eyne, he, wel</li>
      <li>PROPN: Hiärmen, Andrees, Bennad, Claus, Friedrich, Harms, Hein, Henrick, Krisjaon, Lulef</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>NOUN: bast, minske, minsken, noorden, vlas, westen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: eyrste, leve, vöärneame, aardig, ander, anders, beiden, beste, besten, drüdde</li>
      <li>ADJ-Part: vorvreaten</li>
      <li>DET: en, dat, de, et, syn, myn, juwe, n, 'n, 't</li>
      <li>NOUN: lüde, mål, broud, kinder, lüdens, pår, woord, wöörde, bittyn, ding</li>
      <li>NUM: eyn, eynen</li>
      <li>PRON: et, dat, wat, niks, al, det, alles, allens, dit, dát</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: olden, anderen, goden, Leve, Weynige, anseenliksten, beiden, belangryke, düslike, düütske</li>
      <li>AUX: sint, weren, willet, hadden, konnen, köänet, sküllet, hevvet, könden, können</li>
      <li>AUX-Fin: sint, willet, hadden, konnen, sullen, warden, weren, wullen</li>
      <li>DET: de, syne, den, dyne, eare, en, juwe, Dat, alle, allen</li>
      <li>NOUN: lüde, kinder, wöörde, Slaumayers, böyme, dage, handsken, minsken, pearde, smartsen</li>
      <li>PRON: see, dee, wy, alle, juw, uus, hee, jy, nen, se</li>
      <li>VERB: saeten, hebben, Höyrt, anhebbet, atten, brennen, deaden, denket, drådnägelen, döppen</li>
      <li>VERB-Fin: hebben, drådnägelen, hove, koamet, kwaemen, loupen, maket, sadelet, saeten, seaden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>PRON: y, jy, uw</li>
      <li>VERB: gå, hebbet, weat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ander, eyrste, leve, anderen, armen, beste, besten, grout, halve, junge</li>
      <li>ADJ-Part: vorvreaten</li>
      <li>AUX: is, was, het, hadde, wil, kon, wol, hevt, kan, wardt</li>
      <li>AUX-Fin: is, was, het, weer, wil, hadde, kan, skölde, hevt, kun</li>
      <li>DET: de, en, den, dat, der, et, syn, myn, syne, dem</li>
      <li>NOUN: heyre, vrouwe, stad, man, sake, tyd, buur, god, küänig, syde</li>
      <li>NUM: eyne, eynen</li>
      <li>PRON: ik, et, hee, dee, dat, my, wat, sik, man, em</li>
      <li>PROPN: Marigge, Daniel, Jesus, Josua, Jüsken, Kiel, Marleen, Wiesken, Adolf, Anton</li>
      <li>VERB: hadde, leyt, sea, segge, wus, het, höyrt, kaem, kam, keyk</li>
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
      <li>ADJ: aardig, andere, anderen, beiden, drüdden, düchtige, düütske, enkele, eygene, eyrste</li>
      <li>ADJ-Part: vorvreaten</li>
      <li>DET: de, en, den, dat, syn, et, eynen, syne, ne, unsen</li>
      <li>NOUN: woord, bittyn, broud, dumheid, gek, handsken, korv, last, pearde, pår</li>
      <li>PRON: et, dat, wat, niks, en, see, dee, den, hum, nist</li>
      <li>PROPN: Garrelt, weag</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Dat
    <ul>
      <li>ADJ: ander, eyrste, leve, vöärneame, akademiske, anseenliksten, armen, belangryke, gemeynen, goden</li>
      <li>DET: de, den, en, dat, myn, et, syne, synen, alle, dyn</li>
      <li>NOUN: man, stad, buur, syde, vroidenvest, Strauß, Vogel, achterhöörn, aerde, auwe</li>
      <li>NUM: hunderd</li>
      <li>PRON: sik, my, em, dy, myn, juw, uus, al, enander, ow</li>
      <li>PROPN: Havel, Luoden-heide, St., Trina, Zütphen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: besten, goden, olden, 31., anderen, eyrste, eyrsten, glönnigen, grynenden, leven</li>
      <li>DET: der, dem, m, n, dear, den, me, mynen, 'n, En</li>
      <li>NOUN: ougen, ende, gemeynde, geslächt, houpe, stad, tyd, volke, baanhoave, barge</li>
      <li>NUM: eyne, eynen</li>
      <li>PRON: em, mik, my, nen, allen, deane, eame, ear</li>
      <li>PROPN: Marigge, Nicolaikarke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: des, deas, en</li>
      <li>NOUN: nachts, åvends, moders, sündags, vadders</li>
      <li>PROPN: Reinekens, Winkels</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ander, anderen, beste, junge, leve, lutherske, olden, völle, armen, böyse</li>
      <li>DET: de, en, dat, myn, syn, et, syne, dee, dyne, ne</li>
      <li>NOUN: heyre, vrouwe, God, küänig, lüde, arbeid, buur, ding, gelouve, junge</li>
      <li>NUM: tein, eyn</li>
      <li>PRON: ik, dee, et, hee, see, dat, man, wy, wat, y</li>
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
      <li>DET: de, den, dat, der, et, dem, m, en, dee, n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: en, ne, eynen, nen, den, eyne, eyner</li>
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
      <li>ADJ: naeger, Later, duurliker, eernsthafter, meyr, seaker, smaller, swäkker, vröer, wyder</li>
      <li>ADV: leverst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: good, byster, veal, eigenlik, gans, grout, houg, kold, leve, möde</li>
      <li>ADJ-Part: vorlåten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: eyrste, best, besten, anseenliksten, beste, ryksten, sköynsten, wennigste, äldsten</li>
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
      <li>VERB: Sü, Haal, Maak, Süg, geavet, gelöyvet, kom, låt, skenket, slutet</li>
      <li>VERB-Fin: Haal, Süg, geavet, skenket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: is, was, het, hadde, sint, wil, kon, willet, hevt, kan</li>
      <li>AUX-Fin: is, was, het, sint, weer, wil, hadde, kan, skölde, willet</li>
      <li>VERB: hadde, leyt, sea, segge, höyrt, saeten, wus, hebben, het, kam</li>
      <li>VERB-Fin: leyt, hadde, hebben, hevt, höyrt, segt, sit, smit, stund, Kumst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Sub
    <ul>
      <li>AUX: hadde, kon, künst, mus, mussen, sol, wol, wul, wöör</li>
      <li>VERB: sat, wol, wüs</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: möchte, können, künne, möcht, weer, wörde</li>
      <li>AUX-Fin: künne, möcht</li>
      <li>VERB: Bestünde, hädde, kaem, kaeme, leyt, make, miat, setten, tröyste</li>
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
      <li>ADJ-Part: vorlåten, vorvreaten</li>
      <li>AUX: was, hadde, kon, wol, weer, weren, wöör, had, hadden, konnen</li>
      <li>AUX-Fin: was, weer, hadde, skölde, hadden, konnen, kun, mochte, möcht, skul</li>
      <li>AUX-Part: west, worden</li>
      <li>VERB: hadde, leyt, giaven, saeten, sat, sea, worden, wus, kaem, kam</li>
      <li>VERB-Fin: leyt, hadde, stund, bedüdde, gröäl, hädde, höyld, höyrde, kaem, kam</li>
      <li>VERB-Part: giaven, worden, afklopped, anskriaden, ansmeard, antoagen, betaald, bliaven, dån, döärchmaked</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: is, het, sint, wil, willet, hevt, kan, hebbe, hev, bis</li>
      <li>AUX-Fin: is, het, sint, wil, kan, willet, hevt, künne, mut, müchte</li>
      <li>VERB: segge, höyrt, hebben, het, kumt, let, segt, smit, blivt, do</li>
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
      <li>DET: de, en, den, dat, der, et, dem, m, ne, dee</li>
      <li>PRON: et</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: dease, dee, disse, dissen, düäse</li>
      <li>PRON: dee, dat, deane, det, dit, dát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: man, eyne, anderen, eyn, wat, eynder, eynen, eyner, eynige, yts</li>
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
      <li>PRON: wat, wel, Wee, Wekke, Wer, hwat</li>
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
      <li>DET: keyne, gin, gyn, keyn, kyn, kyne, kynen, ninne</li>
      <li>PRON: niks, nist, keynen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: syn, myn, syne, mynen, synen, juwe, unsen, dyne, ear, eare</li>
      <li>PRON: ik, et, hee, see, my, sik, dat, em, wy, y</li>
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
      <li>PRON: dee, den, wat, dat, hwekken</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alle, allen</li>
      <li>PRON: alle, al, alles, allen, allens, elk, jeydet</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: eyn, dree, acht, twey, vyv</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: eyrste, eyrsten, tweyde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: syn, syne, myn, mynen, synen, juwe, unsen, dyne, ear, eare</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sik, sy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: wil, hev, was, had, hadde, hebbe, sin, skölde, sküllet, wul</li>
      <li>AUX-Fin: skölde, wil, müchte, sin, sint, sul, wul</li>
      <li>PRON: ik, my, wy, myn, uus, mik, uns, et, hee, ikke</li>
      <li>VERB: segge, hadde, dacht, hevve, las, vråge, bedanke, do, dors, dröyp</li>
      <li>VERB-Fin: hadde, hebben, kryge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: bis, büst, hes, künnen, künst, skalst, willet</li>
      <li>PRON: y, du, dy, jy, juw, See, ow, uw, dik, e</li>
      <li>VERB: Sü, Haal, Kumst, Süg, bruukst, denket, do, geavet, gelöyvst, gå</li>
      <li>VERB-Fin: Haal, Kumst, Süg, geavet, hebben, skenket, skynst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: is, was, het, hadde, sint, kon, wol, hevt, wardt, weer</li>
      <li>AUX-Fin: is, was, het, weer, hadde, kan, willet, hadden, hevt, konnen</li>
      <li>PRON: et, hee, see, sik, dat, em, dee, en, hum, det</li>
      <li>VERB: hadde, leyt, höyrt, saeten, sea, wus, het, kaem, kam, keyk</li>
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
      <li>AUX: künnen, willet</li>
      <li>PRON: Jy, See, sik</li>
      <li>VERB: geavet, setten, skenket</li>
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
      <li>DET: syn, syne, myn, myne, mynen, dyn, höären, synen, uw</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: an</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: in, van, mid, to, an, up, by, vöär, nå, uut</li>
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
          <li>PART: nich, neet, nit, en</li>
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
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, künnen, willen, weasen, sköälen, möten, möägen, doon, werden.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, weasen.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Nom (50)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Acc,Dat (1)</li>
      <li>VERB--PRON-Nom (142)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Nom (21)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Nom (33)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Nom (5)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Nom (54)</li>
      <li>VERB-Part--NOUN-Nom (20)</li>
      <li>VERB-Part--PRON-Nom (36)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (57)</li>
      <li>VERB--NOUN-Acc,Dat (1)</li>
      <li>VERB--NOUN-Acc,Dat-ADP(mid) (1)</li>
      <li>VERB--NOUN-Acc-ADP(dale) (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Dat-ADP(in) (1)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (3)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-Acc (30)</li>
      <li>VERB--PRON-Acc,Dat (28)</li>
      <li>VERB--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (20)</li>
      <li>VERB-Fin--PRON-Acc (8)</li>
      <li>VERB-Fin--PRON-Acc,Dat (6)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN-Acc (30)</li>
      <li>VERB-Inf--NOUN-Acc,Dat-ADP(mid) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(vöär) (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (11)</li>
      <li>VERB-Inf--PRON-Acc,Dat (9)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Acc (19)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (11)</li>
      <li>VERB-Part--PRON-Acc,Dat (4)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--NOUN-Acc,Dat (2)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--PRON-Acc,Dat (6)</li>
      <li>VERB--PRON-Dat (2)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc,Dat (6)</li>
      <li>VERB-Inf--NOUN-Acc,Dat (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--PRON-Acc,Dat (5)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--PRON-Acc,Dat (7)</li>
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
  <li>This corpus contains 11 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: låten sik, maken sik, setten sik, entsluten sik, geaven sik, koaken sik, köypen sy, sitten sik, weaten sik, wunderen sik, öäverdenken sik</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: setten</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
