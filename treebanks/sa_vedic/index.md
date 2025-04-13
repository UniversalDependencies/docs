---
layout: base
title:  'UD_Sanskrit-Vedic'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Sanskrit Vedic

Language: [Sanskrit](/sa/index.html) (code: `sa`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.6 release.

The following people have contributed to making this treebank part of UD: Salvatore Scarlata, Elia Ackermann, Oliver Hellwig, Erica Biagetti, Paul Widmer, Sven Sellmer.

Repository: [UD_Sanskrit-Vedic](https://github.com/UniversalDependencies/UD_Sanskrit-Vedic)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsa_vedic215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: nonfiction

Questions, comments?
General annotation questions (either Sanskrit-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Sanskrit-Vedic/issues).
If you want to collaborate, please contact [hellwig7&nbsp;(æt)&nbsp;gmx&nbsp;•&nbsp;de].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | annotated manually in non-UD style, automatically converted to UD |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

The Treebank of Vedic Sanskrit contains 4,000 sentences with 27,000 words chosen from metrical and prose passages of the Ṛgveda (RV), the Śaunaka recension of the Atharvaveda (ŚS), the Maitrāyaṇīsaṃhitā (MS), and the Aitareya- (AB) and Śatapatha-Brāhmaṇas (ŚB).

Lexical and morpho-syntactic information has been generated using a tagging software and manually validated.
POS tags have been induced automatically from the morpho-sytactic information of each word.






Vedic Sanskrit is an ancient Indo-Aryan language,
one of the oldest transmitted Indo-European languages and
the precursor of Classical Sanskrit. The relatively large corpus of Vedic poetry and prose is critical for the reconstruction of the early linguistic history of Indo-European and important as a source for socio-cultural developments in South Asia during the second and first millenia BCE.

The composition of the Vedic treebank is motivated by the need for a resource that can be used for data-driven, quantitatively robust diachronic and synchronic investigations of linguistic
phenomena in, and starting with, the oldest layers of Vedic Sanskrit.

## References
Annotation and composition of this treebank are described in detail in the following paper:

```
@inproceedings{hellwig-vtb-lrec-2020,
author = {Hellwig, Oliver and Scarlata, Salvatore and Ackermann, Elia and Widmer, Paul},
title = {The Treebank of {Vedic Sanskrit{% raw %}}}{% endraw %},
booktitle = {Proceedings of the LREC},
year = {2020}
}
```

An updated overview of the annotation procedure and coverage can be found here:

```
@article{vedic-parser,
title = {Data-driven Dependency Parsing of {V}edic {S}anskrit},
author = {Hellwig, Oliver and Nehrdich, Sebastian and Sellmer, Sven},
journal = {Language Resources \& Evaluation},
volume = {57},
pages = {1173--1206},
year = {2023}
}
```

## Train-test split

Following the UD recommendations, documents are kept together when generating the train, test and dev splits.
For the Vedic data, the term "document" means a hymn (metrical texts) or a chapter (prose texts).
Some of these documents are not complete, meaning that not the whole chapter or hymn was annotated. This happens quite often with the Rigveda.


## Acknowledgments

The annotation has been performed by Salvatore Scarlata, Oliver Hellwig, Elia Ackermann, Erica Biagetti, and Sven Sellmer.


# Statistics of UD Sanskrit Vedic

## POS Tags

[ADJ](sa_vedic-pos-ADJ.html) – [ADP](sa_vedic-pos-ADP.html) – [ADV](sa_vedic-pos-ADV.html) – [AUX](sa_vedic-pos-AUX.html) – [CCONJ](sa_vedic-pos-CCONJ.html) – [DET](sa_vedic-pos-DET.html) – [INTJ](sa_vedic-pos-INTJ.html) – [NOUN](sa_vedic-pos-NOUN.html) – [NUM](sa_vedic-pos-NUM.html) – [PART](sa_vedic-pos-PART.html) – [PRON](sa_vedic-pos-PRON.html) – [SCONJ](sa_vedic-pos-SCONJ.html) – [VERB](sa_vedic-pos-VERB.html)

## Features

[Case](sa_vedic-feat-Case.html) – [Compound](sa_vedic-feat-Compound.html) – [Gender](sa_vedic-feat-Gender.html) – [Mood](sa_vedic-feat-Mood.html) – [Number](sa_vedic-feat-Number.html) – [Person](sa_vedic-feat-Person.html) – [Tense](sa_vedic-feat-Tense.html) – [VerbForm](sa_vedic-feat-VerbForm.html) – [Voice](sa_vedic-feat-Voice.html)

## Relations

[acl](sa_vedic-dep-acl.html) – [acl:attr](sa_vedic-dep-acl-attr.html) – [acl:cont](sa_vedic-dep-acl-cont.html) – [acl:crel](sa_vedic-dep-acl-crel.html) – [acl:dpct](sa_vedic-dep-acl-dpct.html) – [acl:pred](sa_vedic-dep-acl-pred.html) – [acl:ptcp](sa_vedic-dep-acl-ptcp.html) – [acl:relcl](sa_vedic-dep-acl-relcl.html) – [advcl](sa_vedic-dep-advcl.html) – [advcl:caus](sa_vedic-dep-advcl-caus.html) – [advcl:ccomp](sa_vedic-dep-advcl-ccomp.html) – [advcl:concess](sa_vedic-dep-advcl-concess.html) – [advcl:cond](sa_vedic-dep-advcl-cond.html) – [advcl:consec](sa_vedic-dep-advcl-consec.html) – [advcl:dpct](sa_vedic-dep-advcl-dpct.html) – [advcl:fin](sa_vedic-dep-advcl-fin.html) – [advcl:lcl](sa_vedic-dep-advcl-lcl.html) – [advcl:manner](sa_vedic-dep-advcl-manner.html) – [advcl:tcl](sa_vedic-dep-advcl-tcl.html) – [advmod](sa_vedic-dep-advmod.html) – [amod](sa_vedic-dep-amod.html) – [appos](sa_vedic-dep-appos.html) – [aux](sa_vedic-dep-aux.html) – [case](sa_vedic-dep-case.html) – [case:sim](sa_vedic-dep-case-sim.html) – [cc](sa_vedic-dep-cc.html) – [ccomp](sa_vedic-dep-ccomp.html) – [ccomp:rel](sa_vedic-dep-ccomp-rel.html) – [compound](sa_vedic-dep-compound.html) – [compound:coord](sa_vedic-dep-compound-coord.html) – [compound:name](sa_vedic-dep-compound-name.html) – [conj](sa_vedic-dep-conj.html) – [cop](sa_vedic-dep-cop.html) – [csubj](sa_vedic-dep-csubj.html) – [det](sa_vedic-dep-det.html) – [discourse](sa_vedic-dep-discourse.html) – [dislocated](sa_vedic-dep-dislocated.html) – [fixed](sa_vedic-dep-fixed.html) – [flat](sa_vedic-dep-flat.html) – [iobj](sa_vedic-dep-iobj.html) – [mark](sa_vedic-dep-mark.html) – [mark:sim](sa_vedic-dep-mark-sim.html) – [nmod](sa_vedic-dep-nmod.html) – [nmod:appos](sa_vedic-dep-nmod-appos.html) – [nmod:pred](sa_vedic-dep-nmod-pred.html) – [nsubj](sa_vedic-dep-nsubj.html) – [nummod](sa_vedic-dep-nummod.html) – [obj](sa_vedic-dep-obj.html) – [obl](sa_vedic-dep-obl.html) – [obl:agent](sa_vedic-dep-obl-agent.html) – [obl:benef](sa_vedic-dep-obl-benef.html) – [obl:goal](sa_vedic-dep-obl-goal.html) – [obl:grad](sa_vedic-dep-obl-grad.html) – [obl:instr](sa_vedic-dep-obl-instr.html) – [obl:lmod](sa_vedic-dep-obl-lmod.html) – [obl:manner](sa_vedic-dep-obl-manner.html) – [obl:path](sa_vedic-dep-obl-path.html) – [obl:soc](sa_vedic-dep-obl-soc.html) – [obl:source](sa_vedic-dep-obl-source.html) – [obl:tmod](sa_vedic-dep-obl-tmod.html) – [orphan](sa_vedic-dep-orphan.html) – [parataxis](sa_vedic-dep-parataxis.html) – [root](sa_vedic-dep-root.html) – [vocative](sa_vedic-dep-vocative.html) – [xcomp](sa_vedic-dep-xcomp.html) – [xcomp:result](sa_vedic-dep-xcomp-result.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 27182 sentences and 206440 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PROPN, SYM, PUNCT, X</li>
</ul>

<ul>
<li>This corpus contains 46 word types tagged as particles (PART): a, aha, an, api, aṅga, cana, cit, eva, evā, gha, ghā, ha, hi, id, iti, iva, ivā, kam, khalu, kila, kilā, kimu, kuvid, mā, na, nahi, nakir, nanu, no, nu, nvai, nvāva, nā, nū, samaha, sma, smā, svid, tu, u, vai, vāva, yatha, yathā, ū, ṇa</li>
</ul>

<ul>
<li>This corpus contains 53 lemmas tagged as pronouns (PRON): adas, ama, aneka, anya, anyatara, anyonya, apara, atas, bahu, cana, eka, ekaika, ekaścana, enad, etad, eva, idam, itara, ka, katama, katara, kati, kaya, kaścana, kaścit, kiṃca, kutas, loga, mad, nakir, nima, para, pramara, pūrva, sa, sama, sarva, sima, tad, taka, tatas, tena, tva, tvad, tya, ubh, upa, viśva, yad, yaka, yat, yatama, yatara</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as determiners (DET): anyaka, anyatama, bahu, bhūri, bhūyiṣṭha, etāvat, ititha, iyat, jīva, kṛtsna, nikhila, nitya, pratyakṣa, puru, sakala, samāna, sva, svaka, tatitha, tāvaka, tāvat, ubhaya, viśva, yatitha, yādṛś, yāvat, āmuṣyāyaṇa</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: bahu, viśva</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): as, bhū, car, e, i, sthā, ās</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: as, bhū, car, e, i, sthā, ās</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: kṛtvā, hutvā, ādāya, bhūtvā, nidhāya, gṛhītvā, iṣṭvā, gatvā, ādhāya, upasamādhāya</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Gdv
  <ul>
    <li>VERB: ādheyaḥ, deyam, hotavyam, ādṛtyam, anūcyaḥ, etavyam, upajīvanīyaḥ, kāryam, īḍyam, havyaḥ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: avase, jīvase, dṛśe, pītaye, grahītum, vītaye, jīvitum, bhuje, dāvane, janayitavai</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: san, santam, sat, sataḥ, satī, satām, satīm, bhavantaḥ, sadbhyaḥ, santaḥ</li>
    <li>VERB: vidvān, yajamānaḥ, _, yajamānam, yajamānasya, jātaḥ, uktam, samṛddham, yajamānāya, hutam</li>
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
      <li>ADJ: uttarām, uttarayā, prācīm, uttamām, prathamām, udīcīm, dhruvā, mahī, prathamā, revatīḥ</li>
      <li>AUX-Part: satī, satīm, satīḥ</li>
      <li>DET: viśvāḥ, svayā, pūrvīḥ, svā, svām, svāyai, svāyām, svāḥ, bahūḥ, tāvatīm</li>
      <li>NOUN: āpaḥ, apaḥ, vāc, vācam, prajāḥ, prāyaścittiḥ, devatāḥ, vācā, apām, pṛthivī</li>
      <li>NUM: tisraḥ, dvābhyām, catasraḥ, dve, tisṛbhiḥ, pañca, ekā, ekām, catasṛbhiḥ, daśa</li>
      <li>PRON: sā, tām, tāḥ, eṣā, yā, iyam, yāḥ, etāḥ, etām, kā</li>
      <li>VERB-Gdv: kāryā, dīkṣaṇīyāyāḥ, paridhānīyā, hotavye, dīkṣaṇīyāyām, havyā, kartavyāḥ, anugeyāḥ, anvārambhaṇīyām, anvārambhaṇīyāyām</li>
      <li>VERB-Part: kṛtā, upahūtā, anvārabdhāyām, hutāyām, uśatīḥ, anvāyattā, anūktāyām, hutāḥ, jātāḥ, pratiṣṭhitā</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: prathamaḥ, dakṣiṇam, viśve, mayaḥ, uttaram, vid, pratyaṅ, ūrdhvaḥ, dakṣiṇena, priyaḥ</li>
      <li>ADV: sa, saḥ, tad, pūrvam, tasmāt, tam</li>
      <li>AUX-Part: san, santam, sataḥ, satām, bhavantaḥ, sadbhyaḥ, santaḥ, tiṣṭhan</li>
      <li>DET: viśve, sve, ubhayoḥ, bahavaḥ, svena, svāt, viśvāḥ, tāvantam, tāvataḥ, viśvebhiḥ</li>
      <li>NOUN: agniḥ, devāḥ, agnim, agne, indraḥ, indra, prajāpatiḥ, lokam, yajñam, agneḥ</li>
      <li>NUM: eke, ekaḥ, trayaḥ, dvau, pañca, sapta, ṣaṭ, trīn, ekam, catvāraḥ</li>
      <li>PRON: yaḥ, saḥ, sa, tam, asya, enam, te, eṣa, ayam, tasya</li>
      <li>VERB-Gdv: ādheyaḥ, anūcyaḥ, upajīvanīyaḥ, īḍyam, havyaḥ, īḍyaḥ, cityaḥ, kāryaḥ, labhyaḥ, anumādyaḥ</li>
      <li>VERB-Part: vidvān, yajamānaḥ, yajamānam, yajamānasya, jātaḥ, yajamānāya, udite, yuktaḥ, jātam, pratiṣṭhitaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: priyam, bṛhat, uru, bhūyaḥ, paramam, mahat, samānam, mahi, tṛtīyam, parame</li>
      <li>ADV: tat, etat, tad, idam, etad, adaḥ, kad, kim, aparam, pūrvam</li>
      <li>AUX-Part: sat, sataḥ, sati, satā</li>
      <li>DET: svena, viśvā, viśvāni, viśvam, svam, sve, viśvasmāt, bahu, purū, viśvasya</li>
      <li>NOUN: brahma, annam, manaḥ, namaḥ, manasā, rūpam, agnihotram, ahar, jyotiḥ, cakṣuḥ</li>
      <li>NUM: śatam, sapta, ekam, dvādaśa, trīṇi, sahasram, daśa, dve, nava, pañca</li>
      <li>PRON: tat, yat, etat, idam, sarvam, tena, kim, tāni, enat, etāni</li>
      <li>VERB-Gdv: deyam, hotavyam, ādṛtyam, etavyam, kāryam, bhogyam, pramaditavyam, anūcyam, kartavyam, bhavyam</li>
      <li>VERB-Part: samṛddham, uktam, hutam, kṛtam, bhūtam, sat, iṣṭam, pratiṣṭhitam, adhyūḍham, gṛhītam</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: uttarābhyām, ubhayoḥ, goptārau, mahī, uttare, vārtraghnau, īśvarau, mayyau, mithunau, samanasau</li>
      <li>AUX: bhavataḥ, syātām, sthaḥ, āstām, asāva, svaḥ, abhūtām, babhūvatuḥ, bhavathaḥ, bhūtas</li>
      <li>AUX-Part: satī</li>
      <li>DET: ubhayoḥ, ubhaye, purū, sve</li>
      <li>NOUN: aśvinā, dyāvāpṛthivī, agnī, rodasī, apānau, bāhubhyām, hastābhyām, pavitre, ājyabhāgau, agnibhyām</li>
      <li>NUM: dve, dvābhyām, dvau, dvayoḥ, dvā, śate, dvādaśau, trayastriṃśatau</li>
      <li>PRON: vām, tau, yuvam, ete, ubhe, ubhau, te, tayoḥ, tābhyām, etau</li>
      <li>VERB: bhavataḥ, sthaḥ, yātam, gopāyetām, pibatam, gopāyataḥ, pātam, aśnīyātām, bhavatam, gatam</li>
      <li>VERB-Gdv: hotavye, caryau, havyā, kartavyau, kartavye, kāryau, pratiṣṭhāpye, saṃsṛjye, tyājyau, upasaṃgrāhyau</li>
      <li>VERB-Part: aktau, akte, alaṃkṛtau, pariṣkṛtau, pūte, saṃpṛñcānau, saṃvidānau, jātau, praṇīyamānābhyām, samṛddhe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: viśve, amṛtāḥ, sudānavaḥ, vidaḥ, viśvā, śucayaḥ, kṛtaḥ, revatīḥ, priyāḥ, viśvadevyāvatīḥ</li>
      <li>AUX: bhavanti, syuḥ, santu, syāma, stha, āsan, santi, bhavantu, yanti, āsuḥ</li>
      <li>AUX-Part: satām, bhavantaḥ, sadbhyaḥ, santaḥ, satīḥ</li>
      <li>DET: viśvāḥ, viśvā, viśve, viśvāni, bahavaḥ, pūrvīḥ, viśveṣu, purū, viśvebhiḥ, svāḥ</li>
      <li>NOUN: devāḥ, āpaḥ, apaḥ, devānām, paśavaḥ, devān, prajāḥ, devebhyaḥ, paśūn, devatāḥ</li>
      <li>NUM: eke, pañca, tisraḥ, trayaḥ, trīṇi, sapta, catasraḥ, ṣaṭ, tisṛbhiḥ, aṣṭau</li>
      <li>PRON: naḥ, te, ye, vaḥ, tāḥ, tān, vayam, yāḥ, ete, eṣām</li>
      <li>VERB: āhuḥ, bhavanti, abruvan, yanti, ācakṣate, abhavan, juhvati, āyan, viduḥ, stha</li>
      <li>VERB-Gdv: kāryāḥ, anūcyāni, vaktavyāḥ, kartavyāḥ, pacanīyaiḥ, abhijayyāḥ, abhivādyāḥ, abhiyaṣṭavyāḥ, anugeyāḥ, anumeyāḥ</li>
      <li>VERB-Part: vadantaḥ, vidvāṃsaḥ, devayantaḥ, jātāḥ, yuktāḥ, uśatīḥ, vājayantaḥ, śuddhāḥ, hutāḥ, sutāsaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: dakṣiṇam, priyam, prathamaḥ, uttaram, mayaḥ, bṛhat, uttarām, uttamam, samānam, paramam</li>
      <li>ADV: tat, etat, tad, idam, etad, sa, adaḥ, pūrvam, saḥ, kad</li>
      <li>AUX: bhavati, asi, syāt, āsīt, astu, asmi, san, asti, santam, asat</li>
      <li>AUX-Part: san, santam, sat, sataḥ, satī, satīm, sati, satā, tiṣṭhan</li>
      <li>DET: svena, svayā, sve, viśvam, svam, viśvasmāt, bahu, svā, viśvasya, svām</li>
      <li>NOUN: agniḥ, agnim, agne, brahma, indraḥ, indra, prajāpatiḥ, lokam, annam, yajñam</li>
      <li>NUM: śatam, ekaḥ, ekam, sapta, dvādaśa, sahasram, daśa, nava, ekā, ekām</li>
      <li>PRON: yaḥ, tat, saḥ, yat, sa, te, tvā, tam, asya, enam</li>
      <li>VERB: bhavati, veda, asi, uvāca, āha, juhoti, juhuyāt, karoti, vidvān, yajamānaḥ</li>
      <li>VERB-Gdv: ādheyaḥ, deyam, hotavyam, ādṛtyam, anūcyaḥ, etavyam, upajīvanīyaḥ, kāryam, īḍyam, havyaḥ</li>
      <li>VERB-Part: vidvān, yajamānaḥ, yajamānam, yajamānasya, jātaḥ, uktam, samṛddham, yajamānāya, hutam, jātam</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: caturviṃśāt, ṣoḍaśāt, asataḥ, bhadrāt, uttarāt, bṛhataḥ, dvāviṃśāt, savyāt, uttarasmāt, ṣaṣṭhāt</li>
      <li>ADV: tasmāt</li>
      <li>DET: viśvasmāt, svāt, viśvebhyaḥ, viśvāt</li>
      <li>NOUN: divaḥ, agneḥ, lokāt, aṃhasaḥ, pṛthivyāḥ, tvāt, madhyāt, devebhyaḥ, pāśāt, yoneḥ</li>
      <li>NUM: sahasrāt, dvāviṃśateḥ, pañcabhyaḥ, saptabhyaḥ, tisṛbhyaḥ, trayastriṃśataḥ, tribhyaḥ, śatāt</li>
      <li>PRON: asmāt, tasmāt, asmat, mat, tvat, etasmāt, ebhyaḥ, tasyāḥ, sarvasmāt, yasmāt</li>
      <li>VERB-Gdv: dīkṣaṇīyāyāḥ, saṃdeśyāt, bībhatseyāt, prasneyāt</li>
      <li>VERB-Part: ālabdhāt, yajamānāt, abhitaptebhyaḥ, chinnāt, hutāt, jvalataḥ, nikhātāt, sataḥ, sthitāt, taptāt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: dakṣiṇam, uttaram, priyam, uttarām, prāñcam, uru, bṛhat, udañcam, uttamam, tṛtīyam</li>
      <li>ADV: tat, etat, tad, idam, etad, adaḥ, kad, pūrvam, aparam, kim</li>
      <li>AUX-Part: santam, sat, satīm, satīḥ</li>
      <li>DET: viśvā, viśvāḥ, viśvāni, viśvam, svam, purū, svām, tāvantam, tāvataḥ, bahu</li>
      <li>NOUN: agnim, lokam, yajñam, apaḥ, devān, vācam, indram, ātmānam, svargam, paśūn</li>
      <li>NUM: sapta, śatam, tisraḥ, pañca, ekam, trīṇi, dve, sahasram, trīn, daśa</li>
      <li>PRON: tvā, tam, enam, tat, naḥ, tām, yat, mā, etat, yam</li>
      <li>VERB-Gdv: īḍyam, bhogyam, hotavyam, praṇayanīyam, saṃbhāryam, vedyam, abhivādanīyam, darśanīyam, havyam, kāryam</li>
      <li>VERB-Part: yajamānam, jātam, juṣṭam, sutam, bhūtam, saṃmitam, kriyamāṇam, gṛhītam, sahamānam, yuktam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: mahe, mahate, sviṣṭakṛte, niyutvate, catuṣpade, kṛte, viśvebhyaḥ, bṛhate, dātre, ghne</li>
      <li>AUX-Part: sadbhyaḥ</li>
      <li>DET: svāyai, viśvasmai, bahave, svāya, ubhayāya, viśvebhyaḥ, yāvadbhyaḥ</li>
      <li>NOUN: agnaye, devebhyaḥ, indrāya, tvāya, brahmaṇe, pitṛbhyaḥ, ūtaye, somāya, samṛddhyai, ātmane</li>
      <li>NUM: śatāya, sahasrāya, caturbhyaḥ, dvābhyām, ekaviṃśataye, saptabhyaḥ, tribhyaḥ</li>
      <li>PRON: naḥ, asmai, te, me, tasmai, vaḥ, tebhyaḥ, asyai, mahyam, asmabhyam</li>
      <li>VERB-Gdv: madyāya, upasadyāya, vedyāya</li>
      <li>VERB-Part: yajamānāya, dāśuṣe, mathyamānāya, dviṣate, jātāya, ajyamānāya, sunvate, ucchrīyamāṇāya, praṇīyamānāya, āsīnāya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: viśvasya, mahaḥ, aryaḥ, bṛhataḥ, sviṣṭakṛtaḥ, uttarasya, svānām, samānānām, mahīnām, ubhayoḥ</li>
      <li>AUX-Part: sataḥ, satām</li>
      <li>DET: viśvasya, svasya, viśveṣām, bahūnām, ubhayoḥ, etāvataḥ, ubhayeṣām, viśvasyāḥ, viśvāsām, yāvatīnām</li>
      <li>NOUN: yajñasya, devānām, agneḥ, apām, divaḥ, indrasya, pṛthivyāḥ, sūryasya, devasya, paśūnām</li>
      <li>NUM: ekeṣām, dvayoḥ, sahasrasya, caturṇām, śatasya, ekasya, daśānām, ekasyāḥ, saptānām, trayāṇām</li>
      <li>PRON: asya, te, tasya, me, naḥ, yasya, vaḥ, mama, eṣām, teṣām</li>
      <li>VERB-Gdv: dīkṣaṇīyāyāḥ, geyānām, japyasya, prasthānīyāyāḥ, pratigṛhyasya, vadhyānām, īḍyasya</li>
      <li>VERB-Part: yajamānasya, kṛtasya, dīkṣitasya, sutasya, hutasya, uktasya, carataḥ, jātasya, bhūtasya, gṛhītasya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: uttarayā, dakṣiṇena, savyena, uttareṇa, gāyatreṇa, uttaraiḥ, uttarābhiḥ, uttarābhyām, jāgatena, parokṣeṇa</li>
      <li>ADV: tad, tena</li>
      <li>AUX-Part: satā</li>
      <li>DET: svena, svayā, viśvebhiḥ, svebhiḥ, viśvena, viśvābhiḥ, bahunā, svaiḥ, viśvaiḥ</li>
      <li>NOUN: manasā, vācā, adbhiḥ, paśubhiḥ, brahmaṇā, ṛcā, bhāgadheyena, chandasā, prajayā, devatayā</li>
      <li>NUM: dvābhyām, tisṛbhiḥ, catasṛbhiḥ, tribhiḥ, ekena, pañcabhiḥ, ṣaḍbhiḥ, caturbhiḥ, ekayā, saptabhiḥ</li>
      <li>PRON: tena, etena, yena, tayā, tvayā, etayā, anena, sarvaiḥ, tābhiḥ, kena</li>
      <li>VERB-Gdv: dveṣyeṇa, pacanīyaiḥ, bhavyena, kartvena, nirmanthyena, saṃsarjanīyaiḥ, vadhyena, ācamanīyābhiḥ</li>
      <li>VERB-Part: viduṣā, gṛhītena, yuktena, yajamānena, uditena, bhrājatā, bhūtayā, davidyutatyā, dīkṣitena, gatena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: dakṣiṇe, parame, uttame, tṛtīye, daghne, astamite, madhyame, mahati, puṇye, caturthe</li>
      <li>AUX-Part: sati</li>
      <li>DET: sve, ubhayoḥ, viśveṣu, svāyām, kṛtsne, nitye, samāne, tāvakeṣu, viśvāsu</li>
      <li>NOUN: agnau, loke, agre, madhye, āhavanīye, apsu, divi, yajñe, ante, deveṣu</li>
      <li>NUM: dvayoḥ, triṣu, ekasmin, pañcasu, tisṛṣu, catasṛṣu, daśasu, dvādaśasu, ekasyām, aṣṭāsu</li>
      <li>PRON: asmin, tasmin, mayi, etasmin, asyām, yasmin, tasyām, teṣu, sarveṣu, tvayi</li>
      <li>VERB-Gdv: dīkṣaṇīyāyām, anvārambhaṇīyāyām, bhavye, grāhye, jyeye</li>
      <li>VERB-Part: udite, yajamāne, hute, anvārabdhāyām, hutāyām, jāte, pariśrite, anūktāyām, saṃsthite, vaṣaṭkṛte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: prathamaḥ, mayaḥ, viśve, vid, pratyaṅ, ūrdhvaḥ, priyaḥ, dāḥ, śuciḥ, bhūyaḥ</li>
      <li>ADV: tat, sa, tad, idam, saḥ, etad, etat, adaḥ, kim, pūrvam</li>
      <li>AUX-Part: san, satī, sat, bhavantaḥ, santaḥ, tiṣṭhan</li>
      <li>DET: viśve, viśvāḥ, viśvam, viśvā, svam, bahavaḥ, svā, ubhaye, viśvāni, bahu</li>
      <li>NOUN: agniḥ, devāḥ, indraḥ, prajāpatiḥ, prāṇaḥ, āpaḥ, brahma, vāc, yajñaḥ, kāmaḥ</li>
      <li>NUM: eke, ekaḥ, sapta, trayaḥ, pañca, śatam, ekam, tisraḥ, dve, dvādaśa</li>
      <li>PRON: yaḥ, saḥ, sa, tat, yat, te, sā, eṣa, etat, tvam</li>
      <li>VERB-Gdv: ādheyaḥ, deyam, ādṛtyam, anūcyaḥ, etavyam, upajīvanīyaḥ, hotavyam, havyaḥ, kāryam, kāryā</li>
      <li>VERB-Part: vidvān, yajamānaḥ, jātaḥ, samṛddham, uktam, hutam, yuktaḥ, pratiṣṭhitaḥ, tiṣṭhan, uktaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: bhagavan, vaso, bhagavaḥ, somyaiḥ, subhage, sudānavaḥ, adrivas, girvaṇaḥ, maghavan, revatīḥ</li>
      <li>NOUN: agne, indra, deva, aśvinā, soma, jātavedaḥ, devāḥ, marutaḥ, oṣadhe, āpaḥ</li>
      <li>NUM: sapta</li>
      <li>PRON: asau, pare, sarvāḥ</li>
      <li>VERB-Gdv: ardhya, kāmyāḥ, śaṃsya</li>
      <li>VERB-Part: yajamāna, jāta, pavamāna, khāte, bhṛta, cikitvaḥ, huta, hūta, iṣita, jñāte</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: astu, santu, bhava, edhi, bhavantu, bhavatu, bhūtu, asāni, bhūtana</li>
      <li>VERB: dhehi, bhava, anubrūhi, pāhi, ehi, etu, pātu, astu, kṛdhi, gaccha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: bhavati, asi, bhavanti, āsīt, asmi, asti, stha, bhavataḥ, āsan, āsa</li>
      <li>VERB: bhavati, veda, asi, uvāca, āha, juhoti, āhuḥ, karoti, abravīt, abhavat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Jus
    <ul>
      <li>AUX: bhūt, bhuvam, bhūma, bhūḥ, bhūta, bhūvan</li>
      <li>VERB: hiṃsīḥ, dhāḥ, saṃvadiṣṭhāḥ, vidan, bhūt, vigāt, kaḥ, śaṃsiṣam, hāsiṣṭām, juṣanta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX: syāt, syuḥ, syāma, syām, syātām, bhavet, syāḥ, bhūyāsam, bhūyāt, bhūyāma</li>
      <li>VERB: juhuyāt, ālabheta, kuryāt, brūyāt, kāmayeta, kurvīta, dadyāt, japet, bhūyāsam, nirvapet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>VERB: agrahaiṣyat, atrapsyat, abhaviṣyan, vyapatiṣyat, abhaviṣyat, abheṣyat, ajīviṣyam, aprākṣyaḥ, avakṣyam, avakṣyan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: asat, asaḥ, asasi, asāni, asati, asan, bhavāti, asāma, asāva, bhuvat</li>
      <li>VERB: asat, karat, kṛṇavat, parṣi, dadhat, pṛcchāsi, bhavāti, ciketati, dadat, dhāḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: bhaviṣyati, bhaviṣyanti, bhavitā, bhavitāraḥ, bhavitāsmi, bhaviṣyasi, bhaviṣyata, bhaviṣyāmi</li>
      <li>VERB: vyākhyāsyāmaḥ, bhaviṣyati, yakṣyamāṇaḥ, kariṣyati, vipatiṣyati, agrahaiṣyat, atrapsyat, atyeṣyanti, vakṣyāmaḥ, avitā</li>
      <li>VERB-Part: yakṣyamāṇaḥ, bhaviṣyat, hoṣyan, kariṣyataḥ, nirvapsyan, pravatsyan, snāsyan, kariṣyan, vetsyan, abhiṣṭoṣyan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: āsīt, āsan, āsa, āsuḥ, āstām, abhūt, bhūt, abhūvam, babhūvuḥ, āyan</li>
      <li>VERB: veda, uvāca, āha, āhuḥ, vidvān, abravīt, abhavat, _, asṛjata, anvāha</li>
      <li>VERB-Part: vidvān, _, jātaḥ, uktam, samṛddham, hutam, jātam, udite, kṛtam, yuktaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB: avāvaśanta, aśiśrayuḥ, cākan, acakriran, acucyavuḥ, adadhāvat, ajabhartana, ajagan, ajagmiran, ajuhuvuḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: bhavati, asi, syāt, bhavanti, astu, asmi, san, asti, santam, syuḥ</li>
      <li>AUX-Part: san, santam, sat, sataḥ, satī, satām, satīm, bhavantaḥ, sadbhyaḥ, santaḥ</li>
      <li>VERB: bhavati, asi, juhoti, juhuyāt, karoti, yajamānaḥ, ālabheta, dadhāti, kuryāt, eti</li>
      <li>VERB-Part: yajamānaḥ, yajamānam, yajamānasya, yajamānāya, tiṣṭhan, sat, yajamāna, icchan, jāyamānaḥ, prajānan</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: kriyate, hūyate, gīyate, asṛjyata, mucyate, ucyate, kriyamāṇam, atimucyate, vidyate, vijñāyate</li>
      <li>VERB-Part: kriyamāṇam, mathyamānāya, ajyamānāya, ucchrīyamāṇāya, duhyamānā, praṇīyamānāya, ucyamāne, nidhīyamānam, parivīyamāṇāya, prahriyamāṇāya</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>






<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: asmi, syāma, syām, asāni, smaḥ, abhūvam, asāma, asāva, bhuvam, bhūma</li>
      <li>VERB: bhūyāsam, havāmahe, veda, īmahe, upāse, vidma, vṛṇīmahe, prapadye, huve, kṛṇomi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: asi, stha, asaḥ, bhava, edhi, sthaḥ, asasi, sthana, abhūtana, syāḥ</li>
      <li>VERB: asi, dhehi, bhava, anubrūhi, pāhi, ehi, kṛdhi, stha, gaccha, jahi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: bhavati, syāt, bhavanti, āsīt, astu, asti, syuḥ, santu, asat, bhavataḥ</li>
      <li>VERB: bhavati, veda, uvāca, āha, juhoti, āhuḥ, juhuyāt, karoti, abravīt, abhavat</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Compound</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: _, prāc, viśva, udak, uttara, mahā, dakṣiṇa, kṛṣṇa, prathama, ardha</li>
          <li>ADV: pūrva, sarva, sama, tad</li>
          <li>DET: viśva, bahu, sva, _, puru, bhūri, ubhaya, jīva, samāna</li>
          <li>NOUN: _, deva, brahma, indra, yajña, soma, ājya, paśu, anna, aśva</li>
          <li>NUM: _, tri, eka, dvi, sahasra, śata, catur, dvādaśa, pañca, aṣṭa</li>
          <li>PRON: _, sarva, tad, pūrva, anya, yad, etad, apara, para, eka</li>
          <li>VERB-Gdv: _, abhivānya, anubandhya, anvārambhaṇīya, bhogya, citya, havya, upya, āhṛtya, ārabhya</li>
          <li>VERB-Part: _, yajamāna, huta, kṛta, saṃsthita, suta, chinna, dhṛta, jarat, pūta</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: as, bhū.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: bhū, as, i, ās, sthā, car, e.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--NOUN-Acc (7)</li>
      <li>VERB--NOUN-Nom (5193)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (3)</li>
      <li>VERB--PRON-Gen (2)</li>
      <li>VERB--PRON-Nom (3985)</li>
      <li>VERB-Conv--NOUN-Nom (45)</li>
      <li>VERB-Conv--PRON-Nom (17)</li>
      <li>VERB-Gdv--NOUN-Nom (76)</li>
      <li>VERB-Gdv--PRON-Nom (71)</li>
      <li>VERB-Inf--NOUN-Dat (4)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (12)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Gen (7)</li>
      <li>VERB-Part--NOUN-Loc (181)</li>
      <li>VERB-Part--NOUN-Nom (614)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Gen (11)</li>
      <li>VERB-Part--PRON-Loc (20)</li>
      <li>VERB-Part--PRON-Nom (350)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--NOUN-Abl (3)</li>
      <li>VERB--NOUN-Acc (7177)</li>
      <li>VERB--NOUN-Acc-ADP(anu) (1)</li>
      <li>VERB--NOUN-Acc-ADP(apa) (1)</li>
      <li>VERB--NOUN-Acc-ADP(cit) (1)</li>
      <li>VERB--NOUN-Acc-ADP(upa) (1)</li>
      <li>VERB--NOUN-Dat (6)</li>
      <li>VERB--NOUN-Gen (118)</li>
      <li>VERB--NOUN-Ins (7)</li>
      <li>VERB--NOUN-Loc (5)</li>
      <li>VERB--NOUN-Nom (19)</li>
      <li>VERB--NOUN-Voc (1)</li>
      <li>VERB--PRON-Acc (3438)</li>
      <li>VERB--PRON-Acc-ADP(anu) (1)</li>
      <li>VERB--PRON-Acc-ADP(upa) (1)</li>
      <li>VERB--PRON-Dat (8)</li>
      <li>VERB--PRON-Gen (53)</li>
      <li>VERB--PRON-Loc (2)</li>
      <li>VERB--PRON-Nom (7)</li>
      <li>VERB-Conv--NOUN (2)</li>
      <li>VERB-Conv--NOUN-Abl (1)</li>
      <li>VERB-Conv--NOUN-Acc (1398)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Gen (14)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON-Acc (190)</li>
      <li>VERB-Conv--PRON-Gen (3)</li>
      <li>VERB-Gdv--NOUN-Acc (2)</li>
      <li>VERB-Gdv--NOUN-Nom (1)</li>
      <li>VERB-Inf--NOUN-Abl (1)</li>
      <li>VERB-Inf--NOUN-Acc (28)</li>
      <li>VERB-Inf--NOUN-Dat (8)</li>
      <li>VERB-Inf--NOUN-Gen (8)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (29)</li>
      <li>VERB-Part--NOUN (9)</li>
      <li>VERB-Part--NOUN-Acc (525)</li>
      <li>VERB-Part--NOUN-Acc-ADP(anu) (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Gen (11)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--NOUN-Loc (1)</li>
      <li>VERB-Part--PRON-Acc (84)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (238)</li>
      <li>VERB--NOUN-Acc-ADP(prati) (1)</li>
      <li>VERB--NOUN-Dat (530)</li>
      <li>VERB--NOUN-Dat-ADP(kaṃ) (1)</li>
      <li>VERB--NOUN-Gen (9)</li>
      <li>VERB--NOUN-Loc (3)</li>
      <li>VERB--PRON-Acc (393)</li>
      <li>VERB--PRON-Acc-ADP(abhi) (1)</li>
      <li>VERB--PRON-Dat (806)</li>
      <li>VERB--PRON-Dat-ADP(kaṃ) (1)</li>
      <li>VERB--PRON-Gen (15)</li>
      <li>VERB--PRON-Ins (4)</li>
      <li>VERB--PRON-Loc (3)</li>
      <li>VERB-Conv--NOUN-Acc (37)</li>
      <li>VERB-Conv--NOUN-Dat (28)</li>
      <li>VERB-Conv--NOUN-Ins (3)</li>
      <li>VERB-Conv--PRON-Acc (5)</li>
      <li>VERB-Conv--PRON-Dat (17)</li>
      <li>VERB-Gdv--NOUN-Dat (5)</li>
      <li>VERB-Gdv--NOUN-Gen (1)</li>
      <li>VERB-Gdv--PRON-Dat (2)</li>
      <li>VERB-Gdv--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Part--NOUN (3)</li>
      <li>VERB-Part--NOUN-Dat (24)</li>
      <li>VERB-Part--NOUN-Gen (3)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Dat (27)</li>
      <li>VERB-Part--PRON-Gen (13)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 36 relation subtypes: <a>acl:attr</a>, <a>acl:cont</a>, <a>acl:crel</a>, <a>acl:dpct</a>, <a>acl:pred</a>, <a>acl:ptcp</a>, <a>acl:relcl</a>, <a>advcl:caus</a>, <a>advcl:ccomp</a>, <a>advcl:concess</a>, <a>advcl:cond</a>, <a>advcl:consec</a>, <a>advcl:dpct</a>, <a>advcl:fin</a>, <a>advcl:lcl</a>, <a>advcl:manner</a>, <a>advcl:tcl</a>, <a>case:sim</a>, <a>ccomp:rel</a>, <a>compound:coord</a>, <a>compound:name</a>, <a>mark:sim</a>, <a>nmod:appos</a>, <a>nmod:pred</a>, <a>obl:agent</a>, <a>obl:benef</a>, <a>obl:goal</a>, <a>obl:grad</a>, <a>obl:instr</a>, <a>obl:lmod</a>, <a>obl:manner</a>, <a>obl:path</a>, <a>obl:soc</a>, <a>obl:source</a>, <a>obl:tmod</a>, <a>xcomp:result</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
