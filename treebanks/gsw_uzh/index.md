---
layout: base
title:  'UD_Swiss_German-UZH'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Swiss German UZH

Language: [Swiss German](/gsw/index.html) (code: `gsw`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.5 release.

The following people have contributed to making this treebank part of UD: Noëmi Aepli.

Repository: [UD_Swiss_German-UZH](https://github.com/UniversalDependencies/UD_Swiss_German-UZH)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgsw_uzh28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: fiction, news, blog, wiki, nonfiction

Questions, comments?
General annotation questions (either Swiss German-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Swiss_German-UZH/issues).
If you want to collaborate, please contact [naepli&nbsp;(æt)&nbsp;cl&nbsp;•&nbsp;uzh&nbsp;•&nbsp;ch].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description


_UD\_Swiss\_German-UZH_ is a tiny manually annotated treebank of 100 sentences in different Swiss German dialects and a variety of text genres.





This repository presents work on Universal Dependency Parsing for Swiss German, which has been done as part of the Master’s Thesis _Parsing Approaches for Swiss German_ at the [Institute for Computational Linguistics](www.cl.uzh.ch) at the University of Zurich.

The provided resources consist of 100 Swiss German sentences (from different sources), manually annotated with part-of-speech tags and universal dependencies.

[NOAH’s Corpus of Swiss German Dialects](https://noe-eva.github.io/NOAH-Corpus/corpus.html) was used as a resource for the Swiss German part-of-speech tagging process - a process preliminary to parsing.

## Annotation

In general, we follow the German guidelines [UD for German](https://universaldependencies.org/de/index.html).

The POS annotations are generally based on the German guidelines, namely the [Stuttgart-Tübingen-TagSet (STTS)](http://www.sfs.uni-tuebingen.de/resources/stts-1999.pdf) and some changes according to the [TIGER annotation scheme](https://files.ifi.uzh.ch/cl/siclemat/lehre/papers/tiger-annot.pdf). Furthermore, dealing with Swiss German, there is the need for an additional POS tag `PTKINF`, not present in the STTS tagset, as well as for the "meta tag" `TAG+`.

* `PTKINF` is an infinitive particle which does not exist in Standard German but is frequently used in dialects. It comes in the form of _go_, _cho_, _goge_, _lo_ to name a few, as in _Si gönd go poschte_. (_They go shopping._) In the Standard German translation, _Sie gehen einkaufen._, we can see that there is no equivalent.
* `TAG+` is used to handle merged words; we introduced the “+“-sign which can be added to any PoS tag. In the STTS there is one tag like this: the `APPRART`, used for combinations of articles and prepositions like _im_ consisting of _in + dem_ (_in the_). However, in Swiss German these kind of merges are performed with any kind of words and just merging the tags would result in a big tagset. Therefore we decided to use the "head" of the word or the first word as tag and simply add a plus to show that this word incorporates another one [Hollenstein and Aepli, 2014](). Like this, they can easily be found and, if needed, manually expanded. Frequent examples of such words include _hemmer_ (_haben + wir_), _häts_ (_hat + es_), and _sinz_ (_sind + sie_), for _we have_, _it has_ and _they are_.


The Universal Dependency POS (UPOS) tags are converted according to the mapping provided by the Universal Dependency. Additionaly:

* `PTKINF` are converted to `PART`
* the plus sign in `TAG+` are disgarded




## Acknowledgments

This work has been performed at the University of Zurich by Noëmi Aepli with the help of Simon Clematide.

## References

* Citation:

```
@inproceedings{aepli2018parsing,
title={{Parsing Approaches for Swiss German}},
author={No\"emi Aepli and Simon Clematide},
booktitle={{Proceedings of the 3rd Swiss Text Analytics Conference (SwissText), Winterthur, Switzerland}},
year={2018}
}
```

* [Download Paper](https://www.zora.uzh.ch/id/eprint/159152/1/paper1.pdf)
* [Download Master's Thesis](http://www.cl.uzh.ch/dam/jcr:cdad4255-ddd4-4071-a706-491e75085339/aepli_noemi_1990.pdf)



# Statistics of UD Swiss German UZH

## POS Tags

[ADJ](gsw_uzh-pos-ADJ.html) – [ADP](gsw_uzh-pos-ADP.html) – [ADV](gsw_uzh-pos-ADV.html) – [AUX](gsw_uzh-pos-AUX.html) – [CCONJ](gsw_uzh-pos-CCONJ.html) – [DET](gsw_uzh-pos-DET.html) – [NOUN](gsw_uzh-pos-NOUN.html) – [NUM](gsw_uzh-pos-NUM.html) – [PART](gsw_uzh-pos-PART.html) – [PRON](gsw_uzh-pos-PRON.html) – [PROPN](gsw_uzh-pos-PROPN.html) – [PUNCT](gsw_uzh-pos-PUNCT.html) – [SCONJ](gsw_uzh-pos-SCONJ.html) – [VERB](gsw_uzh-pos-VERB.html) – [X](gsw_uzh-pos-X.html)

## Features



## Relations

[acl](gsw_uzh-dep-acl.html) – [acl:relcl](gsw_uzh-dep-acl-relcl.html) – [advcl](gsw_uzh-dep-advcl.html) – [advmod](gsw_uzh-dep-advmod.html) – [amod](gsw_uzh-dep-amod.html) – [appos](gsw_uzh-dep-appos.html) – [aux](gsw_uzh-dep-aux.html) – [aux:pass](gsw_uzh-dep-aux-pass.html) – [case](gsw_uzh-dep-case.html) – [cc](gsw_uzh-dep-cc.html) – [ccomp](gsw_uzh-dep-ccomp.html) – [compound](gsw_uzh-dep-compound.html) – [compound:prt](gsw_uzh-dep-compound-prt.html) – [conj](gsw_uzh-dep-conj.html) – [cop](gsw_uzh-dep-cop.html) – [csubj](gsw_uzh-dep-csubj.html) – [dep](gsw_uzh-dep-dep.html) – [det](gsw_uzh-dep-det.html) – [expl](gsw_uzh-dep-expl.html) – [fixed](gsw_uzh-dep-fixed.html) – [flat](gsw_uzh-dep-flat.html) – [iobj](gsw_uzh-dep-iobj.html) – [mark](gsw_uzh-dep-mark.html) – [nmod](gsw_uzh-dep-nmod.html) – [nmod:poss](gsw_uzh-dep-nmod-poss.html) – [nsubj](gsw_uzh-dep-nsubj.html) – [nsubj:pass](gsw_uzh-dep-nsubj-pass.html) – [nummod](gsw_uzh-dep-nummod.html) – [obj](gsw_uzh-dep-obj.html) – [obl](gsw_uzh-dep-obl.html) – [parataxis](gsw_uzh-dep-parataxis.html) – [punct](gsw_uzh-dep-punct.html) – [root](gsw_uzh-dep-root.html) – [xcomp](gsw_uzh-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 100 sentences and 1444 tokens.</li>
</ul>

<ul>
<li>This corpus contains 176 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 12 types of words that contain both letters and punctuation. Examples: Baguetteschliff-Diamante, Chaux-de-Fonds, Informations-, Marie-Claire, Mercury-atlas-8-flug, Mont-pèlerin, Möhli-basel, Natsi-spiler, PowerPoint-Präsentation, Schloss-heer, Scientology-Chilä, YB-Fans</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 12 word types tagged as particles (PART): am, go, hi, los, nid, nöd, nümm, ume, use, uuf, uus, z</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (24)</li>
      <li>VERB--PRON (46)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (30)</li>
      <li>VERB--PRON (22)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--PRON (6)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>nmod:poss</a>, <a>nsubj:pass</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
