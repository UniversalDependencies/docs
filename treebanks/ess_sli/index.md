---
layout: base
title:  'UD_Yupik-SLI'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Yupik SLI

Language: [Yupik](/ess/index.html) (code: `ess`)<br/>
Family: Eskimo-Aleut

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Hyunji Hayley Park, Lane Schwartz, Francis Tyers.

Repository: [UD_Yupik-SLI](https://github.com/UniversalDependencies/UD_Yupik-SLI)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udess_sli219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Yupik-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Yupik-SLI/issues).
If you want to collaborate, please contact [hpark129&nbsp;(æt)&nbsp;illinois&nbsp;•&nbsp;edu].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Yupik-SLI is a treebank of St. Lawrence Island Yupik (ISO 639-3: ess) that has been manually annotated at the morpheme level, based on a finite-state morphological analyzer by [Chen et al., 2020](https://www.aclweb.org/anthology/2020.lrec-1.326).
The word-level annotation, merging multiword expressions, is provided in not-to-release/ess_sli-ud-test.merged.conllu.
More information about the treebank can be found in our publication (AmericasNLP, 2021).



The current version contains dependency annotations for end-of-chapter exercises in *A practical grammar of the St. Lawrence Island/Siberian Yupik Eskimo language* (Jacobson, 2001).

## Acknowledgments

...

## References

```
@inproceedings{park-etal-2021-expanding,
title = "Expanding Universal Dependencies for Polysynthetic Languages: A Case of St.~Lawrence Island Yupik",
author = "Park, Hyunji Hayley and
Schwartz, Lane and
Tyers, Francis M.",
booktitle = "Proceedings of the 1st Workshop on NLP for Indigenous Languages of the Americas (AmericasNLP)",
month = jun,
year = "2021",
address = "Online",
publisher = "Association for Computational Linguistics"
}

@inproceedings{chen-etal-2020-improved,
title = "Improved Finite-State Morphological Analysis for {S}t. {L}awrence {I}sland {Y}upik Using Paradigm Function Morphology",
author = "Chen, Emily and
Park, Hyunji Hayley and
Schwartz, Lane",
booktitle = "Proceedings of the 12th Language Resources and Evaluation Conference",
month = may,
year = "2020",
address = "Marseille, France",
publisher = "European Language Resources Association",
url = "https://www.aclweb.org/anthology/2020.lrec-1.326",
pages = "2676--2684",
language = "English",
ISBN = "979-10-95546-34-4",
}

@book{jacobsonPracticalGrammarSt2001,
title = {A Practical Grammar of the {% raw %}{{{% endraw %}St{% raw %}}}{% endraw %}. {% raw %}{{{% endraw %}Lawrence Island{% raw %}}}{% endraw %}/{% raw %}{{{% endraw %}Siberian Yupik Eskimo{% raw %}}}{% endraw %} Language},
author = {Jacobson, Steven A.},
year = {2001},
edition = {2. ed},
publisher = {% raw %}{{{% endraw %}Alaska Native Language Center, College of Liberal Arts, University of Alaska{% raw %}}}{% endraw %},
address = {% raw %}{{{% endraw %}Fairbanks{% raw %}}}{% endraw %},
isbn = {978-1-55500-077-6},
language = {en}
}

```


# Statistics of UD Yupik SLI

## POS Tags

[ADV](ess_sli-pos-ADV.html) – [CCONJ](ess_sli-pos-CCONJ.html) – [DET](ess_sli-pos-DET.html) – [NOUN](ess_sli-pos-NOUN.html) – [NUM](ess_sli-pos-NUM.html) – [PART](ess_sli-pos-PART.html) – [PRON](ess_sli-pos-PRON.html) – [PUNCT](ess_sli-pos-PUNCT.html) – [VERB](ess_sli-pos-VERB.html) – [X](ess_sli-pos-X.html)

## Features

[Aspect](ess_sli-feat-Aspect.html) – [Case](ess_sli-feat-Case.html) – [Mood](ess_sli-feat-Mood.html) – [Number](ess_sli-feat-Number.html) – [Number[obj]](ess_sli-feat-Number-obj.html) – [Number[psor]](ess_sli-feat-Number-psor.html) – [Number[subj]](ess_sli-feat-Number-subj.html) – [Person](ess_sli-feat-Person.html) – [Person[obj]](ess_sli-feat-Person-obj.html) – [Person[psor]](ess_sli-feat-Person-psor.html) – [Person[subj]](ess_sli-feat-Person-subj.html) – [Polarity](ess_sli-feat-Polarity.html) – [PronType](ess_sli-feat-PronType.html) – [Reflex](ess_sli-feat-Reflex.html) – [Reflex[obj]](ess_sli-feat-Reflex-obj.html) – [Reflex[subj]](ess_sli-feat-Reflex-subj.html) – [Subcat](ess_sli-feat-Subcat.html) – [Tense](ess_sli-feat-Tense.html)

## Relations

[acl](ess_sli-dep-acl.html) – [advcl](ess_sli-dep-advcl.html) – [advmod](ess_sli-dep-advmod.html) – [appos](ess_sli-dep-appos.html) – [cc](ess_sli-dep-cc.html) – [conj](ess_sli-dep-conj.html) – [dep:ana](ess_sli-dep-dep-ana.html) – [dep:aux](ess_sli-dep-dep-aux.html) – [dep:cop](ess_sli-dep-dep-cop.html) – [dep:emo](ess_sli-dep-dep-emo.html) – [dep:mark](ess_sli-dep-dep-mark.html) – [dep:pos](ess_sli-dep-dep-pos.html) – [det](ess_sli-dep-det.html) – [mark](ess_sli-dep-mark.html) – [nmod](ess_sli-dep-nmod.html) – [nmod:arg](ess_sli-dep-nmod-arg.html) – [nsubj](ess_sli-dep-nsubj.html) – [nummod](ess_sli-dep-nummod.html) – [obj](ess_sli-dep-obj.html) – [obl](ess_sli-dep-obl.html) – [obl:mod](ess_sli-dep-obl-mod.html) – [punct](ess_sli-dep-punct.html) – [root](ess_sli-dep-root.html) – [xcomp](ess_sli-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 309 sentences, 1221 tokens and 1481 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 310 tokens (25%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 4 types of words that contain both letters and punctuation. Examples: Nome-emun, an'gani, an'gigh, un'gani</li>
</ul>

<ul>
<li>This corpus contains 232 multi-word tokens. On average, one multi-word token consists of 2.12 syntactic words.</li>
<li>There are 221 types of multi-word tokens. Examples: Aanaqukung, Sangaawa, aanaqut, atughnaqunga, gaaghpenaan, igleghtaqut, kavilnguq, llilukillu, naghaaghaqut, qepghaghllequq, riigteghllagmeng, Aanigatuq, Aarragkiighluku, Aawhllaget, Aghnaghllagem, Aghnaghllaget, Aghveliighsiin, Aghvightesugiinkut, Agniqelghii, Akitutaqukung, Akuzingigalkuvek, Angyangllaghyugsiin, Apalguunga, Atiimaaq, Esghaataqukut, Esghaghlleqamken, Espamani, Gaaghutaa, Gaaghyugaqa, Ingaghsugtunga, Iyataamakuvek, Kaannaqut, Kaaskaagut, Kinangaawa, Kinanguzin, Kinkungaawat, Kinkungutsi, Laalighfiknaqaqa, Laluramkenguut, Latakaagunga, Mangteghaghllangllaghyugtukut, Naakallu, Neghegkaawaa, Neghenghilkuvek, Pinighsaghlleqagka, Qavanghitunga, Qaviigatukung, Qefliqelghiim, Qefliqutamken, Qepghaghaqunga.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 10 UPOS tags out of 17 possible: <a>ADV</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PROPN, ADJ, AUX, ADP, SCONJ, INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): elngaatall, ighivgaq, qayughllak, quunpeng, unaami</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as pronouns (PRON): elpenun, iigna, iingku, ingku, kaanyuq, kina, kinku, kitu, kitumun, m, paamna, pagna, piku, qaamna, sameng, whangkunnun</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as determiners (DET): nali, qafsina</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as auxiliaries (AUX): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: qergesek, Kaamgek, eglluk, walguyaagkek, Aghnak, Kaamgegken, Laluramkek, Nengyugka, Panigegka, Qikmigka</li>
      <li>PRON: iingkuk</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADV: Allakaghmeng, Qerngaghmeng, mataghmeng</li>
      <li>DET: Qafsinaneng</li>
      <li>NOUN: aqelqat, taghnughhaat, yuget, aatghit, ighneghten, mekelghiighet, Quyillget, Siivanlleghet, Teghikusat, Tengegkayuget</li>
      <li>NUM: maaghraghvinlegneng</li>
      <li>PRON: ingkut, whangkunnun</li>
      <li>X: taghnughhiit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADV: ellnginaan, ellnginaghmi</li>
      <li>DET: Naliita, Naliit</li>
      <li>NOUN: yugem, ghllagmeng, lghii, mangteghameng, naagpek, Sivuqaghmeng, Taghnughhaq, aatgha, apeghtughistem, ighneqa</li>
      <li>PRON: Kitum, paamna, Iigna, Kaanyuq, Qaamna, elpenun, m, pagna, pikum</li>
      <li>X: taghnughhaq</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADV: aagken, Pikegken, paamken</li>
      <li>DET: Qafsinaneng</li>
      <li>NOUN: ghllagmeng, mangteghameng, Sivuqaghmeng, pagunghaghmeng, akuutameng, anipameng, eflugameng, ighaleqetaaghmeng, legmeng, lghiimeng</li>
      <li>NUM: maaghraghvinlegneng</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>DET: Naliit</li>
      <li>NOUN: aqelqat, qergesek, lghii, yuget, Taghnughhaq, aatgha, aatghit, ighneghten, ighneqa, kemekraga</li>
      <li>PRON: paamna, Iigna, Qaamna, pagna</li>
      <li>X: taghnughhaq, taghnughhiit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abs,Erg
    <ul>
      <li>PRON: iingkuk, ingkut</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADV: kiwavek, pagavek, sakmavek, whavek</li>
      <li>NOUN: eslamun, naayghamun, naayvamun, Nome-emun, Sivungaghmun, Sivuqaghmun, Tipelegnun, Ungazimun, aghnamun, aqumutagnun</li>
      <li>PRON: elpenun, whangkunnun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>NOUN: Yupigestun, Laluramkestun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>DET: Naliita</li>
      <li>NOUN: lghiim, yugem, Aghnalqwaaghem, apeghtughistem, naagpek, qikmima, Aghnaghaam, Aghnam, Apeghtughistegpek, Ighneghma</li>
      <li>PRON: Kitum, m, pikum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: Yugem, Naagpek, taghnughhaghma, Apama, Apeghtughistem, Apeghtughistet, Estugam, Mekelghiighem, Mekelghiighet, Naayvam</li>
      <li>PRON: Kitum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADV: Awani, Ingani, Qagani, an'gani, imani, maani, pamani, pikani, un'gani, whani</li>
      <li>NOUN: Ungazimi, eslami, igaghvigmi, Sivuqami, eflugami, esnami, guyguni, kiiwegni, mangteghami, naayghani</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Per
    <ul>
      <li>ADV: paaggun</li>
      <li>NOUN: angyakun, qaayngakun, tengegkayugteggun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>PRON: Kaanyuq</li>
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
      <li>VERB: neghefqaavek, Neghyaqunaan, Pumsufqaama, Tuqutefqaan, atuqefqaagkenka, kuuvefqaan</li>
      <li>X: nghitunga, ghpenaan, neghin, nghite, igatukung, igatuq, igatut, neghitaanga, nghilkuvek, nghitagu</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>X: aqukung, aqunga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>X: aqut, aquq, iquq, aqa, aqaa, aqsin, aqukung, aqukut, gaquq, iqa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cn1
    <ul>
      <li>VERB: Esghaghyagu, Esghaghyamigu, Esghaghyatni, Iyataghyama, Iyataghyamta, aanyan, aghyuughyavgu, esghaasameng, iflayamkun, iflayavgu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cn2
    <ul>
      <li>VERB: Tagiiqngan, inghwaaqngama, kiyaghtaqngami, kiyaghtaqngan, laalightaqngavnga</li>
      <li>X: awaqngami</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnc
    <ul>
      <li>VERB: Meghnughngaaghmeng, Ungipaateghngaaghpenga, anuqlighngaan, eslallugughteghngaan, negheghnaaghpek, ngaghngaaghmi, qilugngaaghminga, ughteghngaan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: iikwan, piyukuvek, Aanegkufsi, Igleghtekuvek, kayusiquvnga, naavumakagkenka, qavaqata</li>
      <li>X: amakuvek, makuni, nghilkuvek, ngigalkuvek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ctm
    <ul>
      <li>VERB: qavaneghpek, qilunghata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: lguuq, esghaatunga, iflaak, lguut, ungipaataanga, mekestaaghhaaguq, quyaaq, neghaqa, neghtuq, neghtut</li>
      <li>X: aqut, aquq, llequq, naqaqa, nghitunga, umaaq, aqukung, iquq, lleqagka, lleqii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>VERB: iyataghsin, Esghaghsiki, Qawaagniighsin, aallgetsi, aghulaqsin, amqeghtaten, esghaatetsi, esghaghsigu, iknaqsin, inghuziki</li>
      <li>X: lleqsikek, aqsin, lleqagu, lleqesta, lleqestung, lleqsikung, lleqsin, lleqsinga, naqsigu, naqsin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB: Tagitiki, guutigu, neghefqaavek, Aapnaken, Aqfalangi, Neghi, Neghyaqunaan, Piyaalghaakut, Piyugeltung, Pugimaaltung</li>
      <li>X: utigu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prc
    <ul>
      <li>VERB: kaatfagilgata, pangeghfagilgama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptc
    <ul>
      <li>X: makanga, umalghiit, umakangi, umaken</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sbr
    <ul>
      <li>VERB: lliluki, naluni, niluten, maliglluku, naavluni, naluki, naluku, nalutek, ngunateng, niluki</li>
      <li>X: ghpenaan, maluni, umaluki, umaluteng</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: Aapnaken, Neghyaqunaan, Piyaalghaakut, naqaanga, niighhaakut</li>
      <li>X: llequq, lleqsikek, naqaqa, lleqagka, lleqii, llequnga, llequt, llequten, naqe, naqunga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>X: umalghii, malghii, uma, amakuvek, makuni, maluni, umalghiit, umaluki, umaluteng</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: Tagitiki, guutigu, neghefqaavek, Aqfalangi, Neghi, Piyugeltung, Pugimaaltung, Pumsufqaama, Qayuulta, Tugugu</li>
      <li>X: aqut, aquq, aqukung, iquq, aqa, aqaa, aqsin, aqukut, aqunga, gaquq</li>
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
      <li>PRON: paamna, Iigna, Kaanyuq, Qaamna, ingkut, m, pagna, pikum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: Qakun, Sangavek, Qavngaq, Navek, Sangan, Naken, Nani, Sangami, naten, Sangama</li>
      <li>DET: Naliita, Qafsinaneng, Naliit</li>
      <li>PRON: Kina, Kinku, Kitum, Sameng, Kitumun</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADV: Allakaghmeng, Qerngaghmeng, ellnginaghmi, mataghmeng</li>
      <li>NOUN: apami, atkuni, avaqutami, avaqutaminun, eltughani, gkeni, ugini, yavluni</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: whangkunnun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: elpenun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADV: Allakaghmeng, Qerngaghmeng, ellnginaan, ellnginaghmi, mataghmeng</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: tukumtung, ullghitagpung</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: Naliita, Naliit</li>
      <li>NOUN: aatghit, atangat, naangat, nuliighit</li>
      <li>X: taghnughhiit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: naagpek, aatgha, ighneghten, ighneqa, kemekraga, qikmima, Naaka, apaka, atanga, qikmii</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Number[obj]</a>
    <ul>
      <li>Dual
        <ul>
          <li>VERB: iflaak, atuqefqaagkenka, kakek, qelpeghsafkek, qelpeghtikek, umegkek</li>
          <li>X: lleqsikek, lleqagka, lleqsikung</li>
        </ul>
      </li>
      <li>Plur
        <ul>
          <li>VERB: Tagitiki, lliluki, Aqfalangi, Esghaghsiki, Laalighfikiikut, Lliki, aavgii, inghuziki, kanka, lliiki</li>
          <li>X: lleqii, lleqiit, umakangi, umaluki</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: ungipaataanga, guutigu, neghaqa, Aapnaken, Esghaghyagu, Esghaghyamigu, Esghaghyatni, Igamsiqayugvikamken, Kayusighnga, Naafqaqa</li>
          <li>X: naqaqa, ghpenaan, makanga, aqaa, lleqagu, lleqamken, lleqsinga, naqaa, naqsigu, neghitaanga</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[subj]</a>
    <ul>
      <li>Dual
        <ul>
          <li>VERB: iflaak, Aqiigukung, Piyugeltung, Piyugtukung, Pugimaaltung, aghulaquk, esghaatukung, iyataghtuk, lguuk, mayughestek</li>
          <li>X: aqukung, ftuk, igatukung, imaak, lleqestung, naquk, naqukung</li>
        </ul>
      </li>
      <li>Dual,Plur,Sing
        <ul>
          <li>VERB: Igamsiqayugvikamken, Neghyaqunaan, Pumsufqaama, Tuqutefqaan, atuqefqaagkenka, kuuvefqaan</li>
          <li>X: lleqamken, utamken</li>
        </ul>
      </li>
      <li>Plur
        <ul>
          <li>VERB: lguut, neghtut, taakut, tagiit, yugtut, Aanegkufsi, Gaaghtut, Iyataghyamta, Meghnughngaaghmeng, Neghtusi</li>
          <li>X: aqut, llequt, naqut, umalghiit, aqukut, ftut, igatut, iqut, kaagut, lguut</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: lguuq, esghaatunga, ungipaataanga, Tagitiki, mekestaaghhaaguq, quyaaq, guutigu, iflaak, iikwan, iyataghsin</li>
          <li>X: aquq, llequq, lleqsikek, naqaqa, ngaawa, nghitunga, umaaq, umalghii, iquq, lleqagka</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[obj]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB: ungipaataanga, Kayusighnga, Laalighfikiikut, Pumsufqaama, Ungipaateghngaaghpenga, kayusiquvnga, laalightaqngavnga, naqaanga, qiluglunga, qilugngaaghminga</li>
          <li>X: lleqsikung, lleqsinga, neghitaanga</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB: Igamsiqayugvikamken, amqeghtaten, niluten, staten</li>
          <li>X: lleqamken, utamken</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: Tagitiki, guutigu, iflaak, lliluki, neghaqa, Aapnaken, Aqfalangi, Esghaghsiki, Esghaghyagu, Esghaghyamigu</li>
          <li>X: lleqsikek, naqaqa, ghpenaan, lleqagka, lleqii, makanga, aqaa, lleqagu, lleqiit, naqaa</li>
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
          <li>NOUN: ighneqa, qikmima, Naaka, apaka, qulmesiitka, taghnughhaghma, Aakaqa, Apama, Ataka, Avaqutanka</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: naagpek, ighneghten, Aakaan, Apan, Apeghtughistegpek, Atkugen, Kaamgegken, Naan, Nengyughpek, Nunan</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: Naliita, Naliit</li>
          <li>NOUN: aatgha, aatghit, kemekraga, atanga, qikmii, walguyaagkek, Apanga, aatghaneng, anengaa, apami</li>
          <li>X: taghnughhiit</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[subj]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB: esghaatunga, neghaqa, sugtunga, Aqfalangi, Aqiigukung, Igamsiqayugvikamken, Iyataghyama, Iyataghyamta, Naafqaqa, Nallukaqa</li>
          <li>X: naqaqa, nghitunga, aqukung, lleqagka, llequnga, naqunga, aqukut, aqunga, igatukung, kaagunga</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB: Tagitiki, guutigu, iyataghsin, neghefqaavek, piyukuvek, Aanegkufsi, Aapnaken, Esghaghsiki, Igleghtekuvek, Kayusighnga</li>
          <li>X: lleqsikek, llequten, amakuvek, aqsin, lleqsikung, lleqsin, lleqsinga, llequsi, naqsigu, naqsin</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: lguuq, iflaak, lguut, ungipaataanga, mekestaaghhaaguq, quyaaq, iikwan, naluni, neghtuq, neghtut</li>
          <li>X: aqut, aquq, llequq, ngaawa, umaaq, umalghii, iquq, lleqii, llequt, makanga</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex[obj]</a>
    <ul>
      <li>Yes
        <ul>
          <li>VERB: Esghaghyatni, aghyuughyavgu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex[subj]</a>
    <ul>
      <li>Yes
        <ul>
          <li>VERB: naluni, Esghaghyamigu, Meghnughngaaghmeng, esghaasameng, kiyaghtaqngami, naavluni, nalutek, ngaghngaaghmi, ngunateng, piyugluni</li>
          <li>X: awaqngami, makuni, maluni, umaluteng</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Subcat</a>
    <ul>
      <li>Intr
        <ul>
          <li>VERB: lguuq, esghaatunga, lguut, mekestaaghhaaguq, quyaaq, iflaak, iikwan, iyataghsin, naluni, neghefqaavek</li>
          <li>X: aqut, aquq, llequq, nghitunga, umaaq, aqukung, iquq, llequnga, llequt, llequten</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB: ungipaataanga, Tagitiki, guutigu, iflaak, lliluki, neghaqa, Aapnaken, Aqfalangi, Esghaghsiki, Esghaghyagu</li>
          <li>X: naqaqa, ghpenaan, lleqagka, lleqii, lleqsikek, makanga, aqaa, lleqagu, lleqamken, lleqiit</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus does not contain copulas.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--NOUN-Abs (118)</li>
      <li>VERB--NOUN-All (5)</li>
      <li>VERB--NOUN-Erg (28)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Abs (1)</li>
      <li>VERB--PRON-All (1)</li>
      <li>VERB--PRON-Erg (4)</li>
      <li>VERB--PRON-Voc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (26)</li>
      <li>VERB--NOUN-Abl (4)</li>
      <li>VERB--NOUN-Abs (86)</li>
      <li>VERB--PRON (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 4 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: aa atkuni, gaagh ugini, malig eltughani, tasluq yavluni</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>dep:ana</a>, <a>dep:aux</a>, <a>dep:cop</a>, <a>dep:emo</a>, <a>dep:mark</a>, <a>dep:pos</a>, <a>nmod:arg</a>, <a>obl:mod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>dep</a></li>
<li>The following 20 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>ccomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>aux</a>, <a>cop</a>, <a>amod</a>, <a>clf</a>, <a>case</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
