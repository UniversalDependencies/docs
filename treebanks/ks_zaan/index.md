---
layout: base
title:  'UD_Kashmiri-Zaan'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Kashmiri Zaan

Language: [Kashmiri](/ks/index.html) (code: `ks`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Rimsha Abid, Hiwa Asadpour, Luigi Talamo, Annemarie Verkerk.

Repository: [UD_Kashmiri-Zaan](https://github.com/UniversalDependencies/UD_Kashmiri-Zaan)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udks_zaan219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: wiki, grammar-examples

Questions, comments?
General annotation questions (either Kashmiri-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Kashmiri-Zaan/issues).
If you want to collaborate, please contact [abid&nbsp;•&nbsp;rimsha01&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
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

A Kashmiri treebank in Perso-Arabic script with two parts: 80 sentences from the Kashmiri Wikipedia article on Jawaharlal Nehru, and 100 grammar example sentences from Omkar N. Koul's *Kashmiri: A Grammatical Sketch*. Lemmas, UPOS, features and dependency relations were annotated manually.



The treebank has 180 sentences, 2,148 tokens and 2,149 syntactic words (one token is split into two words). The two parts can be told apart by the sentence IDs.

| Part | Sentence IDs | Sentences | Tokens | Syntactic words | Non-punctuation words | Average length (words) |
|---|---|---|---|---|---|---|
| Nehru | `ks_nehru_001` – `ks_nehru_078` (with `ks_nehru_066b`, `ks_nehru_069b`) | 80 | 1,487 | 1,488 | 1,301 | 18.6 (6–49) |
| Grammar sentences | `ks_grammar_001` – `ks_grammar_100` | 100 | 661 | 661 | 655 | 6.6 (4–12) |
| **Total** | | **180** | **2,148** | **2,149** | **1,956** | |

**Nehru part.** Encyclopedic prose from the Kashmiri Wikipedia article *جَواہَر لال نِہروٗ* (https://ks.wikipedia.org/wiki/جَواہَر_لال_نِہروٗ), revision 136894 of 2 May 2026 (https://ks.wikipedia.org/w/index.php?oldid=136894). The text was checked against the article on 28 October 2026; the two later revisions (147176 and 149406, both bot edits) change only references and categories, not the sentences used here. Sentences 66 and 69 of the article text each contain two sentences and are split into `ks_nehru_066` + `ks_nehru_066b` and `ks_nehru_069` + `ks_nehru_069b`.

**Grammar sentences part.** Example sentences from Omkar N. Koul, *Kashmiri: A Grammatical Sketch* (Indian Institute of Language Studies), where they are given in Roman transcription. They illustrate copular, relative and correlative clauses, questions, negation, coordination, passives, reflexives, reciprocals and conditional, causal and concessive clauses. The Perso-Arabic spelling was written by the annotator, following the spelling used in the Nehru part. Where the book shows alternatives (`a/b`, or a form marked `*` as ungrammatical), only the grammatical form is included.

Annotation was done manually in Arborator-Grew (project *kashmiri perso arabic*, https://arborator.grew.fr/?#/projects/kashmiri%20perso%20arabic). XPOS and enhanced dependencies are not annotated. The annotation rules are described in the Kashmiri documentation page (`docs/_ks/index.md`).

## Sentence-level comments

| Comment | Nehru | Grammar sentences |
|---|---|---|
| `# sent_id`, `# text`, `# translit`, `# translation`, `# rtl = yes` | yes | yes |
| `# original_text`: the sentence as written in the Wikipedia article | yes | — |
| `# gloss`: English word-by-word gloss | — | yes |

`# text` is the real text: spaces are as in the source, and a token not followed by a space has `SpaceAfter=No`. In the Nehru part, `# text` is identical to `# original_text` except in `ks_nehru_009`, `ks_nehru_012` and `ks_nehru_068`, where the source has a space inside a word (`دُنؠ یا`, `اِنسٲنؠ یَتھ`, `بُنؠ یاد`) and the token is written joined. `# translit` uses one transliteration system for both parts and is generated from the Perso-Arabic text; the system is described in the documentation page.

## Counts

UPOS (14 of the 17 universal tags; INTJ, SYM and X do not occur):

| UPOS | Count | UPOS | Count |
|---|---|---|---|
| NOUN | 419 | PUNCT | 193 |
| PROPN | 275 | ADJ | 132 |
| VERB | 245 | CCONJ | 74 |
| ADP | 234 | ADV | 69 |
| PRON | 203 | PART | 55 |
| AUX | 138 | NUM | 49 |
| | | DET | 40 |
| | | SCONJ | 23 |

The data uses these features: `Gender` (Fem, Masc), `Mood` (Imp, Ind), `Number` (Plur, Sing), `NumType` (Card), `Person` (1, 2, 3), `Polarity` (Neg), `Poss` (Yes), `PronType` (Art, Dem, Ind, Int, Prs, Rel, Tot), `Reflex` (Yes), `Tense` (Fut, Past, Pres), `VerbForm` (Conv, Fin, Inf, Part).

Relations (31): acl, acl:relcl, advcl, advmod, amod, appos, aux, aux:pass, case, cc, ccomp, compound, compound:redup, conj, cop, csubj, det, flat, iobj, mark, nmod, nsubj, nsubj:pass, nummod, obj, obl, obl:agent, parataxis, punct, root, xcomp.

The data has 615 distinct lemmas and 863 distinct word forms. All counts were produced with `conllu-stats.pl` from the UD tools.

## Acknowledgments

The treebank was reviewed by Hiwa Asadpour (28 October 2026).


# Statistics of UD Kashmiri Zaan

## POS Tags

[ADJ](ks_zaan-pos-ADJ.html) – [ADP](ks_zaan-pos-ADP.html) – [ADV](ks_zaan-pos-ADV.html) – [AUX](ks_zaan-pos-AUX.html) – [CCONJ](ks_zaan-pos-CCONJ.html) – [DET](ks_zaan-pos-DET.html) – [NOUN](ks_zaan-pos-NOUN.html) – [NUM](ks_zaan-pos-NUM.html) – [PART](ks_zaan-pos-PART.html) – [PRON](ks_zaan-pos-PRON.html) – [PROPN](ks_zaan-pos-PROPN.html) – [PUNCT](ks_zaan-pos-PUNCT.html) – [SCONJ](ks_zaan-pos-SCONJ.html) – [VERB](ks_zaan-pos-VERB.html)

## Features

[Gender](ks_zaan-feat-Gender.html) – [Mood](ks_zaan-feat-Mood.html) – [Number](ks_zaan-feat-Number.html) – [NumType](ks_zaan-feat-NumType.html) – [Person](ks_zaan-feat-Person.html) – [Polarity](ks_zaan-feat-Polarity.html) – [Poss](ks_zaan-feat-Poss.html) – [PronType](ks_zaan-feat-PronType.html) – [Reflex](ks_zaan-feat-Reflex.html) – [Tense](ks_zaan-feat-Tense.html) – [VerbForm](ks_zaan-feat-VerbForm.html)

## Relations

[acl](ks_zaan-dep-acl.html) – [acl:relcl](ks_zaan-dep-acl-relcl.html) – [advcl](ks_zaan-dep-advcl.html) – [advmod](ks_zaan-dep-advmod.html) – [amod](ks_zaan-dep-amod.html) – [appos](ks_zaan-dep-appos.html) – [aux](ks_zaan-dep-aux.html) – [aux:pass](ks_zaan-dep-aux-pass.html) – [case](ks_zaan-dep-case.html) – [cc](ks_zaan-dep-cc.html) – [ccomp](ks_zaan-dep-ccomp.html) – [compound](ks_zaan-dep-compound.html) – [compound:redup](ks_zaan-dep-compound-redup.html) – [conj](ks_zaan-dep-conj.html) – [cop](ks_zaan-dep-cop.html) – [csubj](ks_zaan-dep-csubj.html) – [det](ks_zaan-dep-det.html) – [flat](ks_zaan-dep-flat.html) – [iobj](ks_zaan-dep-iobj.html) – [mark](ks_zaan-dep-mark.html) – [nmod](ks_zaan-dep-nmod.html) – [nsubj](ks_zaan-dep-nsubj.html) – [nsubj:pass](ks_zaan-dep-nsubj-pass.html) – [nummod](ks_zaan-dep-nummod.html) – [obj](ks_zaan-dep-obj.html) – [obl](ks_zaan-dep-obl.html) – [obl:agent](ks_zaan-dep-obl-agent.html) – [parataxis](ks_zaan-dep-parataxis.html) – [punct](ks_zaan-dep-punct.html) – [root](ks_zaan-dep-root.html) – [xcomp](ks_zaan-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 180 sentences, 2148 tokens and 2149 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 194 tokens (9%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 1 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 1 types of multi-word tokens. Examples: کانٛگرٛیسکِس.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 11 word types tagged as particles (PART): تہِ, ما, نا, نَہ, نَے, نہٕ, واجیٚنؠ, والؠن, وول, وٲلؠ, وٲلؠن</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as pronouns (PRON): اَسؠ, اَکؠ, بہِ, تُہُنٛد, تِم, تِہُنٛد, تۄہہِ, دۄشوؠ, سون, سُہ, سٲری, سۄ, مؠون, پان, پانہِوانؠ, پَنُن, ژہِ, کؠا, کاہ, کُس, کٚہ, کیٚنٛہہ, یُس, یِم, یہِ</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as determiners (DET): آل, اَکھ, دَ, سُہ, سۄ, کیٚنٛہہ, ہُ, یُس, یِم, یہِ</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: سُہ, سۄ, کیٚنٛہہ, یُس, یِم, یہِ</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): آسُن, یُن</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: یُن</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: بٔنِتھ, بِہِتھ, مٔشِتھ, نیٖرِتھ, واتِتھ, پَرِتھ, پٔرِتھ, کَرِتھ, کَرِنَے, کٔرِتھ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: اوس, چھُ, أسؠ, چھَ, چھِ, آیہِ, چھُس, چھُنہٕ, أس, آس</li>
    <li>VERB: کۆر, گَو, گَژھہِ, وۆن, آو, کٔر, گۆو, دؠُت, یِیہِ, بَنیٛوو</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: کَرنہٕ, یِنہٕ, ماننہٕ, اَنِنہِ, بَناوَن, بَننہٕ, بَچاونہٕ, دِنؠ, زاننہٕ, سونٛچُن</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: یِوان, آسان, آمَژٕ</li>
    <li>VERB: کَران, گَژھان, باسان, روزَن, مانان, پَرٕناوان, دوران, سَپدان, میلان, پَران</li>
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
      <li>PRON: سۄ, تَمہِ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: سُہ, تٔمؠ, تٔمِس, تَم</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: یِمَن, یِمَو</li>
      <li>PRON: تِم, اَسؠ, تِمَن, تِمَو, تۆہؠ, سون, سٲنِس, یِم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: سُہ, تٔمؠ, بہٕ, مےٚ, تٔمِس, سۄ, ژہِ, تَمہِ, ژٚ, تَس</li>
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
      <li>AUX-Fin: چھُنہٕ, چھَنہٕ</li>
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
      <li>VERB-Fin: کَر, یِزہِ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: اوس, چھُ, أسؠ, چھَ, چھِ, آیہِ, چھُس, چھُنہٕ, أس, آس</li>
      <li>VERB-Fin: کۆر, گَو, گَژھہِ, وۆن, آو, کٔر, گۆو, دؠُت, یِیہِ, بَنیٛوو</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: آسہِ</li>
      <li>VERB-Fin: گَژھہِ, یِیہِ, پٚیہِ, کَرہِ, بَنہِ, دِیہِ, لێکھِکھا, میلَن, نێرَکھ, واتہِ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: اوس, أسؠ, آیہِ, أس, آس, آسِوہِ, آو, اوسُس, ٲسؠ</li>
      <li>VERB-Fin: کۆر, گَو, وۆن, آو, کٔر, گۆو, دؠُت, بَنیٛوو, لۆگ, لیٖچھ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: چھُ, چھَ, چھِ, چھُس, چھُنہٕ, چھَنہٕ, چھَے, چھُسَتھ, چھُم</li>
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
      <li>DET: دَ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: تَتھ, تَمہِ, یَتھ, سۄ, ہُ, یہِ, یِمَن, یِمَو</li>
      <li>PRON: یہِ, یَتھ, اَمہِ, تَتھ, یِم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: اَکھ, کیٚنٛہہ, أکِس, اَكھ</li>
      <li>PRON: اَکِس, کاہ, اَکؠ, کٚہ, کێنٛہہ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: کؠا, کَمِس, کُس, کَمؠ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: تٔمؠ, سُہ, بہٕ, مےٚ, تٔمِس, سۄ, پانَس, پانہٕ, ژہِ, تِم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: یۄس, یُس, یٚمہِ</li>
      <li>PRON: یَتھ, یُس, ییٚمؠ, ییٚمیُٛک</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: آل</li>
      <li>PRON: دۄشوؠن, سارِوٕے, سٲری</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 1916, 14, 1912, 1917, 1919, 1920, 1947, زٕ, 18, 1857</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: پَنُن, مؠون, پَننِس, تُہُنٛد, تُہٕنٛز, تُہٕنٛزٕ, تِہُنٛد, تِہٕنٛدؠ, تِہٕنٛزٕ, تٔمیُٛک</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: پانَس, پانہٕ, پَنُن, پان, پَننِس, پانہِوانؠ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: بہٕ, مےٚ, اَسؠ, مؠون, سون, سٲنِس, میٛٲنِس</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: ژہِ, تۄہہِ, ژٚ, تُہُنٛد, تُہٕنٛز, تُہٕنٛزٕ, تۆہؠ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: تٔمؠ, سُہ, تٔمِس, سۄ, تِم, تَمہِ, تَس, تَم, تِمَن, تِمَو</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: آسُن.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: آسُن.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: یُن.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (24)</li>
      <li>VERB-Fin--PRON (63)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Part--NOUN (20)</li>
      <li>VERB-Part--PRON (18)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN (3)</li>
      <li>VERB-Fin--NOUN (31)</li>
      <li>VERB-Fin--PRON (11)</li>
      <li>VERB-Inf--NOUN (8)</li>
      <li>VERB-Part--NOUN (9)</li>
      <li>VERB-Part--PRON (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--PRON (4)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Part--PRON (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: وُچھُن پان, کَرُن پانَس</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:redup</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 11 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
