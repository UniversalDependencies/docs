---
layout: base
title:  'UD_Slovenian-SST'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Slovenian SST

Language: [Slovenian](/sl/index.html) (code: `sl`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Kaja Dobrovoljc, Joakim Nivre.

Repository: [UD_Slovenian-SST](https://github.com/UniversalDependencies/UD_Slovenian-SST)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsl_sst214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-NC-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Slovenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Slovenian-SST/issues).
If you want to collaborate, please contact [kaja&nbsp;•&nbsp;dobrovoljc&nbsp;(æt)&nbsp;ff&nbsp;•&nbsp;uni-lj&nbsp;•&nbsp;si].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

The Spoken Slovenian Treebank (SST) is a manually annotated collection of transcribed audio recordings featuring spontaneous speech in various everyday situations. It includes 344 unique speech events (documents) amounting to approximately 10 hours of speech, encompassing a total of 6,104 utterances and 76,341 tokens.



Spoken Slovenian Treebank (SST) is a manually grammatically annotated sample of the [GOS reference corpus](http://hdl.handle.net/11356/1863) of spoken Slovenian. It contains transcribed audio recordings of monologic, dialogic and multi-pary spontaneous speech in different everyday situations, balanced so as to be representative of speaker demographics (sex, age, region, education), channels (TV, radio, telephone, personal contact) and communication settings (TV and radio shows, lectures, meetings, consultations, services, conversations between friends etc.).

The spelling, tokenization and segmentation principles follow the transcription guidelines of the reference corpus (Verdonik et al. 2013) with the syntactic trees spanning over individual utterances (semantically, syntactically and acoustically delimited units, roughly corresponding to written-like sentences). The annotation has been performed on top of normalized transcriptions, i.e. words with standardized spelling. To accommodate the structural and pragmatic particularities of spoken language data, such as self-repairs, fillers, discourse markers and parentheticals, we relied on the guidelines proposed by Dobrovoljc and Nivre (2016) and Dobrovoljc (2022).

As of UD release v2.14 in May 2024, the original version of the SST UD treebank (Dobrovoljc in Nivre 2016) has been partially revised and substantially extended with new data from GOS v2 (Verdonik et al. 2024), such as parliamentary debates, round tables and online events. The latest version of the SST treebank thus includes 6,104 utterances (76,341 tokens), produced by 676 speakers in 344 different speech events (48% public and 52% non-public tokens) amounting to approximately 10 hours of recordings.

The train-dev-test data split has been randomized on document-level. The CONLL-U files include links to original audio recordings, and information on the GOS speaker/event IDs, which can be used to retrieve additional metadata information from the original GOS corpus, such as the information on speaker demographics, speech event details or transcribed markers of prosody.

## Acknowledgments

We wish to thank all the collaborators who have helped with dependency annotation (Nives Hüll, Karolina Zgaga, Luka Terčon, Matija Škofljanec), JOS-MTE lemmatization and morphological annotation (Jaka Čibej, Tina Munda, Matija Škofljanec), data sampling (Darinka Verdonik, Nikola Ljubešić, Peter Rupnik), automatic pre-annotation (Luka Krsnik), JOS-to-UD morphology conversion (Jaka Ćibej), and guidelines consulting (Joakim Nivre). This work was financially supported by the Slovenian Research and Innovation Agency (grant no. Z6-4617 - [A Treebank-Driven Approach to the Study of Spoken Slovenian](https://spot.ff.uni-lj.si/en/), Young Researcher Programme 2013) and IC1207 COST Action PARSEME.


## References
* Kaja Dobrovoljc and Joakim Nivre. 2016. The Universal Dependencies Treebank of Spoken Slovenian. In: Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC’16), Portorož, Slovenia.

```
@inproceedings{dobrovoljc-nivre-2016-universal,
title = "The {U}niversal {D}ependencies Treebank of Spoken {S}lovenian",
author = "Dobrovoljc, Kaja and Nivre, Joakim",
booktitle = "Proceedings of the Tenth International Conference on Language Resources and Evaluation ({LREC}'16)",
year = "2016",
publisher = "European Language Resources Association (ELRA)",
url = "https://aclanthology.org/L16-1248",
pages = "1566--1573",
}
```

### Other
* Verdonik et al. 2013. Compilation, transcription and usage of a reference speech corpus: the case of the Slovene corpus GOS. Language Resources and Evaluation, 47(4):1031–1048.
* Verdonik et al. 2024. Gos 2: A New Reference Corpus of Spoken Slovenian. LREC-COLING 2024.
* Kaja Dobrovoljc. 2022. [Spoken Language Treebanks in Universal Dependencies: An Overview](https://aclanthology.org/2022.lrec-1.191/). LREC 2022.


## Changelog
<pre>
2024-04-11 v2.14
* Extended original dataset with 2,916 new sentences (46,853 tokens)
* Revised original dataset to implement guidelines changes (e.g. reparandum and discourse)
* Removed conj:extend label
* Added Gos2.1 document/sentence/token IDs for easier lookup
* Changed license to CC-BY-SA
* Updated readme


2023-04-12 v2.12
* Added metadata information on speaker ID and soundfile URL
* Renamed sentence IDs to comply with the GOS 2.0 nomenclature
* Corrected mistakes pertaining to Reflex and Polarity features
* Corrected inconsistent UPOS tags for non-lexical tokens (all PUNCT)
* Corrected some minor errors in manual annotation
* Removed old msd info from MISC and renamed 'word' to 'pronunciation'

2022-04-20 v2.10
* Manual relabelling of the few examples raising validation errors, mostly from goeswith to fixed

2019-10-30 v2.5
* Fixed legacy validation errors, i.e.
* Re-tagging the [gap]-like punctuation from X to PUNCT
* Re-attaching the [gap]-like punctuation causing non-projectivity
* Re-attaching leafs of unlike parents
* Fixing random mistakes in annotation

2015-01-30 v2.0
* Manual and automatic conversions from UDv1 to UDv2 guidelines
* Manual corrections of some mistakes in previous versions
* Resizing of train-dev-test (in accordance with CONLL ST 2017 requirements)
* Random utterance shuffling to ensure more representative genre distributions.

2015-03-15 v2.2
* Manual corrections of some mistakes in previous versions
* New (text-level) data randomization
* Resizing of train-test datasets (in accordance with CONLL ST 2018)
</pre>
## Acknowledgments

# Statistics of UD Slovenian SST

## POS Tags

[ADJ](sl_sst-pos-ADJ.html) – [ADP](sl_sst-pos-ADP.html) – [ADV](sl_sst-pos-ADV.html) – [AUX](sl_sst-pos-AUX.html) – [CCONJ](sl_sst-pos-CCONJ.html) – [DET](sl_sst-pos-DET.html) – [INTJ](sl_sst-pos-INTJ.html) – [NOUN](sl_sst-pos-NOUN.html) – [NUM](sl_sst-pos-NUM.html) – [PART](sl_sst-pos-PART.html) – [PRON](sl_sst-pos-PRON.html) – [PROPN](sl_sst-pos-PROPN.html) – [SCONJ](sl_sst-pos-SCONJ.html) – [VERB](sl_sst-pos-VERB.html) – [X](sl_sst-pos-X.html)

## Features

[Abbr](sl_sst-feat-Abbr.html) – [Animacy](sl_sst-feat-Animacy.html) – [Aspect](sl_sst-feat-Aspect.html) – [Case](sl_sst-feat-Case.html) – [Definite](sl_sst-feat-Definite.html) – [Degree](sl_sst-feat-Degree.html) – [Foreign](sl_sst-feat-Foreign.html) – [Gender](sl_sst-feat-Gender.html) – [Gender[psor]](sl_sst-feat-Gender-psor.html) – [Mood](sl_sst-feat-Mood.html) – [Number](sl_sst-feat-Number.html) – [Number[psor]](sl_sst-feat-Number-psor.html) – [NumForm](sl_sst-feat-NumForm.html) – [NumType](sl_sst-feat-NumType.html) – [Person](sl_sst-feat-Person.html) – [Polarity](sl_sst-feat-Polarity.html) – [Poss](sl_sst-feat-Poss.html) – [PronType](sl_sst-feat-PronType.html) – [Reflex](sl_sst-feat-Reflex.html) – [Tense](sl_sst-feat-Tense.html) – [Typo](sl_sst-feat-Typo.html) – [Variant](sl_sst-feat-Variant.html) – [VerbForm](sl_sst-feat-VerbForm.html)

## Relations

[acl](sl_sst-dep-acl.html) – [advcl](sl_sst-dep-advcl.html) – [advmod](sl_sst-dep-advmod.html) – [amod](sl_sst-dep-amod.html) – [appos](sl_sst-dep-appos.html) – [aux](sl_sst-dep-aux.html) – [case](sl_sst-dep-case.html) – [cc](sl_sst-dep-cc.html) – [cc:preconj](sl_sst-dep-cc-preconj.html) – [ccomp](sl_sst-dep-ccomp.html) – [conj](sl_sst-dep-conj.html) – [cop](sl_sst-dep-cop.html) – [csubj](sl_sst-dep-csubj.html) – [dep](sl_sst-dep-dep.html) – [det](sl_sst-dep-det.html) – [discourse](sl_sst-dep-discourse.html) – [discourse:filler](sl_sst-dep-discourse-filler.html) – [dislocated](sl_sst-dep-dislocated.html) – [expl](sl_sst-dep-expl.html) – [fixed](sl_sst-dep-fixed.html) – [flat](sl_sst-dep-flat.html) – [flat:foreign](sl_sst-dep-flat-foreign.html) – [flat:name](sl_sst-dep-flat-name.html) – [goeswith](sl_sst-dep-goeswith.html) – [iobj](sl_sst-dep-iobj.html) – [mark](sl_sst-dep-mark.html) – [nmod](sl_sst-dep-nmod.html) – [nsubj](sl_sst-dep-nsubj.html) – [nummod](sl_sst-dep-nummod.html) – [obj](sl_sst-dep-obj.html) – [obl](sl_sst-dep-obl.html) – [orphan](sl_sst-dep-orphan.html) – [parataxis](sl_sst-dep-parataxis.html) – [parataxis:discourse](sl_sst-dep-parataxis-discourse.html) – [parataxis:restart](sl_sst-dep-parataxis-restart.html) – [reparandum](sl_sst-dep-reparandum.html) – [root](sl_sst-dep-root.html) – [vocative](sl_sst-dep-vocative.html) – [xcomp](sl_sst-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 6104 sentences and 76341 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 312 types of words that contain both letters and punctuation. Examples: [name:personal], [name:surname], s-, z-, n-, j-, k-, p-, m-, t-, b-, po-, v-, [name:organisation], d-, o-, u-, na-, do-, š-, i-, [name:address], a-, ka-, pre-, re-, se-, ma-, ne-, pri-, za-, e-, ist-, l-, nek-, ni-, r-, raz-, Counter-Strike, RTV-ja, Zakonodajno-pravna, Zasp-a, am-, boogie-woogie, da-, dru-, g-, gos-, gospo-, hitro-</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM, PUNCT</li>
</ul>

<ul>
<li>This corpus contains 58 word types tagged as particles (PART): a, ajde, alora, arki, baje, baš, bogve, bržkone, celo, cirka, da, domala, edino, evo, glih, i, itak, ja, jel, kajne, kajneda, kao, koli, le, ma, menda, morda, morebiti, na, naj, najbrž, najsibo, ne, niti, no, pač, prav, pravzaprav, predvsem, ravno, samo, seveda, sicer, skoraj, skorajda, sploh, te, tipo, tudi, valjda, več, vsaj, vsekakor, zgolj, zlasti, še, šele, že</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as pronouns (PRON): isto, jaz, kaj, kar, karkoli, kdo, kdor, kdorkoli, le-ta, marsikaj, marsikdo, mnogokaj, name, nekaj, nekdo, nihče, nič, nobeden, on, oni, ovi, se, ta, te, ti, vame, vsakdo, zame, zase, što</li>
</ul>

<ul>
<li>This corpus contains 69 lemmas tagged as determiners (DET): dosti, dovolj, enak, enormno, isti, kak, kakršen, kakršenkoli, kakšen, kateri, katerikoli, koliko, kolikšen, majčkeno, malce, malo, manj, marsikateri, mnog, mnogo, moj, najin, največ, naš, nek, nekaj, nekakšen, nekateri, neki, nekšen, nikak, nikakršen, nič, njegov, njen, njihov, njun, noben, oba, obadva, oboj, ogromno, oni, ovi, par, pol, premnog, preveč, svoj, ta, taisti, tak, takle, takšen, tale, tisti, tolik, toliko, toti, tvoj, vaš, veliko, ves, več, vsak, vsakršen, četrt, čigav, čimveč</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: nekaj, nič, oni, ovi, ta</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): biti</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: biti</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: rekoč</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, so, sem, bi, smo, ni, bo, si, ste, bom</li>
    <li>VERB: je, vem, veš, mislim, recimo, so, ni, ima, pravi, imamo</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: biti</li>
    <li>VERB: biti, iti, narediti, reči, imeti, videti, povedati, priti, pomagati, govoriti</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: pozdravljeni, določene, spoštovani, ostali, prepričani, določeno, rečeno, znana, narejeno, odprta</li>
    <li>AUX: bilo, bila, bil, bili, bile</li>
    <li>VERB: bilo, rekel, bil, imeli, rekla, bila, imela, šla, imel, rekli</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: delat, gledat, nabirat, spat, Habit, jest, pomagat, ponavljat, študirat, žegnat</li>
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
      <li>ADJ: lepa, drugo, druga, sama, drugi, velika, dobra, prvi, določene, glavna</li>
      <li>ADJ-Part: določene, spoštovana, znana, odprta, sprejeta, izplačane, ostale, postavljena, spoštovane, zapuščene</li>
      <li>AUX-Part: bila, bile</li>
      <li>DET: te, ta, to, tej, teh, neko, tiste, vse, neke, take</li>
      <li>NOUN: strani, stvari, hvala, stvar, pot, šole, šoli, bolezni, šolo, država</li>
      <li>NUM: ena, eno, dve, tri, ene, eni, štiri, dveh, štirih, treh</li>
      <li>PRON: jo, jih, ona, ji, je, njo, njej, midve, nje, njimi</li>
      <li>PROPN: Sloveniji, Slovenija, Slovenije, Ljubljani, Ljubljane, Ljubljana, rtv, Evropi, Nemčiji, Nemčijo</li>
      <li>VERB-Part: rekla, bila, imela, šla, prišla, delala, videla, dala, naredila, mogla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: drugi, sam, dober, prvi, sami, lep, pozdravljeni, velik, cel, drugih</li>
      <li>ADJ-Part: pozdravljeni, spoštovani, ostali, prepričani, vnet, zaposleni, zaposlenih, znan, odraslih, pripravljen</li>
      <li>AUX-Part: bil, bili, bila</li>
      <li>DET: ta, tisti, vsi, tem, tega, neki, ti, teh, vsak, kakšen</li>
      <li>NOUN: dan, čas, način, otrok, ljudi, primer, redu, koncu, ljudje, evrov</li>
      <li>NUM: en, dva, enega, eden, tri, eni, trije, štiri, enim, štirje</li>
      <li>PRON: ga, mi, jih, kdo, on, vi, mu, jim, oni, nekdo</li>
      <li>PROPN: Mariboru, Agropop, Jones, Maribor, Tom, Triglav, David, Healy, Netflixu, Romov</li>
      <li>VERB-Part: rekel, bil, imeli, imel, rekli, šli, šel, bili, videl, mogel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: dobro, zanimivo, pomembno, glavnem, drugo, fajn, drugega, potrebno, mogoče, super</li>
      <li>ADJ-Part: rečeno, določeno, narejeno, povezano, preverjeno, ostalo, povezana, pripravljeno, znano, določena</li>
      <li>AUX-Part: bilo, bila</li>
      <li>DET: to, vse, tega, tem, tisto, nič, temu, tole, nekaj, svoje</li>
      <li>NOUN: bistvu, leta, leto, let, delo, letih, mesto, vprašanje, dela, mestu</li>
      <li>NUM: eno, tri, dve, enem, štiri, dveh, ena, tremi, enega, enih</li>
      <li>PRON: kaj, kar, nekaj, nič, ga, jih, česa, isto, karkoli, čemer</li>
      <li>PROPN: Celja, Celje, Celju, Pohorja, Slovenskem, Ivanovo, Šmarja, Štajerskem, Švedskem, Celjskega</li>
      <li>VERB-Part: bilo, šlo, prišlo, zgodilo, uspelo, dalo, trajalo, spremenilo, dogajalo, imelo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>NOUN: otroka, zdravnika, cimra, gospoda, črnca, avtorja, bolnika, kolega, lastnika, novinarja</li>
      <li>PROPN: Poljanška, Arturja, Boruca, Dušana, Francoza, Goloba, Igorja, Kikija, Kitajca, Kristusa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>NOUN: dan, način, primer, čas, teden, program, denar, mesec, glas, konec</li>
      <li>PROPN: Triglav, Bruselj, Harvard, Maribor, Paranoid, Counter-Strike, Okrešelj, Pekel, Rodik, Tržič</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: polna, blagovni, blagovnih, bolezenski, drugih, fer, grozna, ločeni, mali, medicinski</li>
      <li>ADJ-Part: ločeni, napisana, oživljena, predvidena, sprejeta, upognjena, zaposlena</li>
      <li>AUX-Fin: sta, sva, bova, bosta, nisva, bodita, nista</li>
      <li>AUX-Part: bila</li>
      <li>DET: oba, obe, ta, obeh, moja, ona, naša, obadva, onih, onima</li>
      <li>NOUN: leti, brata, otroka, dni, elementa, fanta, kovčka, meseca, milijona, oddelka</li>
      <li>NUM: dva, dve, dveh, dvema, ena</li>
      <li>PRON: midva, naju, onadva, vidva, midve, nama, ju, njima, jima, vidve</li>
      <li>PROPN: Afganistanca, Američanki, Italijanki, štajer</li>
      <li>VERB-Fin: sta, sva, imata, imava, delava, gledava, gresta, morata, bosta, bova</li>
      <li>VERB-Part: šla, imela, bila, prišla, gledala, dobila, našla, videla, začela, bili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: različne, sami, različnih, drugih, pozdravljeni, določene, zadnjih, nove, socialnih, dobri</li>
      <li>ADJ-Part: pozdravljeni, določene, ostali, prepričani, spoštovani, zaposlenih, odraslih, ostale, Združenih, določeni</li>
      <li>AUX-Fin: so, smo, ste, bomo, boste, bodo, niso, nismo, bojo, niste</li>
      <li>AUX-Part: bili, bile, bila</li>
      <li>DET: te, teh, vsi, ti, vse, vseh, tiste, tistih, tisti, katerih</li>
      <li>NOUN: let, stvari, ljudi, ljudje, otrok, evrov, leta, letih, dni, otroke</li>
      <li>NUM: tri, tisoč, pet, dvajset, trideset, deset, petnajst, štiri, sto, petdeset</li>
      <li>PRON: jih, mi, nas, nam, vi, vam, jim, vas, oni, nami</li>
      <li>PROPN: Romov, Božjah, Karavanke, slovenci, Italijani, Romi, Afganistanci, Izlake, Jesenice, Julijcih</li>
      <li>VERB-Fin: recimo, so, imamo, imajo, imate, vemo, moramo, gremo, smo, veste</li>
      <li>VERB-Part: imeli, rekli, šli, bili, videli, dobili, prišli, delali, dali, naredili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: drugi, dobro, drugo, prvi, sam, zanimivo, dober, lepa, pomembno, druga</li>
      <li>ADJ-Part: določeno, rečeno, narejeno, spoštovana, vnet, znan, znana, določenem, imenovani, napisano</li>
      <li>AUX-Fin: je, sem, ni, bo, si, bom, nisem, boš, nisi, bodi</li>
      <li>AUX-Part: bilo, bila, bil</li>
      <li>DET: to, ta, tega, vse, tem, tisto, neki, neko, tej, temu</li>
      <li>NOUN: bistvu, strani, dan, čas, način, leto, hvala, primer, redu, koncu</li>
      <li>NUM: en, eno, ena, enega, eden, ene, eni, enem, enim, enemu</li>
      <li>PRON: kaj, jaz, mi, ti, ga, kar, jo, me, meni, kdo</li>
      <li>PROPN: Sloveniji, Slovenija, Slovenije, Ljubljani, Ljubljane, Mariboru, Agropop, Ljubljana, rtv, Celja</li>
      <li>VERB-Fin: je, vem, veš, mislim, ni, ima, pravi, gre, zdi, bo</li>
      <li>VERB-Part: bilo, rekel, bil, rekla, bila, imela, imel, šla, šel, šlo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: drugo, različne, celo, dobro, dober, drugi, lep, novo, prvo, nove</li>
      <li>ADJ-Part: določene, določeno, izplačane, napisano, imenovano, narejeno, narezan, odrasle, ostale, razširjeni</li>
      <li>ADP: za, na, v, po, čez, skozi, med, nad, pod, pred</li>
      <li>DET: to, ta, vse, te, tisto, neko, svoje, neki, tiste, kakšen</li>
      <li>NOUN: dan, način, leto, primer, čas, leta, otroke, šolo, teden, delo</li>
      <li>NUM: eno, en, dva, tri, pet, dve, dvajset, tisoč, trideset, štiri</li>
      <li>PRON: kaj, ga, jih, jo, kar, me, nas, nekaj, te, vas</li>
      <li>PROPN: Nemčijo, Slovenijo, Ljubljano, Triglav, Ameriko, Bruselj, Harvard, Maribor, Paranoid, Celje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: novim, drugemu, ostalim, drugim, zaposlenim, zdravniški, zdravniškim, Evropski, Svetemu, celoviti</li>
      <li>ADJ-Part: ostalim, zaposlenim, določenemu, določenim, pokritemu, pospešeni, razgibanemu, sestavljeni, zaposlenemu</li>
      <li>ADP: proti, k, kljub, h, blizu, navkljub, preblizu</li>
      <li>DET: temu, vsem, tem, vsakemu, tej, našim, kateremu, mojemu, nekaterim, svojim</li>
      <li>NOUN: ljudem, bolniku, bogu, boleznim, bolnikom, otrokom, očetu, covidu, državam, gostom</li>
      <li>NUM: enemu, devetim, eni, štirim</li>
      <li>PRON: mi, si, ti, nam, meni, vam, jim, mu, ji, njemu</li>
      <li>PROPN: Ljubljani, Andreju, Antonu, Belvedurju, Dragonji, HPV-ju, Kamniku, Konjičanu, Luciji, Lutahrju</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: drugega, različnih, drugih, prve, slovenske, socialnih, javnega, novih, parlamentarne, prvega</li>
      <li>ADJ-Part: zaposlenih, imenovanega, lečečega, ljubljene, odprtih, odraslih, ostalih, zasedenih, Mešanega, Združenih</li>
      <li>ADP: od, do, iz, zaradi, brez, z, preko, s, poleg, znotraj</li>
      <li>DET: tega, teh, vseh, tistih, te, takega, nekega, neke, nekih, takih</li>
      <li>NOUN: let, leta, otrok, evrov, časa, ljudi, dni, strani, dela, minut</li>
      <li>NUM: ene, enega, dveh, enih, petih, treh, dvajsetih, dvanajstih, osmih, sedmih</li>
      <li>PRON: jih, ga, je, mene, česa, nas, vas, nje, njih, tebe</li>
      <li>PROPN: Slovenije, Ljubljane, Celja, Evrope, Romov, Antona, Avstrije, Dunaja, Maribora, Kranja</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: drugim, drugimi, drugo, kratkim, strokovno, porodniško, različnimi, tretjo, vremenskimi, Slovensko</li>
      <li>ADJ-Part: določenimi, govorjeno, improvizirano, obstoječimi, odraslimi, ohranjenimi, omejenimi, omenjeno, pridruženimi, sesekljanimi</li>
      <li>ADP: z, s, med, pred, pod, za, nad</li>
      <li>DET: tem, temi, katerimi, neko, vsemi, to, svojimi, takimi, katerim, tistim</li>
      <li>NOUN: leti, ljudmi, stresom, boleznimi, debelostjo, avtobusom, letom, pomočjo, avtom, besedami</li>
      <li>NUM: enim, eno, sedmimi, tremi, dvema, dvanajstimi, enaindvajsetimi, enainpetdesetimi, petdesetimi, sedemnajstimi</li>
      <li>PRON: sabo, nami, njimi, mano, njo, seboj, vami, njim, čim, njima</li>
      <li>PROPN: Branetom, Špelo, Štefko, Alenko, Alešem, Andersonom, Antoličičem, Avstrijci, Avstrijo, Bennyjem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: drugi, glavnem, prvi, zadnjem, prvem, osnovni, sami, zadnjih, akademskem, drugem</li>
      <li>ADJ-Part: določenem, Združenih, določenih, imenovani, končanem, odraslih, dani, določeni, govorjenem, govorjeni</li>
      <li>ADP: v, na, po, pri, o, ob, za</li>
      <li>DET: tem, tej, teh, katerih, vseh, nekem, katerem, naši, tistem, tistih</li>
      <li>NOUN: bistvu, strani, redu, koncu, času, letih, mestu, šoli, področju, primeru</li>
      <li>NUM: eni, enem, dveh, desetih, štirih, treh, devetnajstih, enajstih, osemnajstih, petih</li>
      <li>PRON: nas, sebi, njej, njem, njih, čemer, vas, kom, meni, tebi</li>
      <li>PROPN: Sloveniji, Ljubljani, Mariboru, Evropi, Nemčiji, Netflixu, Avstriji, Božjah, Bruslju, Iraku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: sam, zanimivo, lepa, dobro, drugi, pomembno, druga, sami, dober, sama</li>
      <li>ADJ-Part: pozdravljeni, spoštovani, ostali, prepričani, rečeno, znana, določene, spoštovana, sprejeta, vnet</li>
      <li>DET: to, ta, vse, tisti, vsi, te, ti, tisto, tak, taka</li>
      <li>NOUN: hvala, ljudje, gospod, del, stvar, otroci, pot, država, gospa, zgodba</li>
      <li>NUM: ena, en, dva, tisoč, pet, eden, tri, devet, dvajset, eni</li>
      <li>PRON: jaz, kaj, ti, mi, kar, kdo, on, vi, ona, oni</li>
      <li>PROPN: Slovenija, Agropop, Ljubljana, Jones, Nigerija, Tom, Bistrica, David, Healy, Alenka</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: drugi, pravi, mali, naslednji, stari, boljši, edini, največji, rojstni, delovni</li>
      <li>ADJ-Part: spoštovani, razširjeni, animirani, imenovani, predsedujoči, zaposleni, delujoči, igrani, nariti, ostali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: sam, dober, lep, velik, cel, drug, zanimiv, slab, star, celoten</li>
      <li>ADJ-Part: vnet, znan, pripravljen, določen, navajen, zaposlen, narezan, omenjen, organiziran, pozdravljen</li>
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
      <li>ADJ: boljši, manjši, boljše, mlajši, večja, večji, manjša, boljša, manjše, starejša</li>
      <li>ADV: bolj, prej, kasneje, boljše, večkrat, rajši, raje, lažje, pozneje, bolje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: dobro, sam, zanimivo, dober, sami, lepa, pomembno, različne, lep, sama</li>
      <li>ADJ-Part: pozdravljeni, določene, spoštovani, ostali, prepričani, določeno, rečeno, znana, narejeno, odprta</li>
      <li>ADV: tako, zdaj, lahko, potem, zelo, kako, kar, tam, res, a</li>
      <li>DET: pol, nekaj, nič</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: največji, najboljše, največje, največja, najmlajši, najboljša, najboljši, najboljših, najljubši, najnujnejše</li>
      <li>ADV: najbolj, najprej, najmanj, najlažje, najrajši, najbolje, najboljše, najpogosteje, najraje, najverjetneje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ni, nisem, niso, nismo, nisi, niste, nisva, nista</li>
      <li>PART: ne, na, bržkone, kajne</li>
      <li>VERB-Fin: ni, nima, nimam, nimajo, nisem, niso, nimamo, nimaš, niste, noče</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX-Fin: je, so, sem, smo, bo, si, ste, bom, bomo, sta</li>
      <li>VERB-Fin: je, so, ima, imamo, bo, imajo, imaš, imam, sem, si</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Bound
    <ul>
      <li>PRON: zame, zase, zanj, zanjo, nanj, zate, vanj, vanjo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>PRON: se, mi, jih, ga, si, jo, ti, me, jim, mu</li>
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
      <li>AUX-Fin: bodita</li>
      <li>AUX-Part: bil, bilo</li>
      <li>VERB-Fin: vem, veš, mislim, ima, imamo, zdi, imajo, imaš, imam, imate</li>
      <li>VERB-Inf: imeti, govoriti, delati, zavedati, gledati, iskati, jesti, vedeti, hoditi, učiti</li>
      <li>VERB-Part: imeli, imela, imel, mogel, delala, delali, delal, gledala, mogla, mislil</li>
      <li>VERB-Sup: delat, gledat, nabirat, spat, jest, ponavljat, študirat, jebat, kuhat, letet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: recimo, da, daj, pride, spomnim, rečem, prideš, začne, dobi, reče</li>
      <li>VERB-Inf: narediti, reči, povedati, priti, kupiti, naučiti, pogledati, prenesti, prilagoditi, zmeniti</li>
      <li>VERB-Part: rekel, rekla, rekli, prišla, prišel, dobil, dobili, prišli, dal, dala</li>
      <li>VERB-Sup: izpeljat, naročit, pogledat, povedat, preverit, rešit, stuširat, vrnit</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: bi</li>
      <li>VERB-Fin: bi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: bodite, bodi, bodita</li>
      <li>VERB-Fin: recimo, daj, čakaj, glej, poglejte, povej, glejte, dajmo, dajte, gremo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, so, sem, smo, ni, bo, si, ste, bom, bomo</li>
      <li>VERB-Fin: je, vem, veš, mislim, so, ni, ima, pravi, imamo, gre</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bo, bom, bomo, boš, boste, bodo, bojo, bova, bosta</li>
      <li>VERB-Fin: bo, bom, bomo, boš, bodo, bojo, bosta, bova, boste</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: je, so, sem, smo, ni, si, ste, sta, nisem, sva</li>
      <li>VERB-Fin: je, vem, veš, mislim, so, ni, ima, pravi, imamo, gre</li>
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
      <li>DET: to, ta, tega, tem, te, teh, tisto, tisti, toliko, ti</li>
      <li>PRON: le-ta, le-teh, le-ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: malo, pol, več, nekaj, veliko, dosti, neki, manj, neko, preveč</li>
      <li>PRON: nekaj, nekdo, nekoga, nekomu, isto, marsikdo, marsikaj, marsikoga, marsikomu, marsičem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: koliko, kakšen, kateri, kakšno, katerih, kakšne, kakšna, kakšni, katero, katere</li>
      <li>PRON: kaj, kdo, koga, česa, čim, kom, komu, čem, čemu, što</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nič, noben, nobenega, nobene, nobena, nikako, nikakršne, ničesar, nobenem, nobenemu</li>
      <li>PRON: nič, nekaj, nihče, nikomer, ničesar, nobeden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: sirovo, Andrejevo, Belvijevega, Bertrandova, Blaževi, Dolinarjeva, Heglovem, Parsonovo, Putzerjeva, Saudovi</li>
      <li>DET: svoje, naše, naši, naša, moj, naš, moje, moja, svoj, naših</li>
      <li>PRON: se, mi, jaz, ti, jih, ga, si, jo, nas, nam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: kakršnekoli, kakršnih, kakršna, kakršnakoli, kakršne, kakršnega, kakršni, kakršno, katerikoli, katerimkoli</li>
      <li>PRON: kar, karkoli, čemer, kdor, česar, česarkoli, komerkoli, čimer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: vse, vsi, vseh, vsak, vsem, ves, vsako, vsa, vso, vsega</li>
      <li>PRON: vsakdo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: en, dva, eno, ena, tri, tisoč, pet, dve, dvajset, enega</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: dvojni, dvojno, trojni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prvi, prvo, prva, prve, prvem, tretji, prvega, sedemindvajsetega, tretjo, šesti</li>
      <li>NUM: štire</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: dvoje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: otrokovih, sirovo, Dopplerjev, Staničevi, krompirjevo, paradižnikovo, Andrejevo, Asimovih, Barbičeva, Belvijevega</li>
      <li>DET: naše, svoje, naši, naša, moj, naš, moje, moja, naših, svoj</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: svoje, svoj, svojega, svojo, svojih, svoji, svojimi, svojem, svoja, svojim</li>
      <li>PRON: se, si, sabo, sebe, sebi, seboj, zase</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sem, smo, bom, bomo, nisem, sva, nismo, bova, nisva</li>
      <li>DET: naše, naši, naša, moj, naš, moje, moja, naših, našega, našo</li>
      <li>PRON: mi, jaz, nas, nam, me, meni, mene, nami, zame, mano</li>
      <li>VERB-Fin: vem, mislim, recimo, imamo, imam, sem, moram, vemo, moramo, gremo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: si, ste, boš, boste, nisi, niste, sta, bodite, bodi, bodita</li>
      <li>DET: vaši, vaš, vaše, tvoja, vašo, tvoj, vaša, vašem, tvoje, vašega</li>
      <li>PRON: ti, vi, vam, vas, te, tebe, tebi, vami, vidva, tabo</li>
      <li>VERB-Fin: veš, imaš, si, daj, imate, čakaj, glej, moraš, greš, moreš</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, so, ni, bo, sta, bodo, niso, bojo, bosta, biti</li>
      <li>DET: njihovo, njihove, njegova, njen, njeni, njihovih, njegovo, njene, njihova, njegov</li>
      <li>PRON: jih, ga, jo, on, ona, jim, mu, oni, ji, njih</li>
      <li>VERB-Fin: je, so, ni, ima, pravi, gre, zdi, bo, imajo, pomeni</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: njen, njeni, njene, njeno, njenega, njenem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: njegova, njegovo, njegov, njegove, njegovi, njegovim, njegovega</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>DET: najino, njune</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: naše, naši, naša, naš, naših, našega, našo, njihovo, vaši, našem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: moj, moje, moja, mojega, moji, mojo, mojem, njegova, njen, njeni</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: d., o., si</li>
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
          <li>X: the, of, green, on, stop, grass, home, non, Beautiful, Prison</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Word
        <ul>
          <li>NUM: en, dva, eno, ena, tri, tisoč, pet, dve, dvajset, enega</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: fizikalni</li>
          <li>AUX-Fin: ni</li>
          <li>DET: dosti, ta</li>
          <li>NOUN: znamenitost</li>
          <li>PRON: se</li>
          <li>X: nar-, pa, sto, z-, če</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: biti.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: biti.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (11)</li>
      <li>VERB-Fin--NOUN-Gen (106)</li>
      <li>VERB-Fin--NOUN-Nom (788)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(kakor) (1)</li>
      <li>VERB-Fin--PRON-Acc (8)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Gen (18)</li>
      <li>VERB-Fin--PRON-Nom (462)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Gen (40)</li>
      <li>VERB-Part--NOUN-Gen-ADP(do) (1)</li>
      <li>VERB-Part--NOUN-Nom (352)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Gen (14)</li>
      <li>VERB-Part--PRON-Nom (293)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (729)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(na) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(preko) (1)</li>
      <li>VERB-Fin--NOUN-Dat (21)</li>
      <li>VERB-Fin--NOUN-Gen (173)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(preko) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(čez) (1)</li>
      <li>VERB-Fin--NOUN-Loc (2)</li>
      <li>VERB-Fin--NOUN-Nom (23)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(kot) (1)</li>
      <li>VERB-Fin--PRON (4)</li>
      <li>VERB-Fin--PRON-Acc (387)</li>
      <li>VERB-Fin--PRON-Acc-ADP(za) (1)</li>
      <li>VERB-Fin--PRON-Dat (229)</li>
      <li>VERB-Fin--PRON-Gen (34)</li>
      <li>VERB-Fin--PRON-Nom (12)</li>
      <li>VERB-Inf--NOUN-Acc (132)</li>
      <li>VERB-Inf--NOUN-Dat (5)</li>
      <li>VERB-Inf--NOUN-Gen (31)</li>
      <li>VERB-Inf--NOUN-Nom (6)</li>
      <li>VERB-Inf--PRON-Acc (60)</li>
      <li>VERB-Inf--PRON-Dat (6)</li>
      <li>VERB-Inf--PRON-Gen (5)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Acc (505)</li>
      <li>VERB-Part--NOUN-Acc-ADP(navkljub) (1)</li>
      <li>VERB-Part--NOUN-Dat (18)</li>
      <li>VERB-Part--NOUN-Gen (105)</li>
      <li>VERB-Part--NOUN-Nom (6)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-Acc (245)</li>
      <li>VERB-Part--PRON-Dat (104)</li>
      <li>VERB-Part--PRON-Gen (19)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Sup--NOUN-Acc (11)</li>
      <li>VERB-Sup--NOUN-Gen (1)</li>
      <li>VERB-Sup--PRON-Acc (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (18)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (93)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (10)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (17)</li>
      <li>VERB-Part--PRON-Acc (9)</li>
      <li>VERB-Part--PRON-Dat (82)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 43 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: imeti svoje, pomagati si, izbrati si, kupiti si, narediti svoje, poiskati si, pripraviti si, vzeti si, zavarovati se, biti si, dajati sebe, govoriti si, imeti svoj, kriv si, misliti svoje, namestiti si, narediti sebe, narediti si, nesti si, obleči se, opisati sebe, podariti si, pokrivati si, posaditi si, povedati svoje, prebrati si, pridobiti si, pustiti si, razbremenjevati sebe, skriti se, tolažiti se, uriti se, videti sebe, vpisati se, zagotavljati si, zapisati si, zapisovati si, zatiskati si, zbrati si, zgraditi si, zlomiti si, zviti si, šaltati se</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: zavarovati</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>cc:preconj</a>, <a>discourse:filler</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>parataxis:discourse</a>, <a>parataxis:restart</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>punct</a></li>
</ul>
