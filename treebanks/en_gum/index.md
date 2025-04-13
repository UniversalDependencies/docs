---
layout: base
title:  'UD_English-GUM'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English GUM

Language: [English](/en/index.html) (code: `en`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Siyao Peng, Amir Zeldes.

Repository: [UD_English-GUM](https://github.com/UniversalDependencies/UD_English-GUM)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_gum215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-NC-SA 4.0

Genre: academic, blog, email, fiction, government, legal, news, nonfiction, social, spoken, web, wiki

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-GUM/issues).
If you want to collaborate, please contact [amir&nbsp;•&nbsp;zeldes&nbsp;(æt)&nbsp;georgetown&nbsp;•&nbsp;edu].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

Universal Dependencies syntax annotations from the GUM corpus (https://gucorpling.org/gum/)



GUM, the Georgetown University Multilayer corpus, is an open source collection of richly annotated texts from multiple text types. The corpus is collected and expanded by students as part of the curriculum in the course LING-4427 "Computational Corpus Linguistics" at Georgetown University. The selection of text types is meant to represent different communicative purposes, while coming from sources that are readily and openly available (usually Creative Commons licenses), so that new texts can be annotated and published with ease.

The dependencies in the corpus up to GUM version 5 were originally annotated using Stanford Typed Depenencies (de Marneffe & Manning 2013) and converted automatically to UD using DepEdit (https://gucorpling.org/depedit/). The rule-based conversion took into account gold annotations found in other annotation layers of the GUM corpus (e.g. entity annotations), and has since been corrected manually in native UD. The original conversion script used can found in the GUM build bot code from version 5, available from the (non-UD) GUM repository. Documents from version 6 of GUM onwards were annotated directly in UD, and subsequent manual error correction to all GUM data has also been done directly using the UD guidelines. Enhanced dependencies were added semi-automatically from version 7.1 of the corpus. For more details see the [corpus website](https://gucorpling.org/gum/).

## Acknowledgments

GUM annotation team (so far - thanks for participating!)

Adrienne Isaac, Akitaka Yamada, Alex Giorgioni, Alexandra Berends, Alexandra Slome, Amani Aloufi, Amber Hall, Amelia Becker, Andrea Price, Andrew O'Brien, Ángeles Ortega Luque, Aniya Harris, Anna Prince, Anna Runova, Anne Butler, Arianna Janoff, Aryaman Arora, Ayan Mandal, Aysenur Sagdic, Bertille Baron, Bradford Salen, Brandon Tullock, Brent Laing, Caitlyn Pineault, Calvin Engstrom, Candice Penelton, Carlotta Hübener, Caroline Gish, Charlie Dees, Chenyue Guo, Chloe Evered, Cindy Luo, Colleen Diamond, Connor O'Dwyer, Cristina Lopez, Cynthia Li, Dan DeGenaro, Dan Simonson, Derek Reagan, Devika Tiwari, Didem Ikizoglu, Edwin Ko, Eliza Rice, Emile Zahr, Emily Pace, Emma Manning, Emma Rafkin, Ethan Beaman, Felipe De Jesus, Han Bu, Hana Altalhi, Hang Jiang, Hannah Wingett, Hanwool Choe, Hassan Munshi, Helen Dominic, Ho Fai Cheng, Hortensia Gutierrez, Jakob Prange, James Maguire, Janine Karo, Jehan al-Mahmoud, Jemm Excelle Dela Cruz, Jess Godes, Jessica Cusi, Jessica Kotfila, Jingni Wu, Joaquin Gris Roca, John Chi, Jongbong Lee, Juliet May, Jungyoon Koh, Katarina Starcevic, Katelyn Carroll, Katelyn MacDougald, Katherine Vadella, Khalid Alharbi, Kristen Cook, Lara Bryfonski, Lauren Levine, Leah Northington, Lindley Winchester, Linxi Zhang, Lucia Donatelli, Luke Gessler, Mackenzie Gong, Margaret Anne Rowe, Margaret Borowczyk, Maria Laura Zalazar, Maria Stoianova, Mariko Uno, Mary Henderson, Maya Barzilai, Md. Jahurul Islam, Michael Kranzlein, Michaela Harrington, Mingyeong Choi, Minnie Annan, Mitchell Abrams, Mohammad Ali Yektaie, Naomee-Minh Nguyen, Negar Siyari, Nicholas Mararac, Nicholas Workman, Nicole Steinberg, Nitin Venkateswaran, Parker DiPaolo, Phoebe Fisher, Rachel Kerr, Rachel Thorson, Rebecca Childress, Rebecca Farkas, Riley Breslin Amalfitano, Rima Elabdali, Robert Maloney, Ruizhong Li, Ryan Mannion, Ryan Murphy, Sakol Suethanapornkul, Sarah Bellavance, Sarah Carlson, Sasha Slone, Saurav Goswami, Sean Macavaney, Sean Simpson, Seyma Toker, Shane Quinn, Shannon Mooney, Shelby Lake, Shira Wein, Sichang Tu, Siddharth Singh, Siona Ely, Siyao Peng, Siyu Liang, Stephanie Kramer, Sylvia Sierra, Talal Alharbi, Tatsuya Aoyama, Tess Feyen, Timothy Ingrassia, Trevor Adriaanse, Ulie Xu, Wai Ching Leung, Wenxi Yang, Wesley Scivetti, Xiaopei Wu, Xiulin Yang, Yang Liu, Yi-Ju Lin, Yifu Mu, Yilun Zhu, Yingzhu Chen, Yiran Xu, Young-A Son, Yu-Tzu Chang, Yuhang Hu, Yunjung Ku, Yushi Zhao, Zhijie Song, Zhuosi Luo, Zhuxin Wang, Amir Zeldes

... and other annotators who wish to remain anonymous!

## References

The best paper to cite depends on the data you are using. To cite the corpus in general, please refer to the following article (but note that the corpus has changed and grown a lot in the time since); otherwise see different citations for specific aspects below:

Zeldes, Amir (2017) "The GUM Corpus: Creating Multilayer Resources in the Classroom". Language Resources and Evaluation 51(3), 581–612.

```
@Article{Zeldes2017,
author = {Amir Zeldes},
title = {The {GUM} Corpus: Creating Multilayer Resources in the Classroom},
journal = {Language Resources and Evaluation},
year = {2017},
volume = {51},
number = {3},
pages = {581--612},
doi = {http://dx.doi.org/10.1007/s10579-016-9343-x}
}
```

If you are using the **Reddit** subset of GUM in particular, please use this citation instead:

* Behzad, Shabnam and Zeldes, Amir (2020) "A Cross-Genre Ensemble Approach to Robust Reddit Part of Speech Tagging". In: Proceedings of the 12th Web as Corpus Workshop (WAC-XII).

```
@InProceedings{BehzadZeldes2020,
author = {Shabnam Behzad and Amir Zeldes},
title = {A Cross-Genre Ensemble Approach to Robust {R}eddit Part of Speech Tagging},
booktitle = {Proceedings of the 12th Web as Corpus Workshop (WAC-XII)},
pages = {50--56},
year = {2020},
}
```

For papers focusing on the discourse relations, discourse markers or other discourse signal annotations, please cite [the eRST paper](https://arxiv.org/abs/2403.13560):

```
@misc{ZeldesEtAl2024,
title={% raw %}{{{% endraw %}eRST}: A Signaled Graph Theory of Discourse Relations and Organization},
author={Amir Zeldes and Tatsuya Aoyama and Yang Janet Liu and Siyao Peng and Debopam Das and Luke Gessler},
year={2024},
eprint={2403.13560},
archivePrefix={arXiv},
primaryClass={cs.CL},
url={https://arxiv.org/abs/2403.13560}
}
```

For papers using GDTB/PDTB style shallow discourse relations, please cite:

* Yang Janet Liu, Tatsuya Aoyama, Wesley Scivetti, Yilun Zhu, Shabnam Behzad, Lauren Elizabeth Levine, Jessica Lin, Devika Tiwari, and Amir Zeldes (2024), "GDTB: Genre Diverse Data for English Shallow Discourse Parsing across Modalities, Text Types, and Domains". In: Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing. Association for Computational Linguistics: Miami, USA.

```bibtex
@inproceedings{liu-etal-2024-GDTB,
title = "GDTB: Genre Diverse Data for English Shallow Discourse Parsing across Modalities, Text Types, and Domains",
author = "Yang Janet Liu and Tatsuya Aoyama and Wesley Scivetti and Yilun Zhu and Shabnam Behzad and Lauren Elizabeth Levine and Jessica Lin and Devika Tiwari and Amir Zeldes",
booktitle = "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
month = nov,
year = "2024",
address = "Miami, USA",
publisher = "Association for Computational Linguistics",
abstract = "Work on shallow discourse parsing in English has focused on the Wall Street Journal corpus, the only large-scale dataset for the language in the PDTB framework. However, the data is not openly available, is restricted to the news domain, and is by now 35 years old. In this paper, we present and evaluate a new open-access, multi-genre benchmark for PDTB-style shallow discourse parsing, based on the existing UD English GUM corpus, for which discourse relation annotations in other frameworks already exist. In a series of experiments on cross-domain relation classification, we show that while our dataset is compatible with PDTB, substantial out-of-domain degradation is observed, which can be alleviated by joint training on both datasets.",
}
```

If you are using the OntoNotes schema version of the coreference annotations (a.k.a. OntoGUM data in `coref/ontogum/`), please cite this paper instead:

```
@InProceedings{ZhuEtAl2021,
author = {Yilun Zhu and Sameer Pradhan and Amir Zeldes},
booktitle = {Proceedings of ACL-IJCNLP 2021},
title = {% raw %}{{{% endraw %}OntoGUM}: Evaluating Contextualized {SOTA} Coreference Resolution on 12 More Genres},
year = {2021},
pages = {461--467},
address = {Bangkok, Thailand}
```

For papers focusing on named entities or entity linking (Wikification), please cite this paper instead:

```
@inproceedings{lin-zeldes-2021-wikigum,
title = {% raw %}{{{% endraw %}W}iki{GUM}: Exhaustive Entity Linking for Wikification in 12 Genres},
author = {Jessica Lin and Amir Zeldes},
booktitle = {Proceedings of The Joint 15th Linguistic Annotation Workshop (LAW) and
3rd Designing Meaning Representations (DMR) Workshop (LAW-DMR 2021)},
year = {2021},
address = {Punta Cana, Dominican Republic},
url = {https://aclanthology.org/2021.law-1.18},
pages = {170--175},
}
```


# Statistics of UD English GUM

## POS Tags

[ADJ](en_gum-pos-ADJ.html) – [ADP](en_gum-pos-ADP.html) – [ADV](en_gum-pos-ADV.html) – [AUX](en_gum-pos-AUX.html) – [CCONJ](en_gum-pos-CCONJ.html) – [DET](en_gum-pos-DET.html) – [INTJ](en_gum-pos-INTJ.html) – [NOUN](en_gum-pos-NOUN.html) – [NUM](en_gum-pos-NUM.html) – [PART](en_gum-pos-PART.html) – [PRON](en_gum-pos-PRON.html) – [PROPN](en_gum-pos-PROPN.html) – [PUNCT](en_gum-pos-PUNCT.html) – [SCONJ](en_gum-pos-SCONJ.html) – [SYM](en_gum-pos-SYM.html) – [VERB](en_gum-pos-VERB.html) – [X](en_gum-pos-X.html)

## Features

[Abbr](en_gum-feat-Abbr.html) – [Case](en_gum-feat-Case.html) – [Definite](en_gum-feat-Definite.html) – [Degree](en_gum-feat-Degree.html) – [ExtPos](en_gum-feat-ExtPos.html) – [Foreign](en_gum-feat-Foreign.html) – [Gender](en_gum-feat-Gender.html) – [Mood](en_gum-feat-Mood.html) – [Number](en_gum-feat-Number.html) – [NumForm](en_gum-feat-NumForm.html) – [NumType](en_gum-feat-NumType.html) – [Person](en_gum-feat-Person.html) – [Polarity](en_gum-feat-Polarity.html) – [Poss](en_gum-feat-Poss.html) – [PronType](en_gum-feat-PronType.html) – [Reflex](en_gum-feat-Reflex.html) – [Style](en_gum-feat-Style.html) – [Tense](en_gum-feat-Tense.html) – [Typo](en_gum-feat-Typo.html) – [VerbForm](en_gum-feat-VerbForm.html) – [Voice](en_gum-feat-Voice.html)

## Relations

[acl](en_gum-dep-acl.html) – [acl:relcl](en_gum-dep-acl-relcl.html) – [advcl](en_gum-dep-advcl.html) – [advcl:relcl](en_gum-dep-advcl-relcl.html) – [advmod](en_gum-dep-advmod.html) – [amod](en_gum-dep-amod.html) – [appos](en_gum-dep-appos.html) – [aux](en_gum-dep-aux.html) – [aux:pass](en_gum-dep-aux-pass.html) – [case](en_gum-dep-case.html) – [cc](en_gum-dep-cc.html) – [cc:preconj](en_gum-dep-cc-preconj.html) – [ccomp](en_gum-dep-ccomp.html) – [compound](en_gum-dep-compound.html) – [compound:prt](en_gum-dep-compound-prt.html) – [conj](en_gum-dep-conj.html) – [cop](en_gum-dep-cop.html) – [csubj](en_gum-dep-csubj.html) – [csubj:outer](en_gum-dep-csubj-outer.html) – [csubj:pass](en_gum-dep-csubj-pass.html) – [dep](en_gum-dep-dep.html) – [det](en_gum-dep-det.html) – [det:predet](en_gum-dep-det-predet.html) – [discourse](en_gum-dep-discourse.html) – [dislocated](en_gum-dep-dislocated.html) – [expl](en_gum-dep-expl.html) – [fixed](en_gum-dep-fixed.html) – [flat](en_gum-dep-flat.html) – [goeswith](en_gum-dep-goeswith.html) – [iobj](en_gum-dep-iobj.html) – [list](en_gum-dep-list.html) – [mark](en_gum-dep-mark.html) – [nmod](en_gum-dep-nmod.html) – [nmod:poss](en_gum-dep-nmod-poss.html) – [nmod:unmarked](en_gum-dep-nmod-unmarked.html) – [nsubj](en_gum-dep-nsubj.html) – [nsubj:outer](en_gum-dep-nsubj-outer.html) – [nsubj:pass](en_gum-dep-nsubj-pass.html) – [nummod](en_gum-dep-nummod.html) – [obj](en_gum-dep-obj.html) – [obl](en_gum-dep-obl.html) – [obl:agent](en_gum-dep-obl-agent.html) – [obl:unmarked](en_gum-dep-obl-unmarked.html) – [orphan](en_gum-dep-orphan.html) – [parataxis](en_gum-dep-parataxis.html) – [punct](en_gum-dep-punct.html) – [reparandum](en_gum-dep-reparandum.html) – [root](en_gum-dep-root.html) – [vocative](en_gum-dep-vocative.html) – [xcomp](en_gum-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 12146 sentences, 208331 tokens and 211920 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 29282 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 434 types of words that contain both letters and punctuation. Examples: 's, n't, ’s, 're, 'm, n’t, 've, 'll, 'd, ’re, ’m, U.S., ’ve, Mr., ’d, e.g., ’ll, L'Enfant, th-, al., w-, St., etc., c., d-, n-, non-avian, i.e., Dr., Mof-Ávvi, a.m., f-, pro-Beijing, s-, D.C., Mrs., b., d., Naqsh-e, cross-sectional, t-, L., W., a-, l-, m., ninety-nine, y-, A., J.</li>
</ul>

<ul>
<li>This corpus contains 3589 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 564 types of multi-word tokens. Examples: it's, don't, I'm, that's, you're, gonna, it’s, they're, didn't, there's, I've, we're, can't, don’t, he's, let's, I'll, I’m, doesn't, cannot, she's, that’s, what's, isn't, you'll, I'd, wasn't, won't, you'd, you’re, city's, didn’t, we've, we’re, you've, haven't, who's, couldn't, she’s, wanna, Warhol's, world's, can’t, wouldn't, you’ve, aren't, let’s, we'll, he’s, shouldn't.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 15 word types tagged as particles (PART): ', 's, a, do, n't, n`t, na, not, n’t, s, ta, the, to, ’, ’s</li>
</ul>

<ul>
<li>This corpus contains 47 lemmas tagged as pronouns (PRON): I, anybody, anyone, anything, everybody, everyone, everything, he, her, herself, himself, his, it, its, itself, my, myself, nobody, nothing, one, oneself, our, ourselves, s/he, self, she, somebody, someone, something, that, their, themselves, there, they, this, we, what, whatever, which, who, whoever, whose, whosoever, ye, you, your, yourself</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): Mat, a, all, another, any, both, each, either, every, half, neither, no, quite, some, such, that, the, this, une, what, whatever, which, yonder</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: that, this, what, whatever, which</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): be, can, could, do, get, have, may, might, must, ought, shall, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: be, do, get, have, will</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: is, was, can, are, will, 's, would, do, should, could</li>
    <li>VERB: have, know, said, think, had, has, are, want, let, get</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: being</li>
    <li>VERB: following, using, doing, growing, going, working, making, coming, living, getting</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be, have, do, get, 've, a</li>
    <li>VERB: have, do, make, get, know, go, see, take, say, find</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: been, being, having, done, doing, getting, had</li>
    <li>VERB: united, gon, going, called, doing, used, known, made, based, using</li>
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
      <li>PRON: she, her, herself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>PRON: s/he</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: he, his, him, himself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: it, its, itself, it's</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: are, were, have, 're, do, did, had, 've, ’re, was</li>
      <li>DET: these, those</li>
      <li>NOUN: people, years, things, days, guys, data, minutes, others, studies, children</li>
      <li>PRON: we, they, our, their, them, us, you, those, these, 's</li>
      <li>PROPN: States, Americans, Nations, skittles, Chathams, Pirates, Mets, Sox, Democrats, Olmec</li>
      <li>VERB-Fin: have, are, had, know, need, want, make, do, go, got</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>NOUN: clothes, species, thanks, pants, glasses, means, newspapers, 1960s, politics, jeans</li>
      <li>PROPN: Netherlands, Olympics, Commons, Paralympics, Philippines, Vans, Analytics, Andes, Forties, Maldives</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX: is, was, 's, has, do, 'm, did, ’s, had, does</li>
      <li>AUX-Fin: is, was, 's, has, do, 'm, did, ’s, had, does</li>
      <li>DET: this, that, half</li>
      <li>NOUN: time, day, way, life, world, year, city, today, work, example</li>
      <li>NUM: half, Seven, Three</li>
      <li>PRON: i, it, you, he, that, his, your, my, this, she</li>
      <li>PROPN: University, President, York, New, America, Warhol, figure, south, Scientology, north</li>
      <li>SYM: %</li>
      <li>VERB-Fin: know, said, think, has, have, had, is, 's, mean, want</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: it, you, me, them, us, him, her, 's, himself, yourself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: his, your, my, our, their, its, her, it's, he, it</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: i, you, it, we, he, they, she, me, him, s/he</li>
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

<ul>
  <li>Ind
    <ul>
      <li>DET: a, an</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: more, better, greater, larger, further, higher, lower, older, smaller, younger</li>
      <li>ADV: more, later, less, longer, earlier, better, further, sooner, slower, closer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: other, new, many, good, little, different, first, same, last, own</li>
      <li>ADV: really, well, back, still, again, too, away, much, probably, actually</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: most, best, least, largest, greatest, worst, highest, biggest, latest, smallest</li>
      <li>ADV: most, best, least, longest, fastest, foremost</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: no</li>
      <li>CCONJ: nor, neither</li>
      <li>INTJ: no</li>
      <li>PART: not, n't, n’t, n`t</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>INTJ: yeah, yes</li>
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
      <li>AUX-Fin: be, Do</li>
      <li>VERB-Fin: let, look, see, get, make, use, try, add, take, place</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: is, was, are, 's, do, were, have, has, 're, 'm</li>
      <li>VERB-Fin: have, know, said, think, had, has, are, want, is, 's</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: were, be</li>
      <li>VERB-Fin: become, collaborate, face, look, rise, rule, wear, were</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: was, were, did, had, 'd, ’d, got, where</li>
      <li>AUX-Part: been, done, had</li>
      <li>VERB-Fin: said, had, got, came, made, took, went, was, wanted, thought</li>
      <li>VERB-Part: united, called, used, known, made, based, done, given, got, seen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: is, are, 's, do, have, has, 're, 'm, ’s, 've</li>
      <li>AUX-Part: being, having, doing, getting</li>
      <li>VERB-Fin: have, know, think, has, are, want, is, 's, mean, need</li>
      <li>VERB-Part: gon, going, doing, using, trying, including, getting, making, looking, taking</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: called, known, based, used, made, given, born, found, done, taken</li>
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
      <li>DET: the, a, an</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: then, here, there</li>
      <li>DET: this, that, these, those, such, yonder</li>
      <li>PRON: there, that, this, those, these</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: itself, themselves, himself, yourself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: some, all, any, every, another, each, both, half, such, Mat</li>
      <li>PRON: something, anything, someone, anyone, somebody, anybody</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: when, how, why, where, whither, whenever</li>
      <li>DET: which, what, whatever</li>
      <li>PRON: what, who, which, whatever, Whoever, whose</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: no, neither</li>
      <li>PRON: nothing, one, nobody</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: i, it, you, we, he, they, his, your, my, she</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>DET: each</li>
      <li>PRON: one</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: where, how, why, when, whenever, wherever, however</li>
      <li>DET: what, whatever</li>
      <li>PRON: that, which, who, what, whatever, whom, whose, Whosoever, whoever, wish</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: all, both, each, every</li>
      <li>PRON: everything, everyone, everybody</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: 1960s, 1970s, 1950s, 1980s, 1990s, 1830s, 1920s, 1930s, 1940s, 2000s</li>
      <li>NUM: one, two, 1, three, 2, 3, four, 4, five, 10</li>
      <li>PROPN: EIGHT, One</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADV: half</li>
      <li>DET: half</li>
      <li>NOUN: half, quarter, third, thirds, quarters, fifths, halves, hundredths, millionth, tenth</li>
      <li>NUM: 7.2, 1.5, 6.8, 2.0, half, 1.3, 1.4, 11.5, 2.3, 4.0</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADV: once, twice</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: first, second, third, 19th, fourth, 20th, fifth, 30th, 3rd, 10th</li>
      <li>ADV: first, second, third, 135th, Fifth, Fourth, 15th, sixth</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: his, your, my, our, their, its, her, whose, yours, mine</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: himself, yourself, themselves, itself, myself, herself, ourselves</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: 'm, do, was, have, 've, am, are, did, 're, ’m</li>
      <li>PRON: i, we, my, our, me, us, 's, myself, ’s, ourselves</li>
      <li>VERB-Fin: have, think, know, mean, thank, had, want, got, thought, feel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: do, 're, are, did, have, be, ’re, 've, were, ’ve</li>
      <li>PRON: you, your, yourself, yours, ya, y', ye</li>
      <li>VERB-Fin: know, let, have, get, see, want, look, make, take, use</li>
      <li>VERB-Inf: see, let, Describe, do, get, continue, go, use, Discuss, Explain</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: is, was, 's, are, were, has, ’s, had, have, does</li>
      <li>PRON: it, he, they, his, she, their, her, them, its, him</li>
      <li>VERB-Fin: said, has, are, have, had, is, 's, says, comes, came</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: OK, US, Jr., U.</li>
          <li>ADP: vs., vs</li>
          <li>ADV: e.g., i.e., c., ca., PS, approx.</li>
          <li>INTJ: OK</li>
          <li>NOUN: etc., TV, a.m., GIS, DNA, p., p.m., No., Ph.D., DAB</li>
          <li>PROPN: U.S., US, NASA, Mr., NATO, USI, DH, CC, St., Dr.</li>
          <li>VERB-Part: b., d., div., m.</li>
          <li>X: al., Mlle., P.S.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADJ: such</li>
          <li>ADV: prior</li>
          <li>VERB-Part: according</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADJ: more, less, fewer</li>
          <li>ADP: of, at, up, in</li>
          <li>ADV: as, more, less, instead, just, close</li>
          <li>DET: all</li>
          <li>NOUN: kind, sort</li>
          <li>PRON: that</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: as</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: each</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADJ: such</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: National</li>
          <li>ADP: x</li>
          <li>ADV: Ne, pas</li>
          <li>DET: Une</li>
          <li>NOUN: Comédie</li>
          <li>PROPN: de, Cérebro, Escola, do, et, Catarin, Federal, Jim, Jules, La</li>
          <li>PUNCT: !, ,, -, ?, “, ”</li>
          <li>SYM: 33A, 56A</li>
          <li>X: de, alcalde, 樋口, Ciao, Información, Montejo, Módulo, Palacio, Paseo, Turística</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Combi
        <ul>
          <li>ADJ: 19th, 20th, 30th, 3rd, 10th, 21st, 17th, 2nd, 33rd, 50th</li>
          <li>ADV: 135th, 15th</li>
          <li>NOUN: 1960s, 1970s, 1950s, 1980s, 1990s, 1830s, 1920s, 1930s, 1940s, 2000s</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 1, 2, 3, 4, 10, 6, 5, 20, 15, 7</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: II, I, IV, III, VI, XIV, XV, XVII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: first, second, third, fourth, fifth, seventh, ninth, sixth, tenth</li>
          <li>ADV: first, once, second, twice, half, third, Fifth, Fourth, sixth</li>
          <li>DET: half</li>
          <li>NOUN: half, quarter, third, thirds, quarters, fifths, halves, hundredths, millionth, tenth</li>
          <li>NUM: one, two, three, four, five, six, ten, million, twenty, seven</li>
          <li>PROPN: EIGHT, One</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Coll
        <ul>
          <li>PART: ta</li>
          <li>PRON: em, ya, ’em</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>INTJ: hmm, Hmmm, Wow-eee, eee</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>SCONJ: cause, cuz</li>
          <li>VERB: gon, wan, ai</li>
          <li>VERB-Fin: wan, ai</li>
          <li>VERB-Inf: wan</li>
          <li>VERB-Part: gon</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: residential, 2D, I.=, Water, completed, crowed, digital, first, flashest, late</li>
          <li>ADP: on, to, of, With, a, as, fro, from, in, than</li>
          <li>ADV: aka, all, before, Non, p, really, them, then, alr-, any</li>
          <li>AUX-Fin: are, is, can, ll, was, will, get, has, s, were</li>
          <li>AUX-Inf: be</li>
          <li>AUX-Part: been</li>
          <li>CCONJ: and</li>
          <li>DET: a, an, on, some, the, to</li>
          <li>INTJ: y-, Ca-, Ro-, T-, alreet, alroot, f-, n-, plo-, reve-</li>
          <li>NOUN: lotos, etc, per, type, dodge, fisherman, kind, order, thing, while</li>
          <li>NUM: 1, 6:00, fiftyfive, five, one</li>
          <li>PART: s, 's, do, the, not</li>
          <li>PRON: em, it, you, i, it's, t, we, ya, She, Who</li>
          <li>PROPN: sea, skittles, #langu, American, Chatnam, Fla., Hutter, JOHN, Oija, Ouiji</li>
          <li>PUNCT: ", -, ., ,, [, |, ’</li>
          <li>SCONJ: cuz, cause, despite, that</li>
          <li>VERB: dwibbling, got, Pre, questi, se, set, understand, United, Untied, address</li>
          <li>VERB-Fin: set, address, begun, belidve, belie-, beraded, cause, construe, contribute, counteracts</li>
          <li>VERB-Ger: leading, recurring, traightening</li>
          <li>VERB-Inf: understand, breath, experience, fall, happen, loose, makke, recieve, to, understan-</li>
          <li>VERB-Part: dwibbling, got, United, Untied, charged, deeping, disappeared, exper-, food, going</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: be.</li>
</ul>

<ul>
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, do, can, will, would, should, could, may, must, might, shall.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON-Nom (3)</li>
      <li>VERB-Fin--NOUN (2008)</li>
      <li>VERB-Fin--PRON (750)</li>
      <li>VERB-Fin--PRON-Nom (3720)</li>
      <li>VERB-Ger--NOUN (17)</li>
      <li>VERB-Ger--PRON-Nom (6)</li>
      <li>VERB-Inf--NOUN (445)</li>
      <li>VERB-Inf--PRON (168)</li>
      <li>VERB-Inf--PRON-Nom (1543)</li>
      <li>VERB-Part--NOUN (351)</li>
      <li>VERB-Part--PRON (113)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (1009)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (3009)</li>
      <li>VERB-Fin--PRON (250)</li>
      <li>VERB-Fin--PRON-Acc (600)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Ger--NOUN (417)</li>
      <li>VERB-Ger--PRON (18)</li>
      <li>VERB-Ger--PRON-Acc (33)</li>
      <li>VERB-Inf--NOUN (2151)</li>
      <li>VERB-Inf--PRON (322)</li>
      <li>VERB-Inf--PRON-Acc (466)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Part--NOUN (1111)</li>
      <li>VERB-Part--PRON (112)</li>
      <li>VERB-Part--PRON-Acc (140)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (39)</li>
      <li>VERB-Fin--PRON-Acc (140)</li>
      <li>VERB-Ger--NOUN (5)</li>
      <li>VERB-Ger--PRON (2)</li>
      <li>VERB-Ger--PRON-Acc (4)</li>
      <li>VERB-Inf--NOUN (51)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (72)</li>
      <li>VERB-Part--NOUN (9)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (24)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 75 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: find yourself, find himself, call themselves, find myself, force yourself, give yourself, lick themselves, proclaim himself, teach himself, ask yourself, assert himself, associate itself, attach itself, better myself, bind ourselves, bring myself, bring themselves, buy myself, call myself, coin myself, comfort yourself, confine ourselves, confine yourself, convince yourself, declare himself, declare myself, devote himself, discover herself, distinguish himself, distinguish itself, establish herself, exalt itself, expose yourself, feel himself, find themselves, fling themselves, get themselves, give themselves, go yourself, good yourself, govern himself, haul themselves, infect themselves, introduce themselves, kid himself, leave yourself, maintain himself, make herself, make themselves, make yourself</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>nmod:poss</a>, <a>nmod:unmarked</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:unmarked</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
