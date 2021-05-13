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
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Janine Siewert.

Repository: [UD_Low_Saxon-LSDC](https://github.com/UniversalDependencies/UD_Low_Saxon-LSDC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnds_lsdc28)<br />
Download all treebanks: [UD 2.8](/#download)

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

The UD Low Saxon LSDC dataset consists of sentences in 18 Low Saxon dialects from both Germany and the Netherlands. These sentences are (or are to become) part of the LSDC dataset and represent the language from the 19th and early 20th century in genres such as short stories, novels, speeches, letters and fairytales.




The UD Low Saxon LSDC dataset contains 18 Low Saxon dialects from both Germany and the Netherlands represented by 2 sentences each and belonging to the domains of short stories, novels, speeches, letters and fairytales. Each sentence was chosen from a different text to present some of the variation within the different dialect groups. Since there is no official interregional spelling, the interregional spelling suggestion used by e.g. the Dutch Low Saxon Wikipedia (_Nysassiske Skryvwyse_, described in more detail here: https://skryvwyse.eu/ (only in Low Saxon)) is used as a compromise for normalisation, but the original spelling of the source is included in the line "text_orig =" and a Middle Low Saxon lemma is added in the tenth column ("lemma[gml]=xxx") in order to make the Modern Low Saxon data more easily comparable with the Middle Low Saxon data in the reference corpus "Referenzkorpus Mittelniederdeutsch/Niederrheinisch". For this reason, the Middle Low Saxon lemma forms follow the "Mittelniederdeutsches Handwörterbuch" by Agathe Lasch et al. like in the reference corpus. Middle Low Saxon lemmata are only added in the cases where I have found an attestation in Middle Low Saxon, i.e. the word is either listed in the Handwörterbuch or is found in the reference corpus. I still include Middle Low Saxon lemmata if the word's meaning has changed, but I did not e.g. create new complex word lemmata from known simplex words and neither did I reconstruct potential Middle Low Saxon forms for words which have not yet been attested at that stage of the language.

The dataset contains only sentences from copyright-free material from the 19th and early 20th century. Part of the sentences are already included in the first release of the LSDC dataset found here: https://github.com/Helsinki-NLP/LSDC/ See there for further information on the origin of the data. The other sentences originate mostly from Joh. A. Leopold's work 'Van de Schelde tot te Weichsel', a digitised version of which is accessible here: https://www.dbnl.org/titels/titel.php?id=leop008sche00 An exception constitutes the first sentence which is taken from a text to be found in the Twentse Taalbank: http://www.twentsetaalbank.nl/docs/TWA.1894-Heinink-Krisjaon_Klaover-150.pdf These other sentences will be added to the next release of the LSDC dataset.

Due to the small size of the first version of the dataset, it has not yet been split into training, development and test sets. The morphological features and relation subtypes are still missing but will be included in the next release.


## Acknowledgments

The following people were involved in the creation of this dataset:

* Janine Siewert (data collection, selection and annotation)
* Jack Michael Rueter (annotation-related advice)

## References

If you use this treebank, please cite this paper describing the LSDC dataset:

```
@inproceedings{siewert-etal-2020-lsdc,
abstract = "We present a new comprehensive dataset for the unstandardised West-Germanic language Low Saxon covering the last two centuries, the majority of modern dialects and various genres, which will be made openly available in connection with the final version of this paper. Since so far no such comprehensive dataset of contemporary Low Saxon exists, this provides a great contribution to NLP research on this language. We also test the use of this dataset for dialect classification by training a few baseline models comparing statistical and neural approaches. The performance of these models shows that in spite of an imbalance in the amount of data per dialect, enough features can be learned for a relatively high classification accuracy.",
address = "Barcelona, Spain (Online)",
author = "Siewert, Janine and Scherrer, Yves and Wieling, Martijn and Tiedemann, Jörg",
booktitle = "Proceedings of the 7th Workshop on NLP for Similar Languages, Varieties and Dialects",
month = dec,
pages = "25–35",
publisher = "International Committee on Computational Linguistics (ICCL)",
title = "{LSDC} - A comprehensive dataset for Low {S}axon Dialect Classification",
url = "https://www.aclweb.org/anthology/2020.vardial-1.3",
year = "2020"
}

```
### References used for the creation of this dataset:

* Lasch, Agathe et al. 1928 ff. *Mittelniederdeutsches Handwörterbuch.* Neumünster: Wachholtz.
* ReN-Team. 2019. *Referenzkorpus Mittelniederdeutsch/Niederrheinisch (1200-1650).* Archived in Hamburger Zentrum für Sprachkorpora. Version 1.0. Publication date 2019-08-14. http://hdl.handle.net/11022/0000-0007-D829-8.



# Statistics of UD Low Saxon LSDC

## POS Tags

[ADJ](nds_lsdc-pos-ADJ.html) – [ADP](nds_lsdc-pos-ADP.html) – [ADV](nds_lsdc-pos-ADV.html) – [AUX](nds_lsdc-pos-AUX.html) – [CCONJ](nds_lsdc-pos-CCONJ.html) – [DET](nds_lsdc-pos-DET.html) – [INTJ](nds_lsdc-pos-INTJ.html) – [NOUN](nds_lsdc-pos-NOUN.html) – [NUM](nds_lsdc-pos-NUM.html) – [PART](nds_lsdc-pos-PART.html) – [PRON](nds_lsdc-pos-PRON.html) – [PROPN](nds_lsdc-pos-PROPN.html) – [PUNCT](nds_lsdc-pos-PUNCT.html) – [SCONJ](nds_lsdc-pos-SCONJ.html) – [VERB](nds_lsdc-pos-VERB.html)

## Features



## Relations

[acl](nds_lsdc-dep-acl.html) – [advcl](nds_lsdc-dep-advcl.html) – [advmod](nds_lsdc-dep-advmod.html) – [amod](nds_lsdc-dep-amod.html) – [appos](nds_lsdc-dep-appos.html) – [aux](nds_lsdc-dep-aux.html) – [case](nds_lsdc-dep-case.html) – [cc](nds_lsdc-dep-cc.html) – [ccomp](nds_lsdc-dep-ccomp.html) – [compound](nds_lsdc-dep-compound.html) – [conj](nds_lsdc-dep-conj.html) – [cop](nds_lsdc-dep-cop.html) – [csubj](nds_lsdc-dep-csubj.html) – [det](nds_lsdc-dep-det.html) – [discourse](nds_lsdc-dep-discourse.html) – [dislocated](nds_lsdc-dep-dislocated.html) – [expl](nds_lsdc-dep-expl.html) – [fixed](nds_lsdc-dep-fixed.html) – [flat](nds_lsdc-dep-flat.html) – [iobj](nds_lsdc-dep-iobj.html) – [mark](nds_lsdc-dep-mark.html) – [nmod](nds_lsdc-dep-nmod.html) – [nsubj](nds_lsdc-dep-nsubj.html) – [nummod](nds_lsdc-dep-nummod.html) – [obj](nds_lsdc-dep-obj.html) – [obl](nds_lsdc-dep-obl.html) – [parataxis](nds_lsdc-dep-parataxis.html) – [punct](nds_lsdc-dep-punct.html) – [root](nds_lsdc-dep-root.html) – [xcomp](nds_lsdc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 36 sentences, 1111 tokens and 1122 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 152 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 7 multi-word tokens. On average, one multi-word token consists of 2.57 syntactic words.</li>
<li>There are 7 types of multi-word tokens. Examples: Kumste, im, in'en, in't, ten, to'm, van'er.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): en, neet, nich, te, to</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): al, anders, dat, de, dee, du, dår, elk, et, eyn, eyner, hee, ik, jy, keynen, man, mekare, niks, see, sik, veale, wat, wy</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as determiners (DET): dat, de, dee, den, disse, dyn, ear, en, et, geyn, juw, keyn, myn, syn, uns</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: dat, de, dee, et</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): hebben, künnen, möten, möägen, sköälen, weasen, werden, willen</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: hebben, künnen, möägen, werden</li>
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
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: weasen.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, willen, künnen, sköälen, weasen, möägen, werden, möten.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (27)</li>
      <li>VERB--PRON (55)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (37)</li>
      <li>VERB--PRON (29)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--PRON (11)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
