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
Family: Indo-European, Indic

This treebank has been part of Universal Dependencies since the UD v2.6 release.

The following people have contributed to making this treebank part of UD: Salvatore Scarlata, Elia Ackermann, Oliver Hellwig, Erica Biagetti, Paul Widmer.

Repository: [UD_Sanskrit-Vedic](https://github.com/UniversalDependencies/UD_Sanskrit-Vedic)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsa_vedic26)<br />
Download all treebanks: [UD 2.6](/#download)

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
title = {The Treebank of {Vedic Sanskrit}},
booktitle = {Proceedings of the LREC},
year = {2020}
}
```

## Train-test split

Following the UD recommendations, documents are kept together when generating the train and test splits.
For all texts but the ŚB, a ``document'' means a hymn (metrical texts) or a chapter (prose texts).
As only few, but rather long chapters of the ŚB have been annotated, ``documents'' are text lines (each of which contains more than one sentence in most cases) separated by double dandas in the case of the ŚB.



## Acknowledgments

The annotation has been performed by Salvatore Scarlata, Oliver Hellwig, Elia Ackermann, and Erica Biagetti.


# Statistics of UD Sanskrit Vedic

## POS Tags

[ADJ](sa_vedic-pos-ADJ.html) – [ADV](sa_vedic-pos-ADV.html) – [AUX](sa_vedic-pos-AUX.html) – [CCONJ](sa_vedic-pos-CCONJ.html) – [DET](sa_vedic-pos-DET.html) – [NOUN](sa_vedic-pos-NOUN.html) – [NUM](sa_vedic-pos-NUM.html) – [PART](sa_vedic-pos-PART.html) – [PRON](sa_vedic-pos-PRON.html) – [SCONJ](sa_vedic-pos-SCONJ.html) – [VERB](sa_vedic-pos-VERB.html)

## Features

[Case](sa_vedic-feat-Case.html) – [Gender](sa_vedic-feat-Gender.html) – [Mood](sa_vedic-feat-Mood.html) – [Number](sa_vedic-feat-Number.html) – [Person](sa_vedic-feat-Person.html) – [Tense](sa_vedic-feat-Tense.html) – [VerbForm](sa_vedic-feat-VerbForm.html) – [Voice](sa_vedic-feat-Voice.html)

## Relations

[acl](sa_vedic-dep-acl.html) – [advcl](sa_vedic-dep-advcl.html) – [advmod](sa_vedic-dep-advmod.html) – [amod](sa_vedic-dep-amod.html) – [appos](sa_vedic-dep-appos.html) – [aux](sa_vedic-dep-aux.html) – [case](sa_vedic-dep-case.html) – [cc](sa_vedic-dep-cc.html) – [ccomp](sa_vedic-dep-ccomp.html) – [compound](sa_vedic-dep-compound.html) – [conj](sa_vedic-dep-conj.html) – [cop](sa_vedic-dep-cop.html) – [csubj](sa_vedic-dep-csubj.html) – [det](sa_vedic-dep-det.html) – [discourse](sa_vedic-dep-discourse.html) – [dislocated](sa_vedic-dep-dislocated.html) – [fixed](sa_vedic-dep-fixed.html) – [flat](sa_vedic-dep-flat.html) – [iobj](sa_vedic-dep-iobj.html) – [mark](sa_vedic-dep-mark.html) – [nmod](sa_vedic-dep-nmod.html) – [nsubj](sa_vedic-dep-nsubj.html) – [nummod](sa_vedic-dep-nummod.html) – [obj](sa_vedic-dep-obj.html) – [obl](sa_vedic-dep-obl.html) – [orphan](sa_vedic-dep-orphan.html) – [parataxis](sa_vedic-dep-parataxis.html) – [root](sa_vedic-dep-root.html) – [vocative](sa_vedic-dep-vocative.html) – [xcomp](sa_vedic-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3997 sentences and 27117 tokens.</li>
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
<li>This corpus uses 11 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PROPN, ADP, INTJ, SYM, PUNCT, X</li>
</ul>

<ul>
<li>This corpus contains 14 word types tagged as particles (PART): a, aṅga, cit, eva, evā, ha, id, iti, iva, mā, na, nā, u, yathā</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as pronouns (PRON): adas, anya, anyatara, apara, atas, eka, enad, etad, idam, itara, ka, katama, kaścana, kaścit, kiṃca, mad, nima, para, pūrva, sama, tad, tva, tvad, tya, ubh, yad, yatama</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as determiners (DET): anyaka, bahu, ititha, puru, sarva, sva, tatitha, ubhaya, viśva, yatitha</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): as, bhū, i, kṛ, śak</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: as, bhū, i, kṛ, śak</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: bhūtvā, kṛtvā, āptvā, iṣṭvā, paryetya, grāhayitvā, apahatya, dṛṣṭvā, sambhūya, upakalpya</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Gdv
  <ul>
    <li>VERB: anūcyaḥ, anūcyam, kartavyam, ādṛtyam, anūcyāni, kartavyaḥ, atikramya, aśitavyam, deyam, havya</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: jīvase, dṛśe, janitoḥ, starītave, attave, bhartave, bhavitoḥ, cakṣase, etum, hiṃsitoḥ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: san, santam, satīm, bhavantaḥ, sataḥ, satī</li>
    <li>VERB: vidvān, samṛddham, yajamānaḥ, jātaḥ, upahūtā, kriyamāṇam, yajamānasya, yajamānāya, yajamānam, gṛhītaḥ</li>
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
      <li>ADJ: uttamām, svayā, prathamām, apagā, kāminī, uttamayā, vichandasaḥ, abhirūpā, atithimatī, brāhmaṇaspatyām</li>
      <li>AUX-Part: satīm, satī</li>
      <li>DET: sarvāḥ, sarvābhyaḥ, sarvābhiḥ, viśvāḥ, itithīm, sarvasyai, sarvāsām, svayā, ubhayyaḥ, sarvāsu</li>
      <li>NOUN: kṛtyā, vaśā, devatāḥ, diśaḥ, āpaḥ, iḍā, vāc, prajā, devatayā, diśam</li>
      <li>NUM: tisraḥ, trayastriṃśat, aṣṭau, aṣṭābhiḥ, dvayoḥ, catasraḥ, catasṛbhiḥ, pañca, ekayā, pañcāśat</li>
      <li>PRON: sā, tāḥ, tām, yāḥ, iyam, etāḥ, eṣā, yām, imāḥ, yā</li>
      <li>VERB-Gdv: kartavyāḥ, anūcyāḥ, dveṣyā, kalpayitavyāḥ, kartavye</li>
      <li>VERB-Part: upahūtā, kṛtā, samṛddhāḥ, jātā, bibhratī, pratibuddhāḥ, abhīṣṭāḥ, avasṛṣṭā, avattā, bhūtayā</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: prathamaḥ, ūrdhvaḥ, medhyaḥ, priyaḥ, jāḥ, kṛtam, sarve, aindram, devatyaḥ, pāpmā</li>
      <li>ADV: tena, sam, etena, tasya, sa</li>
      <li>AUX-Part: san, santam, bhavantaḥ, sataḥ</li>
      <li>DET: sarvān, sarve, sarveṣām, viśve, ubhayoḥ, sarvam, viśvaiḥ, viśvebhiḥ, anyake, bahave</li>
      <li>NOUN: devāḥ, agniḥ, deva, indraḥ, indra, yajñasya, devānām, agne, kāmaḥ, paśavaḥ</li>
      <li>NUM: sapta, trayaḥ, dvau, pañca, aṣṭau, caturaḥ, dvādaśā, ekam, ekaḥ, trīn</li>
      <li>PRON: yaḥ, sa, enam, tam, asya, saḥ, asmai, ye, te, eṣa</li>
      <li>VERB-Gdv: anūcyaḥ, kartavyaḥ, anumeyāḥ, asyāḥ, deyaḥ, dīkṣaṇīyam, guhyam, kartavyau, meyāḥ, pramocanīyaḥ</li>
      <li>VERB-Part: vidvān, yajamānaḥ, jātaḥ, yajamānasya, yajamānāya, yajamānam, gṛhītaḥ, upahūtaḥ, upāptaḥ, samṛddhaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: priyam, sarvam, arasam, abhirūpam, parokṣam, pratyakṣam, mahat, svena, bṛhat, indriyam</li>
      <li>ADV: tat, etat, yat, tena, idam, adaḥ, aparam, catuḥ, etad, tasmāt</li>
      <li>DET: viśvā, sarvāṇi, viśvam, sarvam, sarvaiḥ, sarveṣām, sarvā, viśvāni, sarvasya, svena</li>
      <li>NOUN: anna, rūpa, brahma, vīryam, namaḥ, rūpam, manaḥ, annam, viṣam, dhāma</li>
      <li>NUM: śatam, śata, sahasra, sapta, dvādaśa, sahasram, nava, śatāni, ekādaśa, trīṇi</li>
      <li>PRON: tat, yat, etat, idam, tena, tāni, etena, kim, yena, aparam</li>
      <li>VERB-Gdv: anūcyam, kartavyam, ādṛtyam, anūcyāni, aśitavyam, deyam, abhicaraṇīyam, avadānīyāni, caritavyam, drogdhavyam</li>
      <li>VERB-Part: samṛddham, kriyamāṇam, kṛtam, otāni, upahūtam, avadīyamānasya, parimitam, saṃśitam, śrutam, bhaviṣyat</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: goptārau, haritau, niyutvatī, vāhau, graiṣmau, haimanau, mahī, mithunau, puraḥsarau, ubhayoḥ</li>
      <li>AUX: āstām, bhavataḥ, syātām</li>
      <li>DET: ubhayoḥ, ubhaye</li>
      <li>NOUN: aśvinau, dyāvāpṛthivī, aśvinā, māsau, mitrāvaruṇau, triṣṭubhau, ahorātre, anuṣṭhātārau, barsau, gāyatryau</li>
      <li>NUM: dvau, dvayoḥ, dvābhyām, dve</li>
      <li>PRON: tau, vām, te, ete, ene, yuvam, enau, ime, etau, yau</li>
      <li>VERB: bhavataḥ, anutiṣṭhataḥ, gopāyataḥ, pibatam, praṇīyamānābhyām, pātam, samṛddhe, īśāte, abrūtām, apāghnātām</li>
      <li>VERB-Gdv: kartavyau, kartavye</li>
      <li>VERB-Part: praṇīyamānābhyām, samṛddhe, prohyamāṇābhyām, saṃpariśrite, upahūte, bhiyāne, bhīte, bhūtau, prattau, pratte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: sarve, samānān, arasān, puṇyāḥ, vichandasaḥ, viśve, adhare, daivyāḥ, revatīḥ, sarvān</li>
      <li>AUX: bhavanti, santu, āsan, stha, bhavantu, syāma, abhūtana, sthana, syuḥ, āsuḥ</li>
      <li>AUX-Part: bhavantaḥ</li>
      <li>DET: sarvāḥ, sarveṣām, sarvān, sarve, viśve, viśvā, sarvāṇi, sarvaiḥ, sarvābhyaḥ, sarvā</li>
      <li>NOUN: devāḥ, devānām, paśavaḥ, paśūn, devatāḥ, āpaḥ, marutaḥ, paśūnām, asurāḥ, devān</li>
      <li>NUM: tisraḥ, aṣṭau, pañca, sapta, śatāni, trayaḥ, trīṇi, aṣṭābhiḥ, saptabhiḥ, catasraḥ</li>
      <li>PRON: naḥ, ye, te, tāḥ, vaḥ, eṣām, tān, yāḥ, etāḥ, vayam</li>
      <li>VERB: āhuḥ, akurvan, anuvyacalan, abruvan, yanti, bhavanti, abhavan, abhiśaṃsanti, yantu, ālabhanta</li>
      <li>VERB-Gdv: anūcyāni, kartavyāḥ, anumeyāḥ, anūcyāḥ, asyāḥ, avadānīyāni, kalpayitavyāḥ, kartvāni, meyāḥ, rādhyāḥ</li>
      <li>VERB-Part: samṛddhāḥ, devayantaḥ, otāni, bibhrataḥ, dipsataḥ, jātān, pratibuddhāḥ, upahūtāḥ, śatrūyatām, abhīṣṭāḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: priyam, prathamaḥ, sarvam, uttamām, arasam, ūrdhvaḥ, medhyaḥ, priyaḥ, svayā, āgneyam</li>
      <li>ADV: tat, etat, tena, yat, idam, adaḥ, aparam, catuḥ, etad, etena</li>
      <li>AUX: asi, bhavati, astu, syāt, asaḥ, san, āsīt, asat, asmi, asti</li>
      <li>AUX-Part: san, santam, satīm, sataḥ, satī</li>
      <li>DET: sarvam, viśvam, itithīm, sarvasya, sarvasyai, sarveṇa, svayā, sve, svena, viśvasya</li>
      <li>NOUN: agniḥ, indraḥ, yajñasya, agne, kāmaḥ, yajñam, lokam, vīryam, yajñaḥ, brahma</li>
      <li>NUM: śatam, sapta, dvādaśa, sahasram, nava, ekādaśa, daśa, ekam, sahasrasya, dvādaśā</li>
      <li>PRON: yaḥ, sa, enam, tat, tam, te, yat, asya, saḥ, tvā</li>
      <li>VERB: bhavati, veda, anvāha, ālabheta, āha, uvāca, vidvān, anuvyacalat, abhavat, dadhāti</li>
      <li>VERB-Gdv: anūcyaḥ, anūcyam, kartavyam, ādṛtyam, kartavyaḥ, aśitavyam, deyam, abhicaraṇīyam, caritavyam, deyaḥ</li>
      <li>VERB-Part: vidvān, samṛddham, yajamānaḥ, jātaḥ, upahūtā, kriyamāṇam, yajamānasya, yajamānāya, yajamānam, gṛhītaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: bhadrāt, dakṣiṇāyāḥ, dhruvāt, dhruvāyāḥ, pratīcyāḥ, prācyāḥ, sarvebhyaḥ, udīcyāḥ, ūrdhvāyāḥ, asitāt</li>
      <li>ADV: tasmāt</li>
      <li>DET: sarvābhyaḥ</li>
      <li>NOUN: antardeśāt, diśaḥ, rakṣobhyaḥ, araṇyāt, aṃhasaḥ, agneḥ, divaḥ, mukhataḥ, devebhyaḥ, pṛthivyāḥ</li>
      <li>NUM: sahasrāt, trayodaśāt</li>
      <li>PRON: asmat, tasmāt, mat, asmāt, tvat, ebhyaḥ, tasyāḥ, anyebhyaḥ, atas, etasyāḥ</li>
      <li>VERB-Part: ālabdhāt, chinnāt, adhyastāt, jāyamānāt, mṛtāt, yajamānāt, āyataḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: uttamām, priyam, āgneyam, prathamām, kṛtam, pratyakṣam, ādam, aindram, parokṣam, samānān</li>
      <li>ADV: tat, etat, idam, adaḥ, yat, aparam, catuḥ, etad, kim, tad</li>
      <li>AUX-Part: santam, satīm</li>
      <li>DET: sarvān, sarvāḥ, sarvam, viśvā, viśvam, sarvā, viśvāḥ, itithīm, sarvāṇi, svam</li>
      <li>NOUN: yajñam, lokam, paśūn, somam, agnim, svargam, vīryam, diśam, vācam, annam</li>
      <li>NUM: sapta, śatam, tisraḥ, aṣṭau, dvādaśa, sahasram, ṣaḍ, caturaḥ, ekam, pañca</li>
      <li>PRON: enam, tam, tvā, tat, naḥ, mā, tām, imam, yat, tān</li>
      <li>VERB-Gdv: dīkṣaṇīyam, guhyam, saṃveśyam</li>
      <li>VERB-Part: kriyamāṇam, yajamānam, samṛddhāḥ, sutam, vidvāṃsam, dipsataḥ, jātam, jātān, samṛddham, abhiśasyamānam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: kṛte, niyutvate, śaśvatībhyaḥ, dātre, ghne, mahate, yāvadbhyaḥ, arbhakebhyaḥ, avarāya, avyathyāya</li>
      <li>DET: sarvasyai, sarvābhyaḥ, bahave, sarvebhyaḥ</li>
      <li>NOUN: samṛddhyai, agnaye, indrāya, vāyave, devebhyaḥ, tvāya, bhūtyai, kāmāya, rājñe, balāya</li>
      <li>NUM: caturbhyaḥ</li>
      <li>PRON: asmai, te, naḥ, tasmai, me, mahyam, tubhyam, asmabhyam, asyai, tasyai</li>
      <li>VERB-Part: yajamānāya, dāśuṣe, mathyamānāya, praṇīyamānābhyām, prohyamāṇābhyām, sunvate, upākṛtāya, śapathīyate, abhiṣiktāya, ajyamānāya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: prāyaṇīyasya, sviṣṭakṛtaḥ, sarvāsām, svānām, agnīṣomīyasya, amṛtānām, arasasya, bahūnām, dakṣiṇāyāḥ, dhruvāyāḥ</li>
      <li>ADV: tasya</li>
      <li>AUX-Part: sataḥ</li>
      <li>DET: sarveṣām, sarvasya, sarvāsām, viśvasya, viśveṣām</li>
      <li>NOUN: yajñasya, devānām, paśūnām, apām, somasya, agneḥ, diśaḥ, brahmaṇaḥ, chandasām, indrasya</li>
      <li>NUM: sahasrasya, aṣṭānām, dvayoḥ, trayāṇām, śatasya</li>
      <li>PRON: asya, te, tasya, naḥ, me, eṣām, yasya, vaḥ, mama, etasya</li>
      <li>VERB-Part: yajamānasya, avadīyamānasya, carataḥ, dīkṣitasya, śatrūyatām, hutasya, jāyamānasya, kṛtasya, prasthitasya, samiddhasya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: svayā, svena, ādena, kevalena, uttamayā, aindreṇa, annādyā, annādībhiḥ, bhūyasībhiḥ, daivyena</li>
      <li>ADV: tena, etena</li>
      <li>DET: sarvaiḥ, sarvābhiḥ, sarveṇa, svayā, svena, viśvaiḥ, viśvebhiḥ</li>
      <li>NOUN: devatayā, bhāgadheyena, brahmaṇā, manasā, indriyeṇa, vācā, haviṣā, agninā, paśunā, pāpmanā</li>
      <li>NUM: aṣṭābhiḥ, saptabhiḥ, catasṛbhiḥ, dvābhyām, ekayā, daśabhiḥ, ekaviṃśatyā, ekena, pañcabhiḥ, tisṛbhiḥ</li>
      <li>PRON: tena, etena, anena, yena, taiḥ, tayā, etayā, tvayā, etābhiḥ, tābhiḥ</li>
      <li>VERB-Part: viduṣā, bhūtayā, śrutena, avaglāyatā, dattena, dīkṣitena, juṣāṇena, krīyamāṇena, pratibruvadbhiḥ, satā</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: mahati, prācyām, sve, sveṣu, amāvāsye, hiraṇyaye, svāyām, ubhayoḥ, āśvine, amṛteṣu</li>
      <li>DET: ubhayoḥ, sve, sarveṣu, sarvāsu</li>
      <li>NOUN: yajñe, loke, gṛhe, agnau, apsu, ātman, agre, divi, araṇye, deveṣu</li>
      <li>NUM: dvayoḥ, triṣu, daśame, dvādaśe</li>
      <li>PRON: asmin, asyām, mayi, tasyām, tasmin, eṣu, tāsu, amuṣmin, anye, asmāsu</li>
      <li>VERB-Part: yajamāne, āgate, praṇīyamāne, utthite, anuvakṣyati, hutāyām, uktāyām, śasyamāne, adhiśrite, anubruvati</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: prathamaḥ, priyam, ūrdhvaḥ, medhyaḥ, priyaḥ, abhirūpam, arasam, jāḥ, sarvam, sarve</li>
      <li>ADV: tat, yat, etat, sa</li>
      <li>AUX-Part: san, bhavantaḥ, satī</li>
      <li>DET: sarvāḥ, sarve, viśve, sarvāṇi, ubhayyaḥ, viśvam, viśvāni, anyake, bahu, sarvam</li>
      <li>NOUN: agniḥ, devāḥ, indraḥ, kāmaḥ, paśavaḥ, yajñaḥ, prajāpatiḥ, somaḥ, vaśā, hotā</li>
      <li>NUM: śatam, sapta, dvādaśa, nava, pañca, ekādaśa, sahasram, trayaḥ, aṣṭau, śatāni</li>
      <li>PRON: yaḥ, sa, saḥ, yat, tat, sā, te, ye, tvam, eṣa</li>
      <li>VERB-Gdv: anūcyaḥ, anūcyam, kartavyam, ādṛtyam, anūcyāni, kartavyaḥ, aśitavyam, deyam, kartavyāḥ, abhicaraṇīyam</li>
      <li>VERB-Part: vidvān, samṛddham, yajamānaḥ, jātaḥ, upahūtā, gṛhītaḥ, kṛtā, upahūtaḥ, upāptaḥ, samṛddhaḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: vaśin, revatīḥ, sahure, santya, subhage, vaso, vājin, yaviṣṭha, adhrigo, alīkāḥ</li>
      <li>DET: viśve</li>
      <li>NOUN: agne, indra, oṣadhe, vrātya, soma, aśvinā, deva, jātavedaḥ, vaśe, marutaḥ</li>
      <li>NUM: sapta</li>
      <li>PRON: pare</li>
      <li>VERB-Part: khāte, hūta, iṣita, samṛddha, saṃśite</li>
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
      <li>AUX: astu, santu, bhavantu, edhi, bhava, bhavatu, bodhi</li>
      <li>VERB: etu, jahi, cara, kṛdhi, dhehi, pātu, tiṣṭha, anubrūhi, kṛṇu, yajai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: asi, bhavati, bhavanti, āsīt, āsan, asmi, asti, stha, abhūtana, sthana</li>
      <li>VERB: bhavati, veda, anvāha, āhuḥ, āha, uvāca, anuvyacalat, abhavat, dadhāti, gacchati</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Jus
    <ul>
      <li>AUX: śakan</li>
      <li>VERB: rūrupaḥ, dhāḥ, duḥ, karat, takṣan, vidan, vidat, anuvocaḥ, apagāḥ, bharan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX: syāt, syāma, syām, syuḥ, syātām, syāḥ</li>
      <li>VERB: ālabheta, yājayet, anubrūyāt, kurvīta, kuryāt, brūyāt, jāyeta, icchet, iyāt, kīrtayet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: asaḥ, asat, asasi, asāni, asati, bhuvat</li>
      <li>VERB: asat, kṛṇavat, dadhat, āyati, ativardhā, bhavāsi, bhavāti, bibharāsi, dhāḥ, dipsāt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: utsrakṣyāmaḥ, pārayitāsmi, anuvakṣyati, bhaviṣyat, eṣyati, āgantā, abhidhrokṣyan, anuprajñāsyanti, avakalpayiṣyasi, bhavitā</li>
      <li>VERB-Part: anuvakṣyati, bhaviṣyat, abhidhrokṣyan, kariṣyataḥ, lapsyamānaḥ, nidhāsyantaḥ, nihaniṣyantaḥ, yakṣyamāṇaḥ, ālapsyamānaḥ, āsatsyan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: āsīt, āsan, abhūtana, āstām, āsa, āsuḥ, āyan, abhavat, abhūt, abhūvan</li>
      <li>VERB: veda, anvāha, āhuḥ, āha, uvāca, vidvān, anuvyacalat, abhavat, samṛddham, upāsarat</li>
      <li>VERB-Part: vidvān, samṛddham, jātaḥ, upahūtā, gṛhītaḥ, kṛtā, upahūtaḥ, upāptaḥ, samṛddhaḥ, samṛddhāḥ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB: anannamuḥ, jagrabham</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: asi, bhavati, astu, syāt, asaḥ, san, bhavanti, santu, asat, asmi</li>
      <li>AUX-Part: san, santam, satīm, bhavantaḥ, sataḥ, satī</li>
      <li>VERB: bhavati, ālabheta, dadhāti, gacchati, yajati, yajamānaḥ, āśāste, avarunddhe, upahvayate, etu</li>
      <li>VERB-Part: yajamānaḥ, kriyamāṇam, yajamānasya, yajamānāya, yajamānam, yajamāne, devayantaḥ, abhicaran, caran, avadīyamānasya</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: kriyamāṇam, kriyate, ālabhyate, avadīyamānasya, mathyamānāya, praṇīyamāne, praṇīyamānābhyām, ālabhyante, abhiśasyamānam, anuvidyate</li>
      <li>VERB-Part: kriyamāṇam, avadīyamānasya, mathyamānāya, praṇīyamāne, praṇīyamānābhyām, abhiśasyamānam, prohyamāṇābhyām, śasyamāne, ajyamānāya, hūyamānāyām</li>
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
      <li>AUX: asmi, syāma, asāni, syām, bhavāmaḥ, smasi</li>
      <li>VERB: yajai, kṛṇomi, utsrakṣyāmaḥ, vidma, agrabham, avocam, hanmi, havāmahe, muñcāmi, pārayitāsmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: asi, asaḥ, stha, asasi, edhi, abhūtana, sthana, bhava, bodhi, syāḥ</li>
      <li>VERB: jahi, cara, kṛdhi, dhehi, tiṣṭha, anubrūhi, kṛṇu, bhava, piba, yajasva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: bhavati, astu, syāt, bhavanti, āsīt, santu, asat, āsan, asti, bhavantu</li>
      <li>VERB: bhavati, veda, anvāha, ālabheta, āhuḥ, āha, uvāca, anuvyacalat, abhavat, dadhāti</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: as, bhū.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: as, bhū, i, śak, kṛ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (12)</li>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Nom (957)</li>
      <li>VERB--NOUN-Nom-ADP(iva) (1)</li>
      <li>VERB--NOUN-Voc (2)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Gen (2)</li>
      <li>VERB--PRON-Nom (847)</li>
      <li>VERB-Conv--NOUN-Nom (5)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Gdv--NOUN-Nom (17)</li>
      <li>VERB-Gdv--PRON-Nom (13)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Part--NOUN (2)</li>
      <li>VERB-Part--NOUN-Gen (4)</li>
      <li>VERB-Part--NOUN-Loc (25)</li>
      <li>VERB-Part--NOUN-Nom (103)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Loc (6)</li>
      <li>VERB-Part--PRON-Nom (73)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (7)</li>
      <li>VERB--NOUN-Acc (1141)</li>
      <li>VERB--NOUN-Acc-ADP(apa) (1)</li>
      <li>VERB--NOUN-Acc-ADP(upa) (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Gen (11)</li>
      <li>VERB--NOUN-Loc (1)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Acc (624)</li>
      <li>VERB--PRON-Acc-ADP(anu) (1)</li>
      <li>VERB--PRON-Acc-ADP(pari) (2)</li>
      <li>VERB--PRON-Acc-ADP(prati) (1)</li>
      <li>VERB--PRON-Acc-ADP(upa) (1)</li>
      <li>VERB--PRON-Dat (2)</li>
      <li>VERB--PRON-Gen (7)</li>
      <li>VERB--PRON-Nom (1)</li>
      <li>VERB-Conv--NOUN-Acc (56)</li>
      <li>VERB-Conv--PRON-Acc (22)</li>
      <li>VERB-Gdv--PRON-Gen (1)</li>
      <li>VERB-Inf--NOUN-Acc (4)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON-Acc (4)</li>
      <li>VERB-Part--NOUN-Acc (64)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--PRON-Acc (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (21)</li>
      <li>VERB--NOUN-Dat (156)</li>
      <li>VERB--NOUN-Gen (4)</li>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--NOUN-Loc (1)</li>
      <li>VERB--PRON-Acc (62)</li>
      <li>VERB--PRON-Dat (176)</li>
      <li>VERB--PRON-Gen (5)</li>
      <li>VERB-Conv--NOUN-Acc (1)</li>
      <li>VERB-Conv--NOUN-Dat (2)</li>
      <li>VERB-Conv--NOUN-Ins (1)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Conv--PRON-Dat (4)</li>
      <li>VERB-Gdv--NOUN-Dat (3)</li>
      <li>VERB-Gdv--NOUN-Gen (3)</li>
      <li>VERB-Gdv--PRON-Dat (1)</li>
      <li>VERB-Gdv--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Part--NOUN-Dat (9)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (5)</li>
      <li>VERB-Part--PRON-Gen (4)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
