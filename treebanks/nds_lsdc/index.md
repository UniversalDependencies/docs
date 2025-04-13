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
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Janine Siewert.

Repository: [UD_Low_Saxon-LSDC](https://github.com/UniversalDependencies/UD_Low_Saxon-LSDC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnds_lsdc215)<br />
Download all treebanks: [UD 2.15](/#download)

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




The first version of the UD Low Saxon LSDC dataset contained 18 Low Saxon (sub-)dialects from both Germany and the Netherlands represented by 2 sentences each and belonging to the domains of short stories, novels, speeches, letters and fairytales. Each sentence was chosen from a different text to present some of the variation within the different dialect groups. In the second version, 40 sentences from four Westphalian dialects, two from Germany and two from the Netherlands, were added. The coverage of other dialect groups will be improved in future releases. For the third version, we have raised the number of sentences to 190 and made slight modifications to the subgrouping of the dialects. The **current fourth version** of the dataset contains 1,000 sentences, of which 500 are placed in the train and 500 in the test set. The dialect distribution between the train and the test set is not balanced yet and we plan to improve this in future releases.

The major dialect group is shown as the third segment of the sentence ID. The following dialects are included:
* BRA = Brandenburgish
* DNS = German North Saxon
* DWF = German Westphalian
* MVP = Mecklenburgish – West Pomeranian
* NNS = Dutch North Saxon
* NPR = Low Prussian
* NWF = Dutch Westphalian
* OFL = Eastphalian

Since there is no official interregional spelling, the interregional spelling suggestion used by e.g. the Dutch Low Saxon Wikipedia (_Nysassiske Skryvwyse_, described in more detail here: https://skryvwyse.eu/ (only in Low Saxon)) is used as a compromise for normalisation, but the original spelling of the source is included in the line "text_orig =" and a Middle Low Saxon lemma is added in the tenth column ("lemma_gml=xxx") in order to make the Modern Low Saxon data more easily comparable with the Middle Low Saxon data in the reference corpus "Referenzkorpus Mittelniederdeutsch/Niederrheinisch". For this reason, the Middle Low Saxon lemma forms largely follow the "Mittelniederdeutsches Handwörterbuch" by Agathe Lasch et al. like in the reference corpus. Middle Low Saxon lemmata are only added in the cases where there is an attestation in Middle Low Saxon, i.e. the word is either listed in the Handwörterbuch or is found in the reference corpus. Middle Low Saxon lemmata are still included if the word's meaning has changed, an in addition, we have done our best to create new complex word lemmata from known simplex words and reconstruct potential Middle Low Saxon forms for words which have not yet been attested at that stage of the language. The last few hundred sentences in the train set either do not contain Middle Low Saxon lemmata yet or they have been done automatically.

The first version of the dataset contained only sentences from copyright-free material from the 19th and early 20th century. Part of the sentences are already included in the first release of the LSDC dataset found here: https://github.com/Helsinki-NLP/LSDC/ See there for further information on the origin of the data. The other sentences originate mostly from Joh. A. Leopold's work 'Van de Schelde tot te Weichsel', a digitised version of which is accessible here: https://www.dbnl.org/titels/titel.php?id=leop008sche00 An exception constitutes the text 'Krisjaon Klaover' to be found in the Twentse Taalbank: http://www.twentsetaalbank.nl/docs/TWA.1894-Heinink-Krisjaon_Klaover-150.pdf These other sentences will be added to the next release of the LSDC dataset. Starting from the third version, the dataset also contains a few sentences from works by modern authors from which we have received permission to include small parts of their work in annotated corpora.


## Acknowledgments

The following people were involved in the creation of this dataset:

* Janine Siewert (data collection, selection and annotation)
* Jack Michael Rueter (annotation-related advice)

## References

If you use this treebank, please cite this paper:

```
@inproceedings{siewert-rueter-2024,
author = {Siewert, Janine and Rueter, Jack},
title = {% raw %}{{{% endraw %}The Low Saxon LSDC Dataset at Universal Dependencies{% raw %}}}{% endraw %},
booktitle = {Proceedings of the 2024 Joint International Conference on Computational
Linguistics, Language Resources and Evaluation},
series = {LREC-COLING 2024},
year = {2024},
month = {05},
address = {Torino, Italia},
organization = {ELRA Language Resources Association (ELRA) and the
International Committee on Computational Linguistics
(ICCL)},
pubstate = {forthcoming},
note = {accepted}
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

[acl](nds_lsdc-dep-acl.html) – [acl:relcl](nds_lsdc-dep-acl-relcl.html) – [advcl](nds_lsdc-dep-advcl.html) – [advmod](nds_lsdc-dep-advmod.html) – [amod](nds_lsdc-dep-amod.html) – [appos](nds_lsdc-dep-appos.html) – [aux](nds_lsdc-dep-aux.html) – [aux:pass](nds_lsdc-dep-aux-pass.html) – [case](nds_lsdc-dep-case.html) – [cc](nds_lsdc-dep-cc.html) – [ccomp](nds_lsdc-dep-ccomp.html) – [compound](nds_lsdc-dep-compound.html) – [compound:prt](nds_lsdc-dep-compound-prt.html) – [compound:redup](nds_lsdc-dep-compound-redup.html) – [conj](nds_lsdc-dep-conj.html) – [cop](nds_lsdc-dep-cop.html) – [csubj](nds_lsdc-dep-csubj.html) – [csubj:outer](nds_lsdc-dep-csubj-outer.html) – [dep](nds_lsdc-dep-dep.html) – [det](nds_lsdc-dep-det.html) – [det:poss](nds_lsdc-dep-det-poss.html) – [discourse](nds_lsdc-dep-discourse.html) – [dislocated](nds_lsdc-dep-dislocated.html) – [expl](nds_lsdc-dep-expl.html) – [expl:pv](nds_lsdc-dep-expl-pv.html) – [fixed](nds_lsdc-dep-fixed.html) – [flat](nds_lsdc-dep-flat.html) – [iobj](nds_lsdc-dep-iobj.html) – [list](nds_lsdc-dep-list.html) – [mark](nds_lsdc-dep-mark.html) – [nmod](nds_lsdc-dep-nmod.html) – [nmod:poss](nds_lsdc-dep-nmod-poss.html) – [nsubj](nds_lsdc-dep-nsubj.html) – [nsubj:pass](nds_lsdc-dep-nsubj-pass.html) – [nummod](nds_lsdc-dep-nummod.html) – [obj](nds_lsdc-dep-obj.html) – [obl](nds_lsdc-dep-obl.html) – [obl:agent](nds_lsdc-dep-obl-agent.html) – [obl:arg](nds_lsdc-dep-obl-arg.html) – [orphan](nds_lsdc-dep-orphan.html) – [parataxis](nds_lsdc-dep-parataxis.html) – [punct](nds_lsdc-dep-punct.html) – [reparandum](nds_lsdc-dep-reparandum.html) – [root](nds_lsdc-dep-root.html) – [vocative](nds_lsdc-dep-vocative.html) – [xcomp](nds_lsdc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 22615 tokens and 22639 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 3382 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 35 types of words that contain both letters and punctuation. Examples: 'n, 'm, 't, 'r, aller-, knee'e, pöäkel-up-stelten, 'e, 'ne, A., Bähnhas', CDU-fraktioon, E., G., Grote-Oog, Hiem-Hannes, Kasper-oum, Krus’, Luoden-heide, R., Röm., S., St., West-Indys, ao., botter-, c.q., dree'en, e-mailvorkeyr, gir-af-geskigde, kümmel-akwavit, midwochs-, twey-en-twintig, v., vyv-</li>
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
<li>This corpus contains 7 word types tagged as particles (PART): en, ne, neet, nich, nit, te, to</li>
</ul>

<ul>
<li>This corpus contains 44 lemmas tagged as pronouns (PRON): al, allebeide, allens, alles, ander, dat, dee, disse, dit, du, dyn, dår, elk, elkeyn, et, eyn, eynander, eyner, eynig, geyn, hee, ichts, ik, jenne, jy, keyn, keynminske, man, mekare, my, myn, männig, niks, nüms, see, sik, uns, wat, wee, wek, wy, yder, ydereyn, yts</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as determiners (DET): al, allerley, de, dee, desülve, disse, dyn, ear, elk, en, ergenden, et, eyn, eynig, geyn, juw, keyn, myn, männig, neyn, syn, sük, uns, yder, −</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: al, dee, disse, dyn, elk, et, eyn, eynig, geyn, keyn, myn, männig, uns, yder</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): doon, dörven, hebben, künnen, möten, möägen, sköälen, weasen, werden, willen</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: doon, dörven, hebben, künnen, möten, möägen, sköälen, weasen, werden, willen</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: syn, weasen, werden, hebben, hevven, können, künnen, mütten, süllen, warden</li>
    <li>VERB: seggen, maken, seen, gån, hebben, doon, holden, eaten, höyren, stån</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: vorkeyrd, vorknüpped, Doudeslån, Ofgeloupen, anedån, anvroaren, anweasen, bedrämmelden, bekend, dalevyrd</li>
    <li>AUX: west, worden, ewesd, must, weasd, weasen, ewest, kund, möcht, müst</li>
    <li>VERB: gån, dån, koamen, maked, höyrd, worden, giaven, had, seen, segd</li>
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
      <li>ADJ: olde, ganse, groute, ander, gode, grout, houge, lest, olden, andere</li>
      <li>ADJ-Part: terreatene, vordörde</li>
      <li>DET: de, der, en, ne, dee, syne, eyne, myn, syn, düsse</li>
      <li>NOUN: vrouwe, tyd, stad, döäre, syde, hand, werld, nacht, aerde, dochter</li>
      <li>NUM: eyne</li>
      <li>PRON: see, dee, ear, höär, haar, andere, diaser, mynde, änder</li>
      <li>PROPN: Hente, CDU, Havel, Luoden-heide, Marigge, Nicolaikarke, Slaumayerske, St., Trina</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: olde, Golden, heyle, lest, olden, smalle, vorweerden, weinig</li>
      <li>ADJ-Part: vorweerden</li>
      <li>DET: de, dee, en, Eynes, des, dissen, gyn, ne</li>
      <li>NOUN: tyd, heyrskop, nachts, tyden, Ploege, gek, gråten, kansen, last, leavtyden</li>
      <li>PRON: dee, eyne, Geyn, ander, andere, eyn, wek</li>
      <li>PROPN: Strüwingken</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc,Neut
    <ul>
      <li>DET: Myne, syn</li>
      <li>NOUN: andächtige, gardynen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Neut
    <ul>
      <li>ADJ: lakensk</li>
      <li>DET: en</li>
      <li>NOUN: jakke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: goden, grouten, olde, olden, anderen, gode, groute, andere, beiden, eyrste</li>
      <li>ADJ-Part: Ofgeloupen, bedrämmelden, gepokkeneerden, köften, uutsochten, vorgangen, vorkneapen, vorvealende</li>
      <li>DET: de, den, en, dem, dee, synen, myn, eynen, syne, syn</li>
      <li>NOUN: dag, man, god, her, buur, åvend, doud, junge, möller, kearl</li>
      <li>NUM: eynen, veer</li>
      <li>PRON: hee, dee, em, den, man, hum, en, üm, iame, eyner</li>
      <li>PROPN: Hiärmen, Andrees, Bennad, Claus, Friedrich, Gravenes, Harms, Hein, Henrick, Krisjaon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>ADJ: krütslike, olde, vorstandig</li>
      <li>DET: keyn, de, Alle, al, en, neyn, synen</li>
      <li>NOUN: menske, minske, minsken, bast, hokuspokus, lyv, mensken, minsker, noorden, vlas</li>
      <li>PRON: geyn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: eyrste, old, ander, andere, anders, gode, grout, heyle, leste, leve</li>
      <li>ADJ-Part: gegeaven, gemästed, terspleaten, uutgereaten, vordraides, vorvreaten, vöärgånde</li>
      <li>DET: dat, en, et, de, syn, myn, det, dem, 'n, den</li>
      <li>NOUN: lüde, huus, kinder, mål, geld, ougen, woord, ende, jår, leaven</li>
      <li>NUM: eyn, eynen, twey</li>
      <li>PRON: et, dat, wat, niks, det, alles, allens, dee, dit, nist</li>
      <li>PROPN: Eykertyn, Grote-Oog</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: olden, beiden, beide, gode, olde, andere, lange, eyrsten, goden, grouten</li>
      <li>ADJ-Part: vordörde, vöärgånde</li>
      <li>AUX: hadden, weren, sint, sünt, willet, hebbet, köänet, hebben, wassen, kunnen</li>
      <li>DET: de, dee, syne, den, alle, eare, keyne, myn, syn, uw</li>
      <li>NOUN: lüde, kinder, ougen, dage, buren, dagen, jåren, minsken, tyden, dinge</li>
      <li>NUM: dree'en, veer</li>
      <li>PRON: see, wy, dee, jy, sik, juw, uns, uus, alle, y</li>
      <li>PROPN: Berbiessies, Drüüksken, Dörchläuchten, Slaumayers</li>
      <li>VERB: saeten, sean, hebbet, gåt, hebben, hevvet, kaemen, ståt, doot, gungen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>AUX: kün, bint, künnet, heb, sünt, kan, mag, mö, müttet, sin</li>
      <li>NOUN: mark</li>
      <li>PRON: y, See, u, jy, uw, hee, höär, sik, wat, ü</li>
      <li>VERB: hebbet, doot, gå, gåt, seggen, weat, wordet, Hold, Koup, Låt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: olde, goden, grouten, groute, eyrste, ganse, gode, old, heyle, olden</li>
      <li>ADJ-Part: Ofgeloupen, bedrämmelden, gegeaven, gemästed, gepokkeneerden, köften, terreatene, terspleaten, uutgereaten, uutsochten</li>
      <li>AUX: is, was, het, hadde, weer, kan, wil, kun, wul, sal</li>
      <li>DET: de, en, den, dat, et, dem, myn, syn, dee, der</li>
      <li>NOUN: dag, vrouwe, man, tyd, god, her, buur, åvend, doud, huus</li>
      <li>NUM: eynen, eyn, eyne</li>
      <li>PRON: ik, hee, et, dat, my, dee, wat, sik, see, em</li>
      <li>PROPN: Pölz, Hiärmen, Anna, Koch, Andries, Gassen, Jesus, Willem, Hein, Annegyn</li>
      <li>VERB: hadde, sea, kam, het, sead, segt, gung, geit, kaem, segge</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: goden, groute, gode, grouten, olde, anderen, ganse, grout, heyle, lange</li>
      <li>ADJ-Part: Ofgeloupen, bedrämmelden, gemästed, gepokkeneerden, terspleaten, uutgereaten, uutsochten, vordörde, vorgangen, vorkneapen</li>
      <li>DET: de, en, den, dat, et, syn, syne, dee, myn, ne</li>
      <li>NOUN: dag, åvend, tyd, werld, woord, geld, leaven, ouge, ougen, dage</li>
      <li>NUM: veer, dree, eynen, twaalv, twey</li>
      <li>PRON: dat, wat, et, niks, see, dee, den, en, andere, ne</li>
      <li>PROPN: Eykertyn, Garrelt, dalailama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Dat
    <ul>
      <li>ADJ: andere, grouten, olden, eyrste, ander, houge, gode, golden, lest, leste</li>
      <li>ADJ-Part: gegeaven, vorweerden, vöärgånde</li>
      <li>DET: de, den, en, et, dat, myn, syn, syne, synen, dee</li>
      <li>NOUN: huus, man, stad, tyd, God, dag, döäre, syde, aerde, hüüs</li>
      <li>NUM: eyn, hunderd, dree, dree'en, eynen</li>
      <li>PRON: my, sik, em, dy, u, juw, uns, uus, hum, üm</li>
      <li>PROPN: CDU, Grote-Oog, Havel, Luoden-heide, St., Trina, Zütphen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: besten, goden, eyrsten, olden, anderen, grouten, grönen, leven, minste, 31.</li>
      <li>DET: dem, der, den, 'n, m, eynem, synem, 'm, dear, mynem</li>
      <li>NOUN: tyd, doude, möller, dag, ende, god, heyren, houpe, lande, ougen</li>
      <li>NUM: eyne, eynen, veer</li>
      <li>PRON: em, iame, dem, ear, öäme, iam, mik, my, nen, öäm</li>
      <li>PROPN: Marigge, Nicolaikarke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: anders, goder, nys, wits, öldesten</li>
      <li>DET: des, eynes, en, synes, 't, deas, der</li>
      <li>NOUN: åvends, nachts, dages, anderdages, broders, hoapeninge, junges, maargens, mensken, moders</li>
      <li>PRON: anders</li>
      <li>PROPN: Esaias, Mariekens, Reinekens, Winkels</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: olde, leve, old, beiden, gode, groute, olden, beide, ganse, grouten</li>
      <li>ADJ-Part: köften, terreatene, vordraides, vorvealende</li>
      <li>DET: de, en, dat, myn, dee, et, ne, syn, keyn, syne</li>
      <li>NOUN: lüde, vrouwe, her, man, God, buur, doud, junge, kearl, vader</li>
      <li>NUM: tein, eyn</li>
      <li>PRON: ik, hee, see, dee, et, dat, wy, y, du, wat</li>
      <li>PROPN: Hiärmen, Andrees, Gravenes, Heem, Hein, Henrick, Jouke, Krisjaon, Lulef, Slaumayerske</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: de, den, dat, et, dem, dee, der, det, en, des</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: en, ne, eyne, eynen, eyn, nen, den, e, eynem, 'm</li>
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
      <li>ADJ: meyr, beater, wyder, naeger, Later, lever, länger, minder, slechter, vröer</li>
      <li>ADV: meyr, eyrder</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: good, gans, olde, recht, goden, richtig, grouten, doud, vul, bange</li>
      <li>ADJ-Part: vorkeyrd, vorknüpped, Doudeslån, anedån, anvroaren, anweasen, bedrämmelden, bekend, egolded, ervroid</li>
      <li>ADV: völle, lange, heyldal, seyre, stille, tovrea, veal, vial</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: best, lest, besten, eyrste, leste, allerbelangrykste, beste, grötsten, leevst, letste</li>
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
      <li>AUX: syt, Sy</li>
      <li>VERB: see, sü, låt, giv, gåt, höyr, Haal, Maak, Seg, gå</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: is, was, het, hadde, weer, kan, wil, sint, kun, hadden</li>
      <li>VERB: hadde, sea, kam, het, sead, segt, gung, geit, segge, kaem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Sub
    <ul>
      <li>AUX: hadde, sul, was, weer, weren, wul, Solst, had, hadden, hädden</li>
      <li>VERB: wol, Seggen, angung, dea, had, kaemen, kreyg, plükkede, reisen, sat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: weer, möchte, sül, wöre, hädde, wolde, würd, dead, drövden, können</li>
      <li>VERB: hädde, höyren, kaem, kaeme, Bestünde, Låt, Låten, Skämen, deade, geave</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: vorkeyrd, vorknüpped, Doudeslån, Ofgeloupen, anedån, anvroaren, anweasen, bedrämmelden, bekend, dalevyrd</li>
      <li>AUX: was, hadde, weer, west, kun, hadden, weren, wul, had, kon</li>
      <li>AUX-Inf: west</li>
      <li>AUX-Part: west, worden, ewesd, must, weasen, ewest, kund, möcht, müst, wesd</li>
      <li>VERB: hadde, sea, kam, sead, gung, kaem, stund, had, kwam, sagde</li>
      <li>VERB-Inf: wedded</li>
      <li>VERB-Part: dån, koamen, gån, höyrd, maked, worden, giaven, segd, bleaven, geaven</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: helderseend, hülpbehövend, smunselend, spottend, vansülvspreakend, vorvealende, vöärgånde</li>
      <li>AUX: is, het, kan, wil, sint, sal, sünt, hev, heb, bin</li>
      <li>VERB: het, segt, geit, segge, weyt, hebbet, hevt, höyrt, heyt, ligt</li>
      <li>VERB-Part: wüst</li>
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
      <li>DET: de, en, den, dat, et, dem, dee, der, ne, det</li>
      <li>PRON: et, dat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: dee, düsse, dissen, düssen, dease, disse, düäse, düäsen, dat, dit</li>
      <li>PRON: dat, dee, det, den, dit, dem, disse, Düsse, dean, deane</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Prs
    <ul>
      <li>PRON: dat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: eyn, eyne, eynem, eynes, eynige, mannig, männig, ergendeyn, eynen, sük</li>
      <li>PRON: man, wat, anderen, eyne, eyner, eyn, andere, men, ander, eynen</li>
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
      <li>PRON: wat, wee, wel, wer, Hwekke, Wekke, hwat, hwekker, wen</li>
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
      <li>DET: gyn, keyn, keyne, keynen, kyn, nin, geyn, gin, kyne, kynen</li>
      <li>PRON: niks, nist, keynen, Geyn, geynt, keymes, keyn, keyner, nüms</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: myn, syn, syne, synen, uw, ear, dyn, myne, eare, dyne</li>
      <li>PRON: ik, hee, see, et, my, sik, wy, dat, em, y</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: enander, eynander, mekare, sik</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: dee, den, wat, dat, dem, hwekken, wek, welke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alle, al, olle, alles, elken, ydem, yder, ydere, allen, elke</li>
      <li>PRON: alle, alles, allens, al, allers, allet, olles, ydereyn, Elkeyn, allen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: twey, dree, eyn, veer, 14, acht, dusend, sös, tweyhunderd, veertein</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: eyrste, eyrsten, tweyde, siavende, twölvden, vövd</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: myn, syn, syne, synen, ear, uw, dyn, myne, eare, dyne</li>
      <li>PRON: myn, dyn, höär, mynde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sik, sek, sich, süch, sük, sy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: wil, hev, kan, bin, heb, was, had, hebbe, hevve, sal</li>
      <li>PRON: ik, my, wy, ek, uns, uus, mik, myn, ikke, we</li>
      <li>VERB: segge, hev, weyt, dacht, do, gelöyve, gå, hadde, heb, sat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1,3
    <ul>
      <li>PRON: See</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: büst, hest, kün, heb, bint, bis, hes, künnet, kanst, künnen</li>
      <li>PRON: y, du, jy, dy, u, juw, uw, dik, jit, See</li>
      <li>VERB: hest, hevvet, weytst, Sü, do, doot, geavet, gå, gåt, hebben</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2,3
    <ul>
      <li>AUX: sünt</li>
      <li>PRON: See, sik</li>
      <li>VERB: seggen, Låten, Skämen, Weaten, gelöyvet, gån, hebbet, höyren, kaemen, koamen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: is, was, het, hadde, weer, kan, hadden, kun, sint, weren</li>
      <li>PRON: hee, see, et, sik, dat, em, det, hum, ear, dee</li>
      <li>VERB: hadde, sea, het, kam, sead, segt, gung, geit, kaem, stund</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>AUX: sünt, künnen, syt, willet</li>
      <li>PRON: See, Jy, sik, ju</li>
      <li>VERB: seggen, Låten, Skämen, Weaten, geavet, gelöyvet, gån, gåt, hebbet, höyren</li>
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
          <li>ADP: to, an</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: in, van, up, mid, an, vöär, to, by, nå, med</li>
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
          <li>X: decipi, mundus, vult, Amicorum, Batavorum, De, Feststellung, Iovivat, Personalien, Pompadour</li>
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
          <li>PART: to, te</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: nich, neet, nit, ne, en</li>
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
          <li>AUX-Inf: hebben</li>
        </ul>
      </li>
      <li>Cop
        <ul>
          <li>AUX: is, was, weer, sint, weren</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>AUX: kun, künne, möcht, sul, wul</li>
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
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, weasen, künnen, willen, sköälen, möten, werden, möägen, doon, dörven.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, weasen.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-Acc (4)</li>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--NOUN-Nom (308)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB--PRON-Acc (4)</li>
      <li>VERB--PRON-Acc,Dat (6)</li>
      <li>VERB--PRON-Nom (862)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (2)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Nom (46)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc,Dat (4)</li>
      <li>VERB-Inf--PRON-Nom (259)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Nom (69)</li>
      <li>VERB-Part--PRON-Acc,Dat (3)</li>
      <li>VERB-Part--PRON-Nom (182)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-Acc (308)</li>
      <li>VERB--NOUN-Acc,Dat (3)</li>
      <li>VERB--NOUN-Acc,Dat-ADP(mid) (1)</li>
      <li>VERB--NOUN-Acc-ADP(dale) (2)</li>
      <li>VERB--NOUN-Dat (8)</li>
      <li>VERB--NOUN-Dat-ADP(in) (1)</li>
      <li>VERB--NOUN-Dat-ADP(nå) (1)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (13)</li>
      <li>VERB--PRON (3)</li>
      <li>VERB--PRON-Acc (194)</li>
      <li>VERB--PRON-Acc,Dat (121)</li>
      <li>VERB--PRON-Dat (6)</li>
      <li>VERB--PRON-Nom (9)</li>
      <li>VERB-Inf--NOUN-Acc (125)</li>
      <li>VERB-Inf--NOUN-Acc,Dat (2)</li>
      <li>VERB-Inf--NOUN-Acc,Dat-ADP(mid) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(vöär) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(åne) (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (65)</li>
      <li>VERB-Inf--PRON-Acc,Dat (39)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (76)</li>
      <li>VERB-Part--NOUN-Acc,Dat-ADP(in) (1)</li>
      <li>VERB-Part--NOUN-Acc,Dat-ADP(mid) (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (5)</li>
      <li>VERB-Part--PRON-Acc (61)</li>
      <li>VERB-Part--PRON-Acc,Dat (20)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--NOUN-Acc,Dat (2)</li>
      <li>VERB--NOUN-Dat (5)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB--PRON-Acc,Dat (57)</li>
      <li>VERB--PRON-Dat (9)</li>
      <li>VERB-Inf--NOUN-Acc,Dat (6)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--PRON-Acc,Dat (22)</li>
      <li>VERB-Inf--PRON-Dat (3)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc,Dat (3)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--PRON-Acc,Dat (20)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 39 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: skamen sik, vorwunderen sik, bangen sik, bekyken sik, besinnen juw, besinnen sik, besnorgelen sik, besteaden sik, denken sik, eaten sik, geaven et, holden uus, inslån et, keyren sik, kyken sik, lägeren sik, låten my, låten sek, låten sik, maken dy, maken sik, neamen sik, nådenken my, resolveren sik, setten ju, setten sik, smegen sik, stellen sik, swearen my, trekken sik, tyren sük, vallen et, vordragen dy, vorlåten sik, vorvlöken sik, vorwylen sik, vörderen sik, wearen sik, weaten sik</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 42 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: låten sik, stellen sik, draien sik, låten sek, maken sik, richten sik, setten sik, vortellen sik, vorwandelen sik, wunderen sik, anhandelen sik, bemöien süch, beperken sich, bringen sik, byten sik, entsluten sik, geaven sik, hebben sik, heisteren süch, helpen sik, höägen sik, inslachten sik, koaken sik, köypen sik, köypen sy, leggen sek, rekken süch, rennen sik, rögen sik, sitten sik, sküddelen sik, stöyten sik, tröysten sik, underholden sik, vorswearen sik, vroien sik, vöärneamen sik, weaten sik, wenden sik, winnen sik, wärmen sik, öäverdenken sik</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: vorwandelen</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>compound:redup</a>, <a>csubj:outer</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a></li>
</ul>
