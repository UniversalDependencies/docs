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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udess_sli28)<br />
Download all treebanks: [UD 2.8](/#download)

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

[acl](ess_sli-dep-acl.html) – [advcl](ess_sli-dep-advcl.html) – [advmod](ess_sli-dep-advmod.html) – [appos](ess_sli-dep-appos.html) – [cc](ess_sli-dep-cc.html) – [conj](ess_sli-dep-conj.html) – [dep:ana](ess_sli-dep-dep-ana.html) – [dep:aux](ess_sli-dep-dep-aux.html) – [dep:cop](ess_sli-dep-dep-cop.html) – [dep:emo](ess_sli-dep-dep-emo.html) – [dep:infl](ess_sli-dep-dep-infl.html) – [dep:mark](ess_sli-dep-dep-mark.html) – [dep:pos](ess_sli-dep-dep-pos.html) – [det](ess_sli-dep-det.html) – [mark](ess_sli-dep-mark.html) – [nmod](ess_sli-dep-nmod.html) – [nmod:arg](ess_sli-dep-nmod-arg.html) – [nsubj](ess_sli-dep-nsubj.html) – [nummod](ess_sli-dep-nummod.html) – [obj](ess_sli-dep-obj.html) – [obl](ess_sli-dep-obl.html) – [obl:mod](ess_sli-dep-obl-mod.html) – [punct](ess_sli-dep-punct.html) – [root](ess_sli-dep-root.html) – [xcomp](ess_sli-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 309 sentences, 1221 tokens and 2568 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 310 tokens (25%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 4 types of words that contain both letters and punctuation. Examples: -emun, an'gani, an'gigh, un'gani</li>
</ul>

<ul>
<li>This corpus contains 773 multi-word tokens. On average, one multi-word token consists of 2.74 syntactic words.</li>
<li>There are 650 types of multi-word tokens. Examples: aqelqat, yugem, qergesek, Kitum, esghaatunga, iflaak, mangteghameng, naagpek, taghnughhaat, ungipaataanga, yuget, Sivuqaghmeng, Tagitiki, aatgha, aatghit, apeghtughistem, ighneghten, ighneqa, kemekraga, mekelghiighet, mekestaaghhaaguq, pagunghaghmeng, qikmima, quyaaq, Aanaqukung, Aghnalqwaaghem, Kaamgek, Mekelghiighem, Naliita, Qafsinaneng, Quyillget, Sangaawa, Siivanlleghet, Teghikusat, Tengegkayuget, Ungazimi, Yupigestun, aanaqut, alquutat, anipameng, apaka, atanga, atughnaqunga, eflugameng, eglluk, eslallugughteghngaan, eslami, eslamun, gaaghpenaan, guutigu.</li>
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
      <li>X: k, ek, gka, egka, gnun, kek, egken, egn, egni, gneng</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PRON: whangkunnun</li>
      <li>X: et, t, at, ten, neng, it, ma, meng, anka, enka</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: lghii, Taghnughhaq, keneq, Amaa, Laluramka, Nanevgaq, Ukaziq, kufi, nefkuuraq, nguq</li>
      <li>PRON: paamna, Iigna, Kaanyuq, Qaamna, elpenun, m, pagna</li>
      <li>X: meng, m, mun, em, mi, ka, a, n, qa, nga</li>
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
      <li>X: meng, neng, aneng, gneng</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>NOUN: lghii, Taghnughhaq, keneq, Amaa, Laluramka, Nanevgaq, Ukaziq, kufi, nefkuuraq, nguq</li>
      <li>PRON: paamna, Iigna, Qaamna, pagna</li>
      <li>X: et, t, ka, a, k, n, qa, nga, at, ten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abs,Erg
    <ul>
      <li>X: k, t</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADV: kiwavek, pagavek, sakmavek, whavek</li>
      <li>PRON: elpenun, whangkunnun</li>
      <li>X: mun, anun, gnun, -emun, minun, nun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>X: estun, stun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>PRON: m</li>
      <li>X: m, em, ma, gpek, ghpek, ita, am, an, et, um</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: sikwaan</li>
      <li>X: em, m, ma, gpek, mi, t, an, at, et, ghpek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADV: Awani, Ingani, Qagani, an'gani, imani, maani, pamani, pikani, un'gani, whani</li>
      <li>X: mi, ni, egn, egni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Per
    <ul>
      <li>ADV: paaggun</li>
      <li>X: kun, ngakun, teggun</li>
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
      <li>VERB: nghit, ghpe, igat, neghin, neghit, nghil, nghite, nneghi, nneghit, ngigal</li>
      <li>X: fqaa, yaquna</li>
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
      <li>VERB: aq</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: aq, iq, gaq</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cn1
    <ul>
      <li>X: ya, sa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cn2
    <ul>
      <li>X: aqnga, gaqnga, iqnga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnc
    <ul>
      <li>X: ghngaagh, ghnga, nga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>X: k, kw, q, gk</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ctm
    <ul>
      <li>X: negh, ngh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>X: u, a, tu, i, gu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>X: sin, si, a, tsi, estek, ta, zin, st, zi, awa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>X: i, fqaa, igu, elt, la, ghha, gu, ilt, lgha, lla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prc
    <ul>
      <li>X: fagilga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptc
    <ul>
      <li>X: ka, lghii, ke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sbr
    <ul>
      <li>X: lu, na, llu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: lleq, naq, nnaq, lleqe, naqe</li>
      <li>X: ghha, lgha, nake, yaquna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB: uma, ma, ama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: aq, iq, igat, gaq, ngigal</li>
      <li>X: i, fqaa, igu, elt, la, gu, ilt, lla, lt, ult</li>
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
      <li>PRON: ingku, paamna, piku, Iigna, Kaanyuq, Qaamna, m, pagna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: Qakun, Sangavek, Qavngaq, Navek, Sangan, Naken, Nani, Sangami, naten, Sangama</li>
      <li>DET: Nali, Qafsina</li>
      <li>PRON: Kitu, Kina, Kinku, Sameng, Kitumun</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>X: ni, meng, mi, minun</li>
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
      <li>X: meng, an, mi</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>X: gpung, mtung</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>X: it, ita, ngat, taghnughhiit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: nengyaa, nulaa, qikmii, sikwaan</li>
      <li>X: ka, a, n, ma, qa, nga, gpek, ten, ni, an</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Number[obj]</a>
    <ul>
      <li>Dual
        <ul>
          <li>X: kek, gka, k, fkek, gkenka, kung</li>
        </ul>
      </li>
      <li>Plur
        <ul>
          <li>X: ki, i, inkut, it, ngi, nka</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>X: qa, gu, a, nga, anga, igu, ku, n, an, mken</li>
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
          <li>X: k, kung, estek, ung, agkenka, tek, yek</li>
        </ul>
      </li>
      <li>Dual,Plur,Sing
        <ul>
          <li>X: mken, n, an, gkenka, ma</li>
        </ul>
      </li>
      <li>Plur
        <ul>
          <li>X: t, a, tsi, kut, meng, akut, ata, it, si, teng</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>X: q, nga, qa, gu, sin, ki, a, i, lghii, n</li>
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
          <li>X: anga, nga, inkut, aghminga, kung, ma, penga, uvnga, vnga</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>X: mken, ten</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>X: ki, qa, gu, a, i, igu, kek, ku, n, an</li>
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
          <li>X: ka, ma, qa, gka, anka, egka, enka, nka, gpung, mtung</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>X: n, gpek, ten, ghpek, an, en, egken, pek</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NOUN: nengyaa, nulaa, qikmii, sikwaan</li>
          <li>X: a, nga, it, ni, an, aneng, anun, i, ita, kek</li>
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
          <li>X: nga, qa, kung, a, kut, ma, mken, ung, akut, gka</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>X: sin, ki, gu, igu, uvek, kek, n, tsi, estek, nga</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>X: q, t, k, a, gu, lghii, anga, i, an, n</li>
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
          <li>X: tni, vgu</li>
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
          <li>X: ni, meng, mi, teng, aghminga, migu, tek, uni</li>
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
          <li>X: u, tu, a, sin, gu, k, lu, ya, i, tsi</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>X: a, i, si, lu, igu, ya, fqaa, ka, ta, la</li>
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
      <li>VERB--NOUN (126)</li>
      <li>VERB--NOUN-Abs (30)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB--PRON-Abs (1)</li>
      <li>VERB--PRON-All (1)</li>
      <li>VERB--PRON-Erg (1)</li>
      <li>VERB--PRON-Voc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (92)</li>
      <li>VERB--NOUN-Abs (25)</li>
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




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>dep:ana</a>, <a>dep:aux</a>, <a>dep:cop</a>, <a>dep:emo</a>, <a>dep:infl</a>, <a>dep:mark</a>, <a>dep:pos</a>, <a>nmod:arg</a>, <a>obl:mod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>dep</a></li>
<li>The following 20 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>ccomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>aux</a>, <a>cop</a>, <a>amod</a>, <a>clf</a>, <a>case</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
