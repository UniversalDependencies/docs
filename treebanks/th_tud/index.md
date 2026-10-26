---
layout: base
title:  'UD_Thai-TUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Thai TUD

Language: [Thai](/th/index.html) (code: `th`)<br/>
Family: Tai-Kadai

This treebank has been part of Universal Dependencies since the UD v2.17 release.

The following people have contributed to making this treebank part of UD: Panyut Sriwirote, Wei Qi Leong, Charin Polpanumas, Santhawat Thanyawong, William Chandra Tjhi, Wirote Aroonmanakun, Attapol T. Rutherford, Ratanon Jiamsundutsadee, Punyanuch Maitreenukul.

Repository: [UD_Thai-TUD](https://github.com/UniversalDependencies/UD_Thai-TUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udth_tud218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: wiki, news, fiction, nonfiction, academic, legal

Questions, comments?
General annotation questions (either Thai-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Thai-TUD/issues).
If you want to collaborate, please contact [attapol&nbsp;•&nbsp;t&nbsp;(æt)&nbsp;chula&nbsp;•&nbsp;ac&nbsp;•&nbsp;th, punyanuch&nbsp;•&nbsp;maitree&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description
*UD Thai TUD* (Thai Universal Dependency Treebank) is a treebank of 3,627 syntactic trees from the Thai National Corpus and Wikipedia, annotated in Universal Dependencies, covering diverse text types and topics across various domains.



The *UD Thai TUD* treebank was created to provide a broad-coverage syntactic resource for the Thai language under the Universal Dependencies (UD) framework. Text was randomly sampled from two major sources: the Thai National Corpus and the November 2020 dump of Thai Wikipedia. To ensure diversity, 5,000 paragraphs were selected from various document types—news articles, Wikipedia entries, essays, advertisements, interviews, and stories—covering a wide range of topics such as politics, crime, entertainment, sports, history, religion, culture, and science. After annotation and rigorous quality control, 3,627 well-formed dependency trees were retained in the final dataset.


## Annotation Process

All paragraphs were tokenized using the `newmm` tokenizer from the PyThaiNLP library, then annotated on the Datasaur platform. A team of 10 annotators with linguistics backgrounds was trained to: (1) correct tokenization errors, (2) assign Universal POS (UPOS) tags, (3) identify dependency arcs, and (4) label relations (DEPREL) without subtypes. The LEMMA field was excluded due to the lack of inflectional morphology in Thai.

Following pilot annotations and manual review, two annotators demonstrating the highest accuracy were selected to complete the remaining data. Agreement was evaluated on 20 double-annotated sentences (399 tokens), achieving Cohen’s Kappa scores of 0.92 (UPOS) and 0.84 (DEPREL), and UAS/LAS scores of 0.85 and 0.78. The annotated data was then converted into CoNLL-U format and split into individual trees based on dependency structure. Trees with incomplete labels, multiple roots, or structural errors were corrected, with additional quality assurance performed via manual inspection of 50 randomly selected trees.

The treebank consists of randomly shuffled sentences sampled from the Thai National Corpus (TNC) and the November 2020 dump of Thai Wikipedia, rather than complete documents. Each filename encodes the source document and the portion of the document from which the sentences were extracted:

- **Wikipedia trees:** filenames follow the format `wiki_<wgArticleID>`.
- **TNC trees:** filenames follow the format `[tnc/][Original TNC filename][Part of the document]`.


## Train–Test Split

The final treebank was split into training, development, and test sets in an 8:1:1 ratio. It consists of syntactically complete trees rather than full documents. While Filenames are used to identify source paragraphs, typically reflecting their origin from the Thai National Corpus or Wikipedia. However, sentence IDs in the final treebank do not encode genre or domain metadata.
<center>

| UPOS | Train | Dev | Test | UPOS | Train | Dev | Test |
|-------|-------|------|------|-------|-------|-----|------|
| NOUN | 18777 | 2270 | 2310 | CCONJ | 2063 | 239 | 270 |
| VERB | 14881 | 1802 | 1867 | ADJ | 1575 | 223 | 197 |
| ADP | 4517 | 530 | 560 | PART | 1366 | 156 | 169 |
| ADV | 4498 | 557 | 521 | NUM | 1161 | 165 | 118 |
| AUX | 3424 | 401 | 421 | DET | 1140 | 137 | 144 |
| PRON | 2796 | 322 | 350 | PUNCT | 871 | 104 | 125 |
| SCONJ | 2438 | 321 | 335 | SYM | 16 | 1 | 1 |
| PROPN | 2488 | 293 | 295 | | | | |

*Table 1. UPOS Distribution in Each Split of TUD*



## Acknowledgments

TUD was developed as part of the paper *"The Thai Universal Dependency Treebank"*, published in *Transactions of the Association for Computational Linguistics (TACL)*. We thank the reviewers and the action editor of the paper for their constructive feedback, which contributed to significant improvements. We also gratefully acknowledge all annotators for their effort and dedication throughout the annotation process.

This work was supported by the National Research Foundation, Singapore under its AI Singapore Programme, and by the National Science Research and Innovation Fund (NSRF) through the Program Management Unit for Human Resources & Institutional Development, Research, and Innovation [grant number B0SF640234].

## References

If you use TUD in your project or publication, please cite as follows:

BibTex

```
@article{Sriwirote-etal-2024-TUD,
title={The Thai Universal Dependency Treebank},
author={Panyut Sriwirote and Wei Qi Leong and
Charin Polpanumas and Santhawat Thanyawong and
William Chandra Tjhi and Wirote Aroonmanakun and
Attapol T. Rutherford},
journal={Transactions of the Association for Computational Linguistics},
year={in press},
publisher={MIT Press Direct}
}
```



# Statistics of UD Thai TUD

## POS Tags

[ADJ](th_tud-pos-ADJ.html) – [ADP](th_tud-pos-ADP.html) – [ADV](th_tud-pos-ADV.html) – [AUX](th_tud-pos-AUX.html) – [CCONJ](th_tud-pos-CCONJ.html) – [DET](th_tud-pos-DET.html) – [NOUN](th_tud-pos-NOUN.html) – [NUM](th_tud-pos-NUM.html) – [PART](th_tud-pos-PART.html) – [PRON](th_tud-pos-PRON.html) – [PROPN](th_tud-pos-PROPN.html) – [PUNCT](th_tud-pos-PUNCT.html) – [SCONJ](th_tud-pos-SCONJ.html) – [SYM](th_tud-pos-SYM.html) – [VERB](th_tud-pos-VERB.html)

## Features

[ExtPos](th_tud-feat-ExtPos.html)

## Relations

[acl](th_tud-dep-acl.html) – [advcl](th_tud-dep-advcl.html) – [advmod](th_tud-dep-advmod.html) – [amod](th_tud-dep-amod.html) – [appos](th_tud-dep-appos.html) – [aux](th_tud-dep-aux.html) – [case](th_tud-dep-case.html) – [cc](th_tud-dep-cc.html) – [ccomp](th_tud-dep-ccomp.html) – [clf](th_tud-dep-clf.html) – [compound](th_tud-dep-compound.html) – [conj](th_tud-dep-conj.html) – [cop](th_tud-dep-cop.html) – [csubj](th_tud-dep-csubj.html) – [dep](th_tud-dep-dep.html) – [det](th_tud-dep-det.html) – [discourse](th_tud-dep-discourse.html) – [dislocated](th_tud-dep-dislocated.html) – [expl](th_tud-dep-expl.html) – [fixed](th_tud-dep-fixed.html) – [flat](th_tud-dep-flat.html) – [iobj](th_tud-dep-iobj.html) – [list](th_tud-dep-list.html) – [mark](th_tud-dep-mark.html) – [nmod](th_tud-dep-nmod.html) – [nsubj](th_tud-dep-nsubj.html) – [nummod](th_tud-dep-nummod.html) – [obj](th_tud-dep-obj.html) – [obl](th_tud-dep-obl.html) – [orphan](th_tud-dep-orphan.html) – [parataxis](th_tud-dep-parataxis.html) – [punct](th_tud-dep-punct.html) – [root](th_tud-dep-root.html) – [vocative](th_tud-dep-vocative.html) – [xcomp](th_tud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3627 sentences and 77215 tokens.</li>
</ul>

<ul>
<li>This corpus contains 68893 tokens (89%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 70 types of words that contain both letters and punctuation. Examples: พ.ศ., ค.ศ., อ., ธ.ค., ม.ค., ต., ก.พ., น.ส., จ., ตร., น., พ.ย., ศก., ผบ., พ.ต.อ., สน., Lo-Society, ดร., ผช., ผญบ., ล., สภ., อบจ., ก.ล.ต., กม., พ.ร.บ., พล.ต.อ., ส.ท., โทร., 802.1x/RADIUS, A., CSMA/CA, S., http://www.unseencar.com/content5.php, l'Opéra, ก.น., ก.ย., ก.หน., กทม., จนท., จอง-อิล, ฉก., ด.ญ., ดี.ซี., ท., นบ., นศ., บช., บช.น., ผกก.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, X</li>
</ul>

<ul>
<li>This corpus contains 62 word types tagged as particles (PART): ก็, ก็ดี, ก็แล้วกัน, ขนาด, ขี้, ครับ, คือ, ค่ะ, ช่าง, ซะ, ซะแล้ว, ซึ่ง, ดังเช่น, ด้วย, ตาม, ทั้ง, ทั้งสิ้น, ที, ที่, นะ, นัก, นั่น, นั่นเอง, นั้น, นี่, นี่เอง, นี่แหละ, นี้, น่า, บ้าง, ฟะ, ล่ะ, ล่ะกัน, หรอ, หรอก, หรือไม่, ห้าม, อย่าง, อย่างน้อย, อย่างไร, อะไร, อาทิ, อีก, เช่น, เช่นกัน, เดียว, เป็นต้น, เลย, เสีย, เอง, แต่, แม้กระทั่ง, แม้แต่, แล้ว, แหละ, โดย, ใคร, ใด, ให้, ไม่, ไหน, ไหม</li>
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


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADJ: ต่อ, ทั่ว, เดียว, ขยัน, ถัด, ที่, เขียว, แวด</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: จน, ตั้ง, ท่าม, โดย, พร้อม, ภาย, หลัง, เช่น, ให้, ของ</li>
          <li>PART: อาทิ</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADV: ต่อ, ก็, แต่, ใน, ตลอด, ทรง, ทัน, มาก, เพียง, ค่อน</li>
          <li>PART: นะ, เลย, แต่</li>
        </ul>
      </li>
      <li>AUX
        <ul>
          <li>AUX: ยัง, ควร, จะ, อาจ, คง, ที่, อยู่, เพิ่ง</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>CCONJ: อย่างไร, ขณะ, รวม, นอก, แต่, ดัง, ทั้ง, ใน, พร้อม, อย่าง</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: ดัง, นั่น, เหล่า</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: ที่, ฝ่า</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>PART: ไม่</li>
          <li>SCONJ: เนื่อง, หลัง, ไม่, ถึง, เป็น, ตัวอย่าง, แม้, ขณะ, นอก, ภาย</li>
          <li>VERB: ยก</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2452)</li>
      <li>VERB--NOUN-ADP(_) (49)</li>
      <li>VERB--PRON (1978)</li>
      <li>VERB--PRON-ADP(_) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (5932)</li>
      <li>VERB--NOUN-ADP(_) (29)</li>
      <li>VERB--PRON (549)</li>
      <li>VERB--PRON-ADP(_) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (29)</li>
      <li>VERB--NOUN-ADP(_) (2)</li>
      <li>VERB--PRON (12)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 2 relation types are not used in this corpus at all: <a>goeswith</a>, <a>reparandum</a></li>
</ul>
