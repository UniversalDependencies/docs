---
layout: base
title:  'UD_English-Pronouns'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English Pronouns

Language: [English](/en/index.html) (code: `en`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.5 release.

The following people have contributed to making this treebank part of UD: Robert Munro.

Repository: [UD_English-Pronouns](https://github.com/UniversalDependencies/UD_English-Pronouns)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_pronouns29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-Pronouns/issues).
If you want to collaborate, please contact [rmunro&nbsp;(æt)&nbsp;alumni&nbsp;•&nbsp;stanford&nbsp;•&nbsp;edu].
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

UD English-Pronouns is dataset created to make pronoun identification more accurate and with a more balanced distribution across genders. The dataset is initially targeting the Independent Genitive pronouns, "hers", (independent) "his", (singular) "theirs", "mine", and (singular) "yours".



The Independent Genitive pronoun "hers" is wrongly classified as a noun or adjective by the most widely used parsers (in October of 2019). This includes (alphabetically) Amazon Comprehend, Google Natural Language API, and the Stanford Parser. This error was traced to the data - not the algorithms themselves - and so this dataset was created to fix these errors.

## Cause of errors: missing examples and annotations

The main cause of the errors in widely used syntactic parsers is most likely because "hers" is rare in the existing datasets and completely absent from any standard test data. The pronoun "hers" only occurs three times in the entire Universal Dependencies datasets (in of October 2019). Of those three times, it is never marked with "Case=Gen", "Poss=Yes", or "PronType=Prs", which would be the correct list of morphological features (FEATS) for "hers" in any context.

In one case of the three occurrences, "hers" was correctly annotated as "P3SG-GEN-INDEP" in the Language-specific part-of-speech tag (XPOS) field. But this field is largely ignored by general purpose syntactic parsers.

The three examples are in the training data, so the complete absense of "hers" in the development and test data might have let this error slip under the radar.

In general, Masculine pronouns are 4x more frequent than Feminine pronouns in the UD English datasets that have been compiled to date (October 2019). So this also contributes to the why it might have been missed.

So, the errors are a combination of the inherent imbalance in the datasets, and by extension the sources they are drawn from, and gaps annotation to-date. There are also linguistic reasons for the gap, as outlined below.

## Inherent gender bias

### Feminine Independent Genitive pronoun

The Feminine Dependent and Independent Genitive pronouns differ from the Masculine Genitive pronouns by having two forms, "her" and "hers", instead of using the same for both, "his". For example: "her car", "car of her**s**" / "his car", "car of his".

It is almost certain that the most popular syntactic parsers correctly identify the Masculine Independent Genitive pronoun correctly because "his" is the same form as the Dependent Genitive.

So, while the errors result from arbitrary linguistic distinctions that are not any person's fault, they have resulted in a situation that patterns with gender bias. For example, if you are building an information extraction system that relies on pronouns to know who possesses what, it will be more accurate for information about people referred to by Masculine pronouns than by Feminine ones.

### Singular Neutral Genitive pronoun

Every instance of "they/them/their/theirs" in the existing datasets are annotated as plurals, so this also presents a potential gender bias in the data. Many individuals prefer "they/them/their/theirs" as their singular personal pronouns. So, this dataset is also targeting examples of singular "theirs".

## Other Genitive pronouns

For comprehensiveness across the most widely used Independent Genitive Singular pronouns, "mine", and (singular) "yours" are also included. There are a very large number of additional variations of singular pronouns used in variants of English (like "ze"). Their existence is acknowledged here and the dataset can be extended to these with find-and-replace for the "they/them/their/theirs" variants in the dataset.

## Grammatical Diversity

The Independent Genitives can occur in more syntactic contexts than any other pronoun: more than all the other pronouns combined. So, the new dataset is adding a lot more grammatical diversity to the overall Universal Dependencies dataset, too!

## How the dataset was created and is structured

The dataset was created manually, targeting grammatical diversity. For example, there are sentences with "hers" appearing as the subject, object, indirect object, and oblique arguments; sentences with "hers" in a conjunction; sentences with "hers" in a complement clause; etc.

The Majority sentences are completely unique in terms of their dependency tree and constituents. For the sentences that share the same dependency tree and constituent structure, they alternate an important linguistic feature in English, like regular and irregular verbs, or linguistic features that would have different syntax and/or morphology in other languages, like the locative/ablative case distinction.

The "comment" field describes exactly what grammatical structure(s) are captured in each sentence. The Independent Genitive is the most flexible pronoun, able to appear in a sentence almost anywhere any noun phrase can appear.

A "previous" field is also added to include a viable previous sentence. Independent pronouns refer to non-syntactically local entities and those entities are typically made salient through context. It is too unnatural for the sentences to have an explicit entity that it refers to within the same sentence. So, the previous sentence should help. Here are two examples of these comments:

```
## Acknowledgments

The dataset was created by [Robert Munro](http://www.robertmunro.com) while writing [Human-in-the-Loop Machine Learning](http://bit.ly/huml_book) (Manning Publications)

Please cite this book if using this dataset.


# Statistics of UD English Pronouns

## POS Tags

[ADJ](en_pronouns-pos-ADJ.html) – [ADP](en_pronouns-pos-ADP.html) – [ADV](en_pronouns-pos-ADV.html) – [AUX](en_pronouns-pos-AUX.html) – [CCONJ](en_pronouns-pos-CCONJ.html) – [DET](en_pronouns-pos-DET.html) – [NOUN](en_pronouns-pos-NOUN.html) – [NUM](en_pronouns-pos-NUM.html) – [PART](en_pronouns-pos-PART.html) – [PRON](en_pronouns-pos-PRON.html) – [PUNCT](en_pronouns-pos-PUNCT.html) – [SCONJ](en_pronouns-pos-SCONJ.html) – [VERB](en_pronouns-pos-VERB.html)

## Features

[Case](en_pronouns-feat-Case.html) – [Definite](en_pronouns-feat-Definite.html) – [Degree](en_pronouns-feat-Degree.html) – [Gender](en_pronouns-feat-Gender.html) – [Mood](en_pronouns-feat-Mood.html) – [Number](en_pronouns-feat-Number.html) – [NumType](en_pronouns-feat-NumType.html) – [Person](en_pronouns-feat-Person.html) – [Polarity](en_pronouns-feat-Polarity.html) – [Poss](en_pronouns-feat-Poss.html) – [PronType](en_pronouns-feat-PronType.html) – [Tense](en_pronouns-feat-Tense.html) – [VerbForm](en_pronouns-feat-VerbForm.html)

## Relations

[advcl](en_pronouns-dep-advcl.html) – [advmod](en_pronouns-dep-advmod.html) – [amod](en_pronouns-dep-amod.html) – [appos](en_pronouns-dep-appos.html) – [aux](en_pronouns-dep-aux.html) – [aux:pass](en_pronouns-dep-aux-pass.html) – [case](en_pronouns-dep-case.html) – [cc](en_pronouns-dep-cc.html) – [ccomp](en_pronouns-dep-ccomp.html) – [conj](en_pronouns-dep-conj.html) – [cop](en_pronouns-dep-cop.html) – [csubj](en_pronouns-dep-csubj.html) – [det](en_pronouns-dep-det.html) – [det:predet](en_pronouns-dep-det-predet.html) – [expl](en_pronouns-dep-expl.html) – [iobj](en_pronouns-dep-iobj.html) – [mark](en_pronouns-dep-mark.html) – [nmod](en_pronouns-dep-nmod.html) – [nsubj](en_pronouns-dep-nsubj.html) – [obj](en_pronouns-dep-obj.html) – [obl](en_pronouns-dep-obl.html) – [orphan](en_pronouns-dep-orphan.html) – [parataxis](en_pronouns-dep-parataxis.html) – [punct](en_pronouns-dep-punct.html) – [root](en_pronouns-dep-root.html) – [xcomp](en_pronouns-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 285 sentences and 1705 tokens.</li>
</ul>

<ul>
<li>This corpus contains 395 tokens (23%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words that contain both letters and punctuation. Examples: 's, n't, 'll</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PROPN, INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): 's, n't, not, nt, to</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as pronouns (PRON): hers, his, it, mine, theirs, there, yours</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): all, any, the</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): be, will</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: be</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: 's, is, was, 'll, ai</li>
    <li>VERB: cleaned, like, drove, sold, gave, is, knew, liked, Take, accelerated</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: using</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: clean</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: cleaned, seeing, cleaning, painted</li>
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
      <li>PRON: hers</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: his</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: mine, theirs, yours</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: dealers, cars, bumps</li>
      <li>VERB-Fin: like, sell, sold</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: 's, is, was, ai</li>
      <li>NOUN: dealer, car, paint</li>
      <li>PRON: hers, his, mine, theirs, yours, it</li>
      <li>VERB-Fin: cleaned, drove, is, sold, accelerated, broke, get, hit, parks, saw</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>DET: all</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: the</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: easy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: n't, not, nt</li>
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
      <li>VERB-Fin: Take</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: 's, is, was, ai</li>
      <li>VERB-Fin: cleaned, like, drove, sold, gave, is, knew, liked, accelerated, broke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB-Fin: get</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: was</li>
      <li>VERB-Fin: cleaned, drove, sold, gave, knew, liked, accelerated, broke, came, got</li>
      <li>VERB-Part: cleaned, painted</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: 's, is, ai</li>
      <li>VERB-Fin: like, is, Take, do, get, parks, sell, sells</li>
      <li>VERB-Part: seeing, cleaning</li>
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
      <li>DET: the</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: Any</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: hers, his, mine, theirs, yours, it</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: One</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: hers, his, mine, theirs, yours</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: was, ai</li>
      <li>PRON: mine, it</li>
      <li>VERB-Fin: cleaned, like, drove, sold, accelerated, broke, get, hit, saw, sell</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ai</li>
      <li>PRON: yours, it</li>
      <li>VERB-Fin: cleaned, like, drove, sold, accelerated, broke, get, hit, saw, sell</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: 's, is, was, ai</li>
      <li>PRON: hers, his, theirs, it</li>
      <li>VERB-Fin: cleaned, like, sold, drove, is, parks, sells, accelerated, broke, get</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: be.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: will.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (140)</li>
      <li>VERB-Fin--PRON (70)</li>
      <li>VERB-Part--NOUN (10)</li>
      <li>VERB-Part--PRON (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (35)</li>
      <li>VERB-Fin--PRON (5)</li>
      <li>VERB-Part--NOUN (10)</li>
      <li>VERB-Part--PRON (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (5)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>aux:pass</a>, <a>det:predet</a></li>
<li>The following 13 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>nummod</a>, <a>acl</a>, <a>clf</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
