---
layout: base
title:  'UD_Punjabi-DYZ'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Punjabi DYZ

Language: [Punjabi](/pa/index.html) (code: `pa`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Ali Haider Khan, Luigi Talamo, Annemarie Verkerk, Zarina Begum.

Repository: [UD_Punjabi-DYZ](https://github.com/UniversalDependencies/UD_Punjabi-DYZ)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpa_dyz219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: fiction, nonfiction

Questions, comments?
General annotation questions (either Punjabi-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Punjabi-DYZ/issues).
If you want to collaborate, please contact [annemarie&nbsp;•&nbsp;verkerk&nbsp;(æt)&nbsp;uni-saarland&nbsp;•&nbsp;de].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The UD_Punjabi-DYZ is a manually annotated treebank in Punjabi (also called Eastern Punjabi, Gurmukhi script) language. The Indo-Aryan language is prominently spoken in Punjab region of India and Pakistan with strong diasporas in Western countries like Canada, UK and USA etc. It is written from Left-to-Right with Subject-Object-Verb (SOV) word ordering.




The treebank consists of total 243 sentences (4,618 tokens, 4,270 words excluding punctuation) taken from Punjabi translations of three literary works. The data has been annotated according to Universal Dependencies guidelines.

| Sentences | Punjabi title | Original title | Author | Original (year) | Punjabi translation (year) |
|---|---|---|---|---|---|
| 1–80 (80) | ਸੌ ਸਾਲ ਦਾ ਇਕਲਾਪਾ (Sou Saal Da Iklaapa) | Cien años de soledad (One Hundred Years of Solitude) | Gabriel García Márquez | Spanish, 1967 | 2006 |
| 81–160 (80) | ਦ ਡਾਇਰੀ ਆਫ਼ ਏ ਯੰਗ ਗਰਲ (The Diary of a Young Girl) | Het Achterhuis | Anne Frank | Dutch, 1947 | 2023 |
| 161–243 (83) | ਜ਼ੋਰਬਾ ਦਾ ਗਰੀਕ (Zorba the Greek) | Vios kai Politeia tou Alexi Zormpa | Nikos Kazantzakis | Greek, 1946 | 2017 |

The treebank follows a 4-tier structure: every sentence carries, besides the original Gurmukhi text, a romanized transliteration (`# translit`), an interlinear morpheme gloss (`# gloss`) and an English translation (`# translation`). Token-level transliterations and glosses are given in the MISC column (`Translit=`, `Gloss=`).

All tokens are annotated with lemma, universal part-of-speech tag, universal features and basic dependency relations. The annotation conventions, including the treatment of auxiliaries versus aspectual light (vector) verbs, the lemmatization of the verb "to be" (ਹੈ, ਸੀ, ਹੋਣਾ) and the use of Case=Acc for the oblique form of nominals, are described in the Punjabi language documentation and follow the closely related Hindi and Urdu UD treebanks.


## Acknowledgments

The treebank was annotated by Ali Haider Khan under the supervision of Dr. Luigi Talamo, Dr. Annemarie Verkerk and Dr. Zarina Begum.

## References

* (citation)


# Statistics of UD Punjabi DYZ

## POS Tags

[ADJ](pa_dyz-pos-ADJ.html) – [ADP](pa_dyz-pos-ADP.html) – [ADV](pa_dyz-pos-ADV.html) – [AUX](pa_dyz-pos-AUX.html) – [CCONJ](pa_dyz-pos-CCONJ.html) – [DET](pa_dyz-pos-DET.html) – [INTJ](pa_dyz-pos-INTJ.html) – [NOUN](pa_dyz-pos-NOUN.html) – [NUM](pa_dyz-pos-NUM.html) – [PART](pa_dyz-pos-PART.html) – [PRON](pa_dyz-pos-PRON.html) – [PROPN](pa_dyz-pos-PROPN.html) – [PUNCT](pa_dyz-pos-PUNCT.html) – [SCONJ](pa_dyz-pos-SCONJ.html) – [VERB](pa_dyz-pos-VERB.html)

## Features

[Aspect](pa_dyz-feat-Aspect.html) – [Case](pa_dyz-feat-Case.html) – [Degree](pa_dyz-feat-Degree.html) – [ExtPos](pa_dyz-feat-ExtPos.html) – [Gender](pa_dyz-feat-Gender.html) – [Mood](pa_dyz-feat-Mood.html) – [Number](pa_dyz-feat-Number.html) – [NumType](pa_dyz-feat-NumType.html) – [Person](pa_dyz-feat-Person.html) – [Poss](pa_dyz-feat-Poss.html) – [PronType](pa_dyz-feat-PronType.html) – [Reflex](pa_dyz-feat-Reflex.html) – [Tense](pa_dyz-feat-Tense.html) – [VerbForm](pa_dyz-feat-VerbForm.html)

## Relations

[acl](pa_dyz-dep-acl.html) – [acl:relcl](pa_dyz-dep-acl-relcl.html) – [advcl](pa_dyz-dep-advcl.html) – [advmod](pa_dyz-dep-advmod.html) – [advmod:emph](pa_dyz-dep-advmod-emph.html) – [amod](pa_dyz-dep-amod.html) – [appos](pa_dyz-dep-appos.html) – [aux](pa_dyz-dep-aux.html) – [aux:pass](pa_dyz-dep-aux-pass.html) – [case](pa_dyz-dep-case.html) – [cc](pa_dyz-dep-cc.html) – [ccomp](pa_dyz-dep-ccomp.html) – [compound](pa_dyz-dep-compound.html) – [compound:lvc](pa_dyz-dep-compound-lvc.html) – [compound:redup](pa_dyz-dep-compound-redup.html) – [compound:svc](pa_dyz-dep-compound-svc.html) – [conj](pa_dyz-dep-conj.html) – [cop](pa_dyz-dep-cop.html) – [det](pa_dyz-dep-det.html) – [det:poss](pa_dyz-dep-det-poss.html) – [discourse](pa_dyz-dep-discourse.html) – [dislocated](pa_dyz-dep-dislocated.html) – [fixed](pa_dyz-dep-fixed.html) – [flat](pa_dyz-dep-flat.html) – [iobj](pa_dyz-dep-iobj.html) – [mark](pa_dyz-dep-mark.html) – [nmod](pa_dyz-dep-nmod.html) – [nmod:poss](pa_dyz-dep-nmod-poss.html) – [nmod:tmod](pa_dyz-dep-nmod-tmod.html) – [nsubj](pa_dyz-dep-nsubj.html) – [nsubj:pass](pa_dyz-dep-nsubj-pass.html) – [nummod](pa_dyz-dep-nummod.html) – [obj](pa_dyz-dep-obj.html) – [obl](pa_dyz-dep-obl.html) – [obl:agent](pa_dyz-dep-obl-agent.html) – [obl:arg](pa_dyz-dep-obl-arg.html) – [obl:tmod](pa_dyz-dep-obl-tmod.html) – [orphan](pa_dyz-dep-orphan.html) – [parataxis](pa_dyz-dep-parataxis.html) – [punct](pa_dyz-dep-punct.html) – [root](pa_dyz-dep-root.html) – [vocative](pa_dyz-dep-vocative.html) – [xcomp](pa_dyz-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 243 sentences and 4618 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 58 types of words that contain both letters and punctuation. Examples: 'ਚ, ’ਤੇ, 'ਤੇ, "ਕਿੰਨਾ, 'ਚੋਂ, (ਮੈਨੂੰ, (ਯੂਨਾਨ, ’ਚ, "ਇਹ, "ਉਹ, "ਕੋਈ, "ਸਾਇੰਸ, 'ਐਨੀ, 'ਡੇਜ਼ੀ, 'ਫ਼ਾਦਰ, (ਇੱਕ, (ਕਾਨਫਰੰਸ, (ਚਾਰ, (ਪ੍ਰਾਚੀਨ, (ਬਿੱਲੀ, (ਮੈਂ, John-the-Drinker, [Karagheus, ਆਪਣੇ-ਆਪ, ਇਧਰ-ਉਧਰ, ਉੱਚੀ-ਉੱਚੀ, ਐ", ਐ', ਐ”, ਕਰਦਾ—ਜਿਸ, ਗੱਲ?', ਚਿਰ?", ਚੂਰ-ਚੂਰ, ਛੋਟੀਆਂ-ਛੋਟੀਆਂ, ਤਿਆਰ-ਬਰ-ਤਿਆਰ, ਦਿਉ-ਕੱਦ, ਦਿਨ-ਕਟੀ, ਪੁੱਟ-, ਪੰਜ-ਛੇ, ਮਲ-ਮੁਲ, ਲੇਖਕ), ਵੱਲ', ਸ਼ਹਿਰ), ਹਨ), ਹਮ-, ਹਾਲ), ਹਾਲ-ਚਾਲ, ਹੁੰਮ-ਹੁੰਮਾ, ਹੌਲੀ-ਹੌਲੀ, ‘ਕਾਲੀਆਂ</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 21 word types tagged as particles (PART): ਕਾਸ਼, ਕਿ, ਕਿਉਂ, ਕੀ, ਕੁ, ਕੇ, ਕੇਵਲ, ਜਿਹਾ, ਜਿਹੀ, ਜਿਹੇ, ਜੀ, ਤਾਂ, ਨਹੀਂ, ਨਾ, ਭਰ, ਭਾਵ, ਮੈਂ, ਵੀ, ਸਿਰਫ਼, ਹਾਂ, ਹੀ</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as pronouns (PRON): _, ਅਸੀਂ, ਆਪ, ਆਪਣਾ, ਆਪਣੇ-ਆਪ, ਇਹ, ਉਹ, ਕਿਸ, ਕੀ, ਕੁਝ, ਕੋਈ, ਕੌਣ, ਜਣਾ, ਜਿਸਦਾ, ਜਿਹੜਾ, ਜਿਹੜੀ, ਜਿੰਨਾ, ਜੋ, ਤੁਸੀ, ਤੁਸੀਂ, ਤੂੰ, ਮੈਂ, ਸਭ, ਸਾਡਾ, ਸਾਨੂੰ, ਹਰ</li>
</ul>

<ul>
<li>This corpus contains 29 lemmas tagged as determiners (DET): _, ਅਜਿਹਾ, ਅਜਿਹੀ, ਇਕ, ਇਸ, ਇਹ, ਇੱਕ, ਉਹ, ਏਨਾ, ਐਨੀ, ਕਈ, ਕਾਹਦਾ, ਕਿਸ, ਕਿਹੋ, ਕਿਹੜਾ, ਕਿੰਨਾ, ਕੀ, ਕੁਝ, ਕੁੱਝ, ਕੁੱਲ, ਕੈਸਾ, ਕੋਈ, ਜੋ, ਬਹੁਤ, ਸਭ, ਸਾਰਾ, ਹਰ, ਹਰੇਕ, ਹੋਰ</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: _, ਇਹ, ਉਹ, ਕਿਸ, ਕੀ, ਕੁਝ, ਕੋਈ, ਜੋ, ਸਭ, ਹਰ</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): ਕਰਨਾ, ਜਾਣਾ, ਪੈਣਾ, ਰਹਿਣਾ, ਸਕਣਾ, ਸੀ, ਹੈ, ਹੋਣਾ</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: ਕਰਨਾ, ਜਾਣਾ, ਪੈਣਾ, ਰਹਿਣਾ, ਸਕਣਾ, ਸੀ, ਹੈ, ਹੋਣਾ</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: ਲੈ, ਕਰਕੇ, ਕੱਢ, ਖਲਾਰ, ਖਿਝ, ਚੱਟ, ਜਾ, ਜੋੜ, ਦੇਖਕੇ, ਪਕੜ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: ਸੀ, ਹੈ, ਸਨ, ਹਾਂ, ਹਨ, ਸਾਂ, ਗਈ, ਗਿਆ, ਰਹੇ, ਸਕਦਾ</li>
    <li>VERB: ਹੋ, ਕੀਤਾ, ਗਈ, ਆ, ਗਿਆ, ਲਿਆ, ਹੈ, ਦਿੱਤਾ, ਦੇਖ, ਹੋਣ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ਪੈਣਾ, ਹੋਣ</li>
    <li>VERB: ਕਰ, ਕਰਨ, ਕਰਨਾ, ਦੇਖਣ, ਰੱਖਣਾ, ਲੈਣ, ਸੁਣ, ਆਉਣ, ਦਿਖਾਇਆ, ਪਾਉਣ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: ਰਿਹਾ, ਹੋਇਆ, ਰਹੀ, ਸਕਦੀ, ਪਏ, ਹੋਏ, ਰਹੀਆਂ, ਰਹਿੰਦੀ, ਕਰਦੀਆਂ, ਜਾਂਦਾ</li>
    <li>VERB: ਕਰਦੀ, ਜਾਂਦਾ, ਦਿੱਤੀ, ਜਾਂਦੀ, ਦੇਖਿਆ, ਹੋਇਆ, ਆਏ, ਗਏ, ਜਾਂਦੇ, ਕਿਹਾ</li>
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
      <li>ADJ: ਪਹਿਲੀ, ਅੱਛੀ, ਪਿਆਰੀ, ਨਵੀਨ, ਪੂਰੀ, ਵੱਡੀ, ਅਜਿਹੀ, ਅਨਾਮ, ਅੱਲੜ੍ਹ, ਇਕੱਠੀਆਂ</li>
      <li>ADP: ਦੀ, ਦੀਆਂ, ਵਾਲੀ, ਜਿੰਨੀ, ਵਰਗੇ, ਵਾਲੀਆਂ</li>
      <li>AUX: ਰਹੀ, ਸਕਦੀ, ਗਈ, ਰਹੀਆਂ, ਰਹਿੰਦੀ, ਹੋਈ, ਕਰਦੀਆਂ, ਜਾਂਦੀ, ਜਾਣ, ਪਈ</li>
      <li>AUX-Fin: ਗਈ, ਹੋਈ</li>
      <li>AUX-Part: ਰਹੀ, ਸਕਦੀ, ਰਹੀਆਂ, ਰਹਿੰਦੀ, ਕਰਦੀਆਂ, ਜਾਂਦੀ, ਪਈ, ਪੈਂਦੀਆਂ, ਹੁੰਦੀ</li>
      <li>NOUN: ਗੱਲ, ਮਾਂ, ਕੌਫ਼ੀ, ਚੀਜ਼, ਔਰਤ, ਗੱਲਾਂ, ਤਰ੍ਹਾਂ, ਰਾਤ, ਸ਼ਾਦੀ, ਉਡੀਕ</li>
      <li>PROPN: ਮਾਰਗਰੇਟ, ਰਮੇਦੀਉਸ, ਵੈਨ, ਹਨੇਲੀ, ਜੈਕਲਿਨ, ਦਾਨ, ਮਰਸੇਨ, ਮਿਸਿਜ਼, ਸ਼ੈਨੀ, ਆਂਟ</li>
      <li>VERB: ਹੋ, ਗਈ, ਲਿਆ, ਦਿੱਤਾ, ਕਰਦੀ, ਦਿੱਤੀ, ਜਾਂਦੀ, ਆਈ, ਗਈਆਂ, ਹੋਈ</li>
      <li>VERB-Fin: ਹੋ, ਗਈ, ਲਿਆ, ਦਿੱਤਾ, ਕਹਿ, ਦਿੰਦੀ, ਹੁੰਦੀ, ਹੋਈ, ਕਰਾਂਗੀ, ਕੀਤੀ</li>
      <li>VERB-Inf: ਕਰਨੀਆਂ, ਦੇਣੀ, ਪਹਿਨਣੀਆਂ, ਹੋਣੀ</li>
      <li>VERB-Part: ਕਰਦੀ, ਦਿੱਤੀ, ਜਾਂਦੀ, ਗਈਆਂ, ਚੁੱਕੀ, ਪਹਿਨੀ, ਆਉਂਦੀਆਂ, ਕਰਵਾਈ, ਕੀਤੀਆਂ, ਕੱਢਦੀ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ਵੱਡੇ, ਚੰਗਾ, ਭਰੇ, ਵੱਡਾ, ਛੋਟੇ, ਨੰਗੇ, ਪੁਰਾਣੇ, ਪ੍ਰਤੱਖ, ਬਜ਼ੁਰਗ, ਲਾਲ</li>
      <li>ADP: ਦੇ, ਦਾ, ਵਿਚ, ਵਾਲਾ, ਵਾਲੇ, ਕਾਰਨ, ਵਰਗਾ, ਛੋਟੇ, ਜਿੱਡਾ, ਜੋਗਾ</li>
      <li>AUX-Fin: ਸੀ, ਸਾਂ, ਗਿਆ, ਰਹੇ, ਸਕਦਾ, ਪਿਆ, ਪਵੇਗਾ, ਸਕਦੇ, ਹੋਵੋਗੇ</li>
      <li>AUX-Part: ਰਿਹਾ, ਹੋਇਆ, ਪਏ, ਹੋਏ, ਜਾਂਦਾ, ਜਾਂਦੇ, ਰਿਹਾ।", ਸਕਿਆ</li>
      <li>NOUN: ਦਿਨ, ਸਮੇਂ, ਘਰ, ਸਮਾਂ, ਰੰਗ, ਕੰਮ, ਜਨਮ, ਪਾਣੀ, ਮਹੀਨੇ, ਸਕੂਲ</li>
      <li>PROPN: ਬੂਇੰਦੀਆ, ਟਿਨ, ਮੈਲਈਆਦਿ, ਆਰਕੇਦੀਓ, ਔਰਲਿਆਨੋ, ਜ਼ੋਰਬਾ, ਹੋਸਿ, ਐਤਵਾਰ, ਪੀਟਰ, ਮਾਰਚ</li>
      <li>VERB: ਕੀਤਾ, ਗਿਆ, ਜਾਂਦਾ, ਦੇਖ, ਸੀ, ਆਇਆ, ਦੇਖਿਆ, ਹੁੰਦਾ, ਹੋਇਆ, ਆਏ</li>
      <li>VERB-Fin: ਕੀਤਾ, ਗਿਆ, ਦੇਖ, ਸੀ, ਆਇਆ, ਹੁੰਦਾ, ਲੱਗਾ, ਬਣਾਇਆ, ਆਖਿਆ, ਜਾਵਾਂਗੇ</li>
      <li>VERB-Inf: ਪਹਿਣਨੇ</li>
      <li>VERB-Part: ਜਾਂਦਾ, ਦੇਖਿਆ, ਹੋਇਆ, ਆਏ, ਗਏ, ਜਾਂਦੇ, ਕਿਹਾ, ਪੁੱਛਦਾ, ਬੈਠੇ, ਕਹਿੰਦੇ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: ਵੱਡੇ, ਭਰੇ, ਅਜਿਹੇ, ਅਨਾਮ, ਆਮ, ਇਕੱਠੀਆਂ, ਇਕੱਠੇ, ਕਦੀਮ, ਕੱਚੇ, ਗੁਪਤ</li>
      <li>ADP: ਦੇ, ਦੀਆਂ, ਵਾਲੇ, ਦਿਆਂ, ਵਰਗੇ, ਵਾਲੀਆਂ</li>
      <li>AUX-Fin: ਸਨ, ਹਨ, ਨੇ, ਹੋ, ਨੇ), ਸਕਦੇ, ਹਨ), ਹਾਂ;, ਹੋਵੋਗੇ</li>
      <li>AUX-Part: ਪਏ, ਰਹੀਆਂ, ਹੋਏ, ਕਰਦੀਆਂ, ਜਾਂਦੇ, ਪੈਂਦੀਆਂ</li>
      <li>NOUN: ਗੱਲਾਂ, ਮਹੀਨੇ, ਵਜੇ, ਅੱਖਾਂ, ਬਾਰੀਆਂ, ਲੋਕ, ਵਸਤਾਂ, ਆਦਮੀਆਂ, ਇੱਟਾਂ, ਖਾਨਾਬਦੋਸ਼ਾਂ</li>
      <li>PRON: ਉਹ, ਉਨ੍ਹਾਂ, ਅਸੀਂ, ਤੁਸੀਂ, ਉਹਨਾਂ, ਸਾਨੂੰ, ਤੁਹਾਨੂੰ, ਸਾਡੇ, ਇਨ੍ਹਾਂ, ਜਣੇ</li>
      <li>PROPN: ਆਲੂ</li>
      <li>VERB: ਦੇਖ, ਆਏ, ਗਏ, ਜਾਂਦੇ, ਗਈਆਂ, ਦੇ, ਹੋਵੇਗਾ, ਕਹਿੰਦੇ, ਚਲੇ, ਦੱਸੋ</li>
      <li>VERB-Fin: ਦੇਖ, ਹੋਵੇਗਾ, ਦੱਸੋ, ਕਰੋ, ਜਾਵਾਂਗੇ, ਜਾਵੋਗੇ, ਰੁਕੋ, ਲੱਗਦੇ, ਸਨ, ਹੁੰਦੇ</li>
      <li>VERB-Inf: ਕਰਨੀਆਂ, ਪਹਿਣਨੇ, ਪਹਿਨਣੀਆਂ</li>
      <li>VERB-Part: ਆਏ, ਗਏ, ਜਾਂਦੇ, ਗਈਆਂ, ਕਹਿੰਦੇ, ਚਲੇ, ਪੀਂਦਿਆਂ, ਬੈਠੇ, ਆਉਂਦੀਆਂ, ਉਡਾਉਂਦਿਆਂ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ਚੰਗਾ, ਪਹਿਲੀ, ਅੱਛੀ, ਪਿਆਰੀ, ਵੱਡਾ, ਛੋਟੇ, ਪੁਰਾਣੇ, ਪੂਰੀ, ਪ੍ਰਤੱਖ, ਬਜ਼ੁਰਗ</li>
      <li>ADP: ਦਾ, ਵਿਚ, ਵਾਲਾ, ਵਾਲੇ, ਕਾਰਨ, ਵਰਗਾ, ਵਾਲੀ, ਛੋਟੇ, ਜਿੰਨੀ, ਜਿੱਡਾ</li>
      <li>AUX: ਸੀ, ਹੈ, ਹਾਂ, ਰਿਹਾ, ਸਾਂ, ਹੋਇਆ, ਰਹੀ, ਸਕਦੀ, ਗਈ, ਗਿਆ</li>
      <li>AUX-Fin: ਸੀ, ਹੈ, ਹਾਂ, ਸਾਂ, ਗਈ, ਗਿਆ, ਰਹੇ, ਸਕਦਾ, ਹੋਈ, ਪਿਆ</li>
      <li>AUX-Part: ਰਿਹਾ, ਹੋਇਆ, ਰਹੀ, ਸਕਦੀ, ਰਹਿੰਦੀ, ਜਾਂਦਾ, ਜਾਂਦੀ, ਪਈ, ਰਿਹਾ।", ਸਕਿਆ</li>
      <li>NOUN: ਦਿਨ, ਗੱਲ, ਸਮੇਂ, ਘਰ, ਸਮਾਂ, ਮਾਂ, ਰੰਗ, ਕੌਫ਼ੀ, ਕੰਮ, ਚੀਜ਼</li>
      <li>PRON: ਮੈਂ, ਇਹ, ਆਪਣੇ, ਮੇਰੇ, ਮੈਨੂੰ, ਆਪਣੀ, ਇਸ, ਉਸਦੇ, ਮੇਰਾ, ਆਪਣਾ</li>
      <li>PROPN: ਵੈਨ, ਬੂਇੰਦੀਆ, ਟਿਨ, ਮਾਰਗਰੇਟ, ਰਮੇਦੀਉਸ, ਆਰਕੇਦੀਓ, ਔਰਲਿਆਨੋ, ਜ਼ੋਰਬਾ, ਦਾਨ, ਹੋਸਿ</li>
      <li>VERB: ਹੋ, ਕੀਤਾ, ਗਈ, ਗਿਆ, ਲਿਆ, ਹੈ, ਦਿੱਤਾ, ਕਰਦੀ, ਜਾਂਦਾ, ਹੋਣ</li>
      <li>VERB-Fin: ਹੋ, ਕੀਤਾ, ਗਈ, ਗਿਆ, ਲਿਆ, ਹੈ, ਦਿੱਤਾ, ਹੋਣ, ਸੀ, ਆਇਆ</li>
      <li>VERB-Inf: ਕਰਦਾ, ਦੇਣੀ, ਹੋਣੀ</li>
      <li>VERB-Part: ਕਰਦੀ, ਜਾਂਦਾ, ਦਿੱਤੀ, ਜਾਂਦੀ, ਦੇਖਿਆ, ਹੋਇਆ, ਪੁੱਛਦਾ, ਚੁੱਕੀ, ਜਾਈਦਾ, ਦੇਖਦਾ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: ਤੋਂ, ਸਹਾਰੇ</li>
      <li>NOUN: ਗੱਲੋਂ, ਘਰੋ, ਬਾਹੋਂ, ਮੂੰਹੋਂ, ਲਾਗਿਉ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: ਵੱਡੇ, ਛੋਟੇ, ਨੰਗੇ, ਪੁਰਾਣੇ, ਪੂਰੀ, ਬਜ਼ੁਰਗ, ਵਧੀਆ, (ਪ੍ਰਾਚੀਨ, ਅਗਲੇ, ਅਸਮਾਨੀ</li>
      <li>ADP: ਨੂੰ, ਵਾਲੇ, ਸਾਹਮਣੇ, ਕਾਰਨ, ਛੋਟੇ, ਦਿਆਂ, ਵਲ, ਵਾਲੀ, ਵਾਲੀਆਂ</li>
      <li>NOUN: ਘਰ, ਸਮਾਂ, ਰੰਗ, ਕੌਫ਼ੀ, ਤਰ੍ਹਾਂ, ਦਿਨ, ਮਹੀਨੇ, ਰਾਤ, ਸਕੂਲ, ਸਾਲ</li>
      <li>PRON: ਮੈਨੂੰ, ਉਨ੍ਹਾਂ, ਆਪਣੀ, ਆਪਣਾ, ਉਸਦੇ, ਤੈਨੂੰ, ਉਹਨਾਂ, ਕੀ, ਸਾਨੂੰ, ਉਸੇ</li>
      <li>PROPN: ਬੂਇੰਦੀਆ, ਆਰਕੇਦੀਓ, ਮਾਰਗਰੇਟ, ਰਮੇਦੀਉਸ, ਵੈਨ, ਹੋਸਿ, ਦਾਨ, ਮੈਲਈਆਦਿ, ਔਰਲਿਆਨੋ, ਮਾਰਚ</li>
      <li>VERB: ਲੈਣ, ਆਉਣ, ਪਾਉਣ, ਖਾਣ, ਡਰ, ਦੇਣ, ਪੀਂਦਿਆਂ, ਬੀਤਣ, ਸਮਝ, ਉਘੜਨ</li>
      <li>VERB-Inf: ਲੈਣ, ਆਉਣ, ਪਾਉਣ, ਖਾਣ, ਦੇਣ, ਬੀਤਣ, ਸਮਝ, ਉਘੜਨ, ਉਠਣ, ਉਠਾਣ</li>
      <li>VERB-Part: ਪੀਂਦਿਆਂ, ਉਡਾਉਂਦਿਆਂ, ਦੇਖਦਿਆਂ, ਬੁੜਬੁੜਾਉਂਦੇ, ਮੁਸਕਰਾਉਂਦਿਆਂ, ਲੰਘਦਿਆਂ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ਚੰਗਾ, ਅੱਛੀ, ਪਿਆਰੀ, ਲਾਲ, ਵੱਡਾ, ਗੁਪਤ, ਭਰੇ, ਵੱਡੀ, ਹੋਰ, ਅਜਿਹੇ</li>
      <li>ADP: ਵਰਗਾ, ਜਿੱਡਾ, ਵਰਗੇ, ਵਾਲੀ, ਵਾਲੇ</li>
      <li>NOUN: ਗੱਲ, ਦਿਨ, ਕੰਮ, ਚੀਜ਼, ਦੋਸਤ, ਪਾਣੀ, ਉਡੀਕ, ਜਨਮ, ਮਾਂ, ਸ਼ਾਦੀ</li>
      <li>PRON: ਮੈਂ, ਉਹ, ਇਹ, ਅਸੀਂ, ਇਸ, ਤੁਸੀਂ, ਉਸਦੀ, ਕੁਝ, ਜਿਹੜਾ, ਉਸਦੇ</li>
      <li>PROPN: ਟਿਨ, ਜ਼ੋਰਬਾ, ਵੈਨ, ਸ਼ੈਨੀ, ਹਨੇਲੀ, ਆਂਟ, ਇਲਸੀ, ਔਰਲਿਆਨੋ, ਕਿੱਟੀ, ਜੂਨ</li>
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
      <li>ADJ: ਸ਼ਾਂਤ, ਸਮਰੱਥ, ਬੰਦ, ਹੈਰਾਨ, ਅਟੁੱਟ, ਅਲੱਭ, ਆਕਰਸ਼ਕ, ਆਦੀ, ਈਜਾਦ, ਈਰਖਾਲੂ</li>
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
      <li>AUX-Fin: ਸੀ, ਰਹੇ</li>
      <li>AUX-Part: ਸਕਦੀ, ਰਹਿੰਦੀ, ਕਰਦੀਆਂ, ਜਾਂਦਾ, ਜਾਂਦੀ, ਜਾਂਦੇ, ਪੈਂਦੀਆਂ, ਹੁੰਦੀ</li>
      <li>VERB: ਕਰਦੀ, ਜਾਂਦਾ, ਸੀ, ਜਾਂਦੀ, ਜਾਂਦੇ, ਪੁੱਛਦਾ, ਹੋਵੇਗਾ, ਕਹਿੰਦਾ, ਕਹਿੰਦੇ, ਜਾਈਦਾ</li>
      <li>VERB-Fin: ਸੀ, ਹੋਵੇਗਾ, ਕਹਿੰਦਾ, ਦਿੰਦੀ, ਹੁੰਦੀ, ਰਹੇ, ਲੱਗਦਾ, ਲੱਗਦੇ, ਸਨ, ਹੁੰਦੇ</li>
      <li>VERB-Part: ਕਰਦੀ, ਜਾਂਦਾ, ਜਾਂਦੀ, ਜਾਂਦੇ, ਪੁੱਛਦਾ, ਕਹਿੰਦੇ, ਜਾਈਦਾ, ਦੇਖਦਾ, ਪੀਂਦਿਆਂ, ਲੈਂਦਾ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: ਸਨ, ਸਾਂ, ਗਈ, ਗਿਆ, ਪਿਆ, ਹੋ</li>
      <li>AUX-Part: ਰਹੀ, ਪਏ, ਹੋਏ, ਪਈ, ਸਕਿਆ, ਹੋਇਆਂ</li>
      <li>VERB: ਹੋ, ਕੀਤਾ, ਗਈ, ਆ, ਗਿਆ, ਲਿਆ, ਦਿੱਤਾ, ਦਿੱਤੀ, ਆਇਆ, ਦੇਖਿਆ</li>
      <li>VERB-Fin: ਹੋ, ਕੀਤਾ, ਗਈ, ਆ, ਗਿਆ, ਲਿਆ, ਦਿੱਤਾ, ਆਇਆ, ਲੱਗਾ, ਕਹਿ</li>
      <li>VERB-Inf: ਦਿਖਾਇਆ, ਉਠ, ਲੱਗਿਆ</li>
      <li>VERB-Part: ਦਿੱਤੀ, ਦੇਖਿਆ, ਆਏ, ਗਏ, ਕਿਹਾ, ਗਈਆਂ, ਬੈਠੇ, ਚਲੇ, ਚੁੱਕੀ, ਪਹਿਨਿਆ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: ਦੱਸੋ, ਪੁੱਛਿਆ, ਸੁਣਾ, ਆਖਿਆ, ਕਰੋ, ਦੇਖੋ, ਰੁਕੋ, ਲਉ, ਲੱਗਦਾ, ਸੁਣਾ!"</li>
      <li>VERB-Fin: ਦੱਸੋ, ਪੁੱਛਿਆ, ਸੁਣਾ, ਆਖਿਆ, ਕਰੋ, ਰੁਕੋ, ਲੱਗਦਾ, ਸੁਣਾ!"</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: ਸੀ, ਹੈ, ਸਨ, ਹਾਂ, ਹਨ, ਸਾਂ, ਗਈ, ਗਿਆ, ਰਹੇ, ਸਕਦਾ</li>
      <li>AUX-Part: ਰਹੀ, ਜਾਂਦਾ, ਸਕਿਆ</li>
      <li>VERB: ਹੋ, ਕਰ, ਲੱਗ, ਕੀਤਾ, ਗਈ, ਆ, ਗਿਆ, ਲਿਆ, ਹੈ, ਕਰਨ</li>
      <li>VERB-Fin: ਹੋ, ਕੀਤਾ, ਗਈ, ਆ, ਗਿਆ, ਲਿਆ, ਹੈ, ਦਿੱਤਾ, ਦੇਖ, ਹੋਣ</li>
      <li>VERB-Inf: ਕਰ, ਕਰਨ, ਦਿਖਾਇਆ, ਕਰਦਾ, ਪੈ, ਉਠ, ਪੀਣ, ਲੱਗਿਆ</li>
      <li>VERB-Part: ਜਾਂਦਾ, ਦਿੱਤੀ, ਗਏ, ਕਿਹਾ, ਚੁੱਕੀ, ਆਉਂਦਾ, ਆਉਂਦੀ, ਕਰਦੇ, ਰਹੀ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: ਪਵੇਗਾ, ਹੋਵੋਗੇ</li>
      <li>VERB-Fin: ਹੋਵੇਗਾ, ਕਰਾਂਗੀ, ਜਾਵਾਂਗੀ, ਜਾਵਾਂਗੇ, ਜਾਵੋਗੇ, ਦਿਆਂਗਾ, ਪਵੇਗਾ, ਲਿਖਾਂਗੀ, ਸਕੂ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: ਸੀ, ਸਾਂ, ਗਿਆ, ਸਕਦੇ, ਸੀ), ਸੀ?</li>
      <li>AUX-Part: ਰਹੀ</li>
      <li>VERB: ਕੀਤਾ, ਗਿਆ, ਦਿੱਤੀ, ਸੀ, ਗਏ, ਆਈ, ਕਿਹਾ, ਦਿਖਾਇਆ, ਚੁੱਕੀ, ਦਿਖਾਈ</li>
      <li>VERB-Fin: ਕੀਤਾ, ਗਿਆ, ਸੀ, ਪੁੱਛਿਆ, ਬਣਾਇਆ, ਆਖਿਆ, ਦੱਸੋ, ਲਾਇਆ, ਸਨ, ਹੁੰਦੇ</li>
      <li>VERB-Inf: ਦਿਖਾਇਆ, ਉਠ, ਲੱਗਿਆ</li>
      <li>VERB-Part: ਦਿੱਤੀ, ਗਏ, ਕਿਹਾ, ਚੁੱਕੀ, ਰਹੀ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: ਹੈ, ਹਾਂ, ਹਨ, ਰਹੇ, ਹੋਈ, ਨੇ, ਹੋਣ, ਏ, ਏਂ, ਐ"</li>
      <li>VERB-Fin: ਹੋ, ਆ, ਹੈ, ਦੇਖ, ਹੋਣ, ਆਇਆ, ਹੁੰਦਾ, ਲੱਗਾ, ਕਹਿ, ਕਹਿੰਦਾ</li>
      <li>VERB-Inf: ਕਰਦਾ, ਦਿਖਾਉਣ</li>
      <li>VERB-Part: ਆਉਂਦੀ, ਚਾਹੁੰਦਾ</li>
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
      <li>DET: ਇਸ, ਇਹ, ਇਸੇ, ਅਜਿਹੀ, ਇਸਤੋਂ, ਇਹੋ, ਉਸ, ਕੀ, "ਇਹ, "ਉਹ</li>
      <li>PRON: ਉਸ, ਉਹ, ਜੋ, ਇਹ, ਉਸਨੇ, ਕਿਸੇ, ਇਸ, ਜਿਨ੍ਹਾਂ, ਉਹਨੂੰ, ਉਸੇ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ਇੱਕ, ਕੋਈ, ਇਕ, ਹਰ, ਕਈ, ਸਭ, ਹੋਰ, ਕਿਸੇ, ਕੁਝ, ਸਾਰੇ</li>
      <li>PRON: ਕੋਈ, ਇਸਦੇ, ਕੀ, ਕੁਝ, ਆਪ, ਹਰ, ਜਣੇ, ਸਭ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: "ਕਿੰਨਾ, ਕਿਸ, ਕਿਹੋ, ਕਿਹੜਾ, ਕੈਸਾ, ‘ਕਾਹਦਾ</li>
      <li>PRON: ਕਿਸ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: ਉਨ੍ਹਾਂ</li>
      <li>PRON: ਮੈਂ, ਆਪਣੇ, ਮੇਰੇ, ਮੈਨੂੰ, ਉਨ੍ਹਾਂ, ਅਸੀਂ, ਆਪਣੀ, ਆਪਣੀਆਂ, ਉਸਦੇ, ਮੇਰਾ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: ਜਿਸ</li>
      <li>PRON: ਜਿਸ, ਜਿਸਦਾ, ਜਿਹੜਾ, ਤੁਹਾਨੂੰ, ਜਿਸਨੂੰ, ਜਿਹੜੀ, ਜਿੰਨਾ, ਜਿਹਨਾਂ, ਜਿਹੜੇ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 1, 1942, 12</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ਉਸਦੇ, ਮੇਰੀ, ਉਸਦੀ, ਤੇਰਾ, ਸਾਡੇ, ਉਹਦੀ, ਜਿਸਦਾ, ਤੁਹਾਡੀ, ਤੇਰੇ, ਮੇਰੀਆਂ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ਆਪਣੇ, ਆਪਣੀ, ਆਪਣਾ, ਆਪਣੇ-ਆਪ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ਸਾਂ, ਗਿਆ, ਹਾਂ;</li>
      <li>PRON: ਮੈਂ, ਮੇਰੇ, ਮੈਨੂੰ, ਅਸੀਂ, ਆਪਣੀ, ਮੇਰਾ, ਆਪਣਾ, ਮੇਰੀ, ਸਾਨੂੰ, (ਮੈਨੂੰ</li>
      <li>VERB: ਹੋ, ਕੀਤਾ, ਗਿਆ, ਦਿੱਤਾ, ਦਿੱਤੀ, ਕਰਦਾ, ਬਣਾਇਆ, ਆਖਿਆ, ਕਰਾਂਗੀ, ਚਾਹੁੰਦਾ</li>
      <li>VERB-Fin: ਹੋ, ਕੀਤਾ, ਗਿਆ, ਦਿੱਤਾ, ਬਣਾਇਆ, ਆਖਿਆ, ਕਰਾਂਗੀ, ਜਾਵਾਂਗੀ, ਜਾਵਾਂਗੇ, ਦਿਆਂਗਾ</li>
      <li>VERB-Inf: ਕਰਦਾ</li>
      <li>VERB-Part: ਦਿੱਤੀ, ਚਾਹੁੰਦਾ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ਹੋ, ਹੋਵੋਗੇ</li>
      <li>PRON: ਤੁਸੀਂ, ਤੈਨੂੰ, ਤੁਹਾਨੂੰ, ਤੇਰਾ, ਤੂੰ, ਤੇਰੇ</li>
      <li>VERB: ਕਹਿ, ਦੱਸੋ, ਸੁਣਾ, ਕਰੋ, ਜਾਵੋਗੇ, ਦੇਖੋ, ਰੁਕੋ, ਲਉ, ਲੱਗਦੇ, ਸੁਣਾ!"</li>
      <li>VERB-Fin: ਕਹਿ, ਦੱਸੋ, ਸੁਣਾ, ਕਰੋ, ਜਾਵੋਗੇ, ਰੁਕੋ, ਲੱਗਦੇ, ਸੁਣਾ!"</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: ਹੈ, ਸਨ, ਹਾਂ, ਹਨ, ਰਹੇ, ਸਕਦਾ, ਹੋਈ, ਨੇ, ਪਿਆ, ਹੋਣ</li>
      <li>AUX-Part: ਰਿਹਾ, ਜਾਂਦਾ</li>
      <li>PRON: ਉਹ, ਇਹ, ਆਪਣੇ, ਉਨ੍ਹਾਂ, ਇਸ, ਉਸਦੇ, ਉਸਦੀ, ਉਸਦਾ, ਉਹਨਾਂ, ਉਸੇ</li>
      <li>VERB: ਹੈ, ਦੇਖ, ਜਾਂਦਾ, ਹੋਣ, ਆਇਆ, ਹੁੰਦਾ, ਹੋਈ, ਚੁੱਕੀ, ਹੁੰਦੀ, ਆਉਂਦਾ</li>
      <li>VERB-Fin: ਹੈ, ਦੇਖ, ਹੋਣ, ਆਇਆ, ਹੁੰਦਾ, ਹੁੰਦੀ, ਹੋਈ, ਐ”, ਕੀਤੀ, ਦੱਸੋ</li>
      <li>VERB-Part: ਜਾਂਦਾ, ਚੁੱਕੀ, ਆਉਂਦਾ</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>ADV: ਜਦੋਂ, ਇਸ, ਏਥੋਂ, ਅਜੇ, ਜਿਵੇਂ</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: ਆਪਣੇ</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>SCONJ: ਬਾਵਜੂਦ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: ਸੀ, ਹੈ.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: ਸੀ, ਹੈ, ਰਹਿਣਾ, ਹੋਣਾ, ਸਕਣਾ, ਪੈਣਾ, ਕਰਨਾ.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ਜਾਣਾ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--NOUN-Acc-ADP(ਨੇ) (2)</li>
      <li>VERB--NOUN-Nom (16)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB--PRON-ADP(ਨੇ) (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Acc-ADP(ਨੇ) (2)</li>
      <li>VERB--PRON-Nom (22)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (4)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ਦਾ) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ਨੇ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (39)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ਨੇ) (1)</li>
      <li>VERB-Fin--PRON (7)</li>
      <li>VERB-Fin--PRON-ADP(ਨੇ) (4)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Acc-ADP(ਨੇ) (1)</li>
      <li>VERB-Fin--PRON-Nom (34)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(ਦਾ) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(ਨੇ) (2)</li>
      <li>VERB-Inf--NOUN-Nom (9)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-ADP(ਨੂੰ) (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Acc-ADP(ਨੇ) (1)</li>
      <li>VERB-Inf--PRON-Nom (12)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Acc-ADP(ਨੇ) (5)</li>
      <li>VERB-Part--NOUN-Nom (21)</li>
      <li>VERB-Part--NOUN-Nom-ADP(ਨੇ) (1)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-ADP(ਨੇ) (4)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Acc-ADP(ਨੇ) (2)</li>
      <li>VERB-Part--PRON-Nom (57)</li>
      <li>VERB-Part--PRON-Nom-ADP(ਨਾ) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Acc-ADP(ਨੂੰ) (4)</li>
      <li>VERB--NOUN-Nom (20)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-ADP(ਨੂੰ) (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Acc-ADP(ਨਾਲ) (1)</li>
      <li>VERB--PRON-Acc-ADP(ਨੂੰ) (1)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(ਨੂੰ) (2)</li>
      <li>VERB-Conv--NOUN-Nom (6)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ਦਾ) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ਨੂੰ) (5)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(’ਤੇ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (14)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-ADP(ਨੂੰ) (5)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(_) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(ਨੂੰ) (7)</li>
      <li>VERB-Inf--NOUN-Nom (37)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-ADP(ਦਾ) (1)</li>
      <li>VERB-Inf--PRON-ADP(ਨੂੰ) (2)</li>
      <li>VERB-Inf--PRON-Acc (6)</li>
      <li>VERB-Inf--PRON-Acc-ADP(ਨੂੰ) (1)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (3)</li>
      <li>VERB-Part--NOUN-Acc (4)</li>
      <li>VERB-Part--NOUN-Acc-ADP(ਦਾ) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(ਨੂੰ) (5)</li>
      <li>VERB-Part--NOUN-Nom (34)</li>
      <li>VERB-Part--NOUN-Nom-ADP(ਨੂੰ) (3)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-ADP(ਨੂੰ) (5)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Acc-ADP(ਨੂੰ) (1)</li>
      <li>VERB-Part--PRON-Nom-ADP(ਨੂੰ) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-ADP(ਨੂੰ) (4)</li>
      <li>VERB--PRON-Acc (4)</li>
      <li>VERB--PRON-Acc-ADP(ਨੂੰ) (1)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (5)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-ADP(ਨੂੰ) (2)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
      <li>VERB-Part--PRON-Acc-ADP(ਨੂੰ) (3)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: ਪੁੱਛਣਾ ਆਪਣੇ-ਆਪ</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>aux:pass</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>det:poss</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:tmod</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>csubj</a>, <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
