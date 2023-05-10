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
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Siyao Peng, Amir Zeldes.

Repository: [UD_English-GUM](https://github.com/UniversalDependencies/UD_English-GUM)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_gum212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-NC-SA 4.0

Genre: academic, blog, fiction, government, news, nonfiction, social, spoken, web, wiki

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



GUM, the Georgetown University Multilayer corpus, is an open source collection of richly annotated texts from multiple text types. The corpus is collected and expanded by students as part of the curriculum in the course LING-367 "Computational Corpus Linguistics" at Georgetown University. The selection of text types is meant to represent different communicative purposes, while coming from sources that are readily and openly available (usually Creative Commons licenses), so that new texts can be annotated and published with ease.

The dependencies in the corpus up to GUM version 5 were originally annotated using Stanford Typed Depenencies (de Marneffe & Manning 2013) and converted automatically to UD using DepEdit (https://gucorpling.org/depedit/). The rule-based conversion took into account gold entity annotations found in other annotation layers of the GUM corpus (e.g. entity annotations), and has since been corrected manually in native UD. The original conversion script used can found in the GUM build bot code from version 5, available from the (non-UD) GUM repository. Documents from version 6 of GUM onwards were annotated directly in UD, and subsequent manual error correction to all GUM data has also been done directly using the UD guidelines. Enhanced dependencies were added semi-automatically from version 7.1 of the corpus. For more details see the [corpus website](https://gucorpling.org/gum/).

## Acknowledgments

GUM annotation team (so far - thanks for participating!)

Adrienne Isaac, Akitaka Yamada, Alex Giorgioni, Alexandra Berends, Alexandra Slome, Amani Aloufi, Amber Hall, Amelia Becker, Andrea Price, Andrew O'Brien, Anna Runova, Anne Butler, Arianna Janoff, Aryaman Arora, Ayan Mandal, Aysenur Sagdic, Bertille Baron, Bradford Salen, Brandon Tullock, Brent Laing, Candice Penelton, Charlie Dees, Chenyue Guo, Colleen Diamond, Connor O'Dwyer, Cristina Lopez, Dan Simonson, Derek Reagan, Didem Ikizoglu, Edwin Ko, Emile Zahr, Emily Pace, Emma Manning, Ethan Beaman, Felipe De Jesus, Han Bu, Hana Altalhi, Hang Jiang, Hannah Wingett, Hanwool Choe, Hassan Munshi, Helen Dominic, Ho Fai Cheng, Hortensia Gutierrez, Jakob Prange, James Maguire, Janine Karo, Jehan al-Mahmoud, Jemm Excelle Dela Cruz, Jessica Cusi, Jessica Kotfila, Joaquin Gris Roca, John Chi, Jongbong Lee, Juliet May, Jungyoon Koh, Katarina Starcevic, Katelyn MacDougald, Katherine Vadella, Khalid Alharbi, Lara Bryfonski, Lauren Levine, Leah Northington, Lindley Winchester, Linxi Zhang, Siyao Peng, Lucia Donatelli, Luke Gessler, Mackenzie Gong, Margaret Anne Rowe, Margaret Borowczyk, Maria Stoianova, Mariko Uno, Mary Henderson, Maya Barzilai, Md. Jahurul Islam, Michael Kranzlein, Michaela Harrington, Minnie Annan, Mitchell Abrams, Mohammad Ali Yektaie, Naomee-Minh Nguyen, Negar Siyari, Nicholas Mararac, Nicholas Workman, Nicole Steinberg, Nitin Venkateswaran, Phoebe Fisher, Rachel Thorson, Rebecca Childress, Rebecca Farkas, Riley Breslin Amalfitano, Rima Elabdali, Robert Maloney, Ruizhong Li, Ryan Mannion, Ryan Murphy, Sakol Suethanapornkul, Sarah Bellavance, Sasha Slone, Sean Macavaney, Sean Simpson, Seyma Toker, Shane Quinn, Shannon Mooney, Shelby Lake, Shira Wein, Sichang Tu, Siddharth Singh, Siyu Liang, Stephanie Kramer, Sylvia Sierra, Talal Alharbi, Tatsuya Aoyama, Timothy Ingrassia, Trevor Adriaanse, Ulie Xu, Wai Ching Leung, Wenxi Yang, Xiaopei Wu, Yang Liu, Yi-Ju Lin, Yifu Mu, Yilun Zhu, Yingzhu Chen, Yiran Xu, Young-A Son, Yu-Tzu Chang, Yuhang Hu, Yunjung Ku, Yushi Zhao, Zhuosi Luo, Zhuxin Wang, Amir Zeldes

... and other annotators who wish to remain anonymous!

## References

As a scholarly citation for the corpus in articles, please use this paper:

* Zeldes, Amir (2017) "The GUM Corpus: Creating Multilayer Resources in the Classroom". Language Resources and Evaluation 51(3), 581–612.

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


# Statistics of UD English GUM

## POS Tags

[ADJ](en_gum-pos-ADJ.html) – [ADP](en_gum-pos-ADP.html) – [ADV](en_gum-pos-ADV.html) – [AUX](en_gum-pos-AUX.html) – [CCONJ](en_gum-pos-CCONJ.html) – [DET](en_gum-pos-DET.html) – [INTJ](en_gum-pos-INTJ.html) – [NOUN](en_gum-pos-NOUN.html) – [NUM](en_gum-pos-NUM.html) – [PART](en_gum-pos-PART.html) – [PRON](en_gum-pos-PRON.html) – [PROPN](en_gum-pos-PROPN.html) – [PUNCT](en_gum-pos-PUNCT.html) – [SCONJ](en_gum-pos-SCONJ.html) – [SYM](en_gum-pos-SYM.html) – [VERB](en_gum-pos-VERB.html) – [X](en_gum-pos-X.html)

## Features

[Abbr](en_gum-feat-Abbr.html) – [Case](en_gum-feat-Case.html) – [Definite](en_gum-feat-Definite.html) – [Degree](en_gum-feat-Degree.html) – [Foreign](en_gum-feat-Foreign.html) – [Gender](en_gum-feat-Gender.html) – [Mood](en_gum-feat-Mood.html) – [Number](en_gum-feat-Number.html) – [NumForm](en_gum-feat-NumForm.html) – [NumType](en_gum-feat-NumType.html) – [Person](en_gum-feat-Person.html) – [Polarity](en_gum-feat-Polarity.html) – [Poss](en_gum-feat-Poss.html) – [PronType](en_gum-feat-PronType.html) – [Reflex](en_gum-feat-Reflex.html) – [Tense](en_gum-feat-Tense.html) – [Typo](en_gum-feat-Typo.html) – [VerbForm](en_gum-feat-VerbForm.html) – [Voice](en_gum-feat-Voice.html)

## Relations

[acl](en_gum-dep-acl.html) – [acl:relcl](en_gum-dep-acl-relcl.html) – [advcl](en_gum-dep-advcl.html) – [advcl:relcl](en_gum-dep-advcl-relcl.html) – [advmod](en_gum-dep-advmod.html) – [amod](en_gum-dep-amod.html) – [appos](en_gum-dep-appos.html) – [aux](en_gum-dep-aux.html) – [aux:pass](en_gum-dep-aux-pass.html) – [case](en_gum-dep-case.html) – [cc](en_gum-dep-cc.html) – [cc:preconj](en_gum-dep-cc-preconj.html) – [ccomp](en_gum-dep-ccomp.html) – [compound](en_gum-dep-compound.html) – [compound:prt](en_gum-dep-compound-prt.html) – [conj](en_gum-dep-conj.html) – [cop](en_gum-dep-cop.html) – [csubj](en_gum-dep-csubj.html) – [csubj:outer](en_gum-dep-csubj-outer.html) – [csubj:pass](en_gum-dep-csubj-pass.html) – [dep](en_gum-dep-dep.html) – [det](en_gum-dep-det.html) – [det:predet](en_gum-dep-det-predet.html) – [discourse](en_gum-dep-discourse.html) – [dislocated](en_gum-dep-dislocated.html) – [expl](en_gum-dep-expl.html) – [fixed](en_gum-dep-fixed.html) – [flat](en_gum-dep-flat.html) – [goeswith](en_gum-dep-goeswith.html) – [iobj](en_gum-dep-iobj.html) – [list](en_gum-dep-list.html) – [mark](en_gum-dep-mark.html) – [nmod](en_gum-dep-nmod.html) – [nmod:npmod](en_gum-dep-nmod-npmod.html) – [nmod:poss](en_gum-dep-nmod-poss.html) – [nmod:tmod](en_gum-dep-nmod-tmod.html) – [nsubj](en_gum-dep-nsubj.html) – [nsubj:outer](en_gum-dep-nsubj-outer.html) – [nsubj:pass](en_gum-dep-nsubj-pass.html) – [nummod](en_gum-dep-nummod.html) – [obj](en_gum-dep-obj.html) – [obl](en_gum-dep-obl.html) – [obl:agent](en_gum-dep-obl-agent.html) – [obl:npmod](en_gum-dep-obl-npmod.html) – [obl:tmod](en_gum-dep-obl-tmod.html) – [orphan](en_gum-dep-orphan.html) – [parataxis](en_gum-dep-parataxis.html) – [punct](en_gum-dep-punct.html) – [reparandum](en_gum-dep-reparandum.html) – [root](en_gum-dep-root.html) – [vocative](en_gum-dep-vocative.html) – [xcomp](en_gum-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 10761 sentences, 184653 tokens and 187416 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 26411 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 378 types of words that contain both letters and punctuation. Examples: 's, n't, ’s, 're, 'm, n’t, 've, 'll, 'd, ’re, U.S., ’ve, ’m, e.g., Mr., ’d, ’ll, L'Enfant, al., th-, w-, St., c., d-, n-, non-avian, Mof-Ávvi, a.m., etc., i.e., pro-Beijing, f-, d., s-, D.C., Naqsh-e, b., cross-sectional, t-, L., Mrs., m., y-, A., Dr., J., Ph.D., Vava'u, W., a-</li>
</ul>

<ul>
<li>This corpus contains 2763 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 510 types of multi-word tokens. Examples: it's, don't, I'm, that's, gonna, didn't, it’s, I've, there's, can't, don’t, let's, I'll, he's, doesn't, I’m, cannot, what's, she's, that’s, won't, you'll, city's, haven't, wasn't, you'd, couldn't, she’s, we've, didn’t, isn't, wanna, who's, world's, I'd, can’t, wouldn't, you've, you’ve, let’s, Galois', aren't, Dalton’s, Warhol's, doesn’t, we'd, won’t, I’d, I’ve, he’s.</li>
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
<li>This corpus contains 49 lemmas tagged as pronouns (PRON): I, anybody, anyone, anything, everybody, everyone, everything, he, her, herself, himself, his, it, its, itself, mine, my, myself, nobody, nothing, one, oneself, our, ourselves, s/he, self, she, somebody, someone, something, that, their, themselves, there, they, this, we, what, whatever, which, who, whoever, whose, whosoever, ye, you, your, yours, yourself</li>
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
    <li>AUX: is, was, can, are, will, 's, would, do, were, should</li>
    <li>VERB: have, know, said, are, has, is, had, think, want, get</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: being, having, getting</li>
    <li>SCONJ: including, regarding</li>
    <li>VERB: using, including, following, making, doing, according, growing, taking, going, getting</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be, have, do, get, 've, a</li>
    <li>VERB: have, do, make, get, know, see, go, take, say, find</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: been</li>
    <li>VERB: united, gon, going, called, known, used, based, made, doing, done</li>
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
      <li>AUX-Fin: are, were, have, 're, do, will, did, had, can, ’re</li>
      <li>DET: these, those</li>
      <li>NOUN: people, years, things, guys, data, days, studies, minutes, children, months</li>
      <li>PRON: we, they, their, our, them, us, you, those, these, 's</li>
      <li>PROPN: States, Americans, Nations, skittles, Chathams, Mets, Netherlands, Sox, Democrats, Olmec</li>
      <li>VERB-Fin: have, are, had, know, need, did, were, want, got, do</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: national, International, Democratic, New, American, Creative, Red, Civic, Main, Open</li>
      <li>ADV: Always, Little, Loud, Out, Too, Truly, northwest, south</li>
      <li>AUX: is, was, 's, has, do, 'm, did, had, ’s, 're</li>
      <li>AUX-Fin: is, was, 's, has, do, 'm, did, had, ’s, 're</li>
      <li>DET: this, that, half</li>
      <li>NOUN: time, day, way, city, world, year, today, life, work, example</li>
      <li>NUM: half, Seven, Three</li>
      <li>PRON: i, it, you, he, his, my, your, that, this, she</li>
      <li>PROPN: New, President, University, York, America, figure, north, Scientology, south, Warhol</li>
      <li>PUNCT: point</li>
      <li>SYM: %</li>
      <li>VERB-Fin: said, know, has, is, have, think, had, 's, was, want</li>
      <li>VERB-Ger: Concerning, Talking</li>
      <li>VERB-Inf: Avoid, Ditch, Hydrodynamica, Talk, Write</li>
      <li>VERB-Part: United, Combined, Protected, Rated</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: it, you, me, them, him, us, her, 's, himself, yourself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: his, my, your, their, our, its, her, it's, yours, he</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: i, you, it, we, he, they, she, me, them, him</li>
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
      <li>ADJ: more, better, greater, larger, further, higher, lower, smaller, easier, less</li>
      <li>ADV: more, later, less, longer, earlier, better, further, sooner, slower, Lesser</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: other, many, new, good, little, first, different, same, last, own</li>
      <li>ADV: really, well, back, still, too, again, away, much, all, probably</li>
      <li>DET: all, Some</li>
      <li>PUNCT: —</li>
      <li>SCONJ: such, like</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: most, best, least, largest, highest, greatest, worst, biggest, latest, smallest</li>
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
      <li>ADJ: universal, non-avian, unknown, unlikely, unable, unprecedented, unfamiliar, unconscious, uncertain, unclear</li>
      <li>ADV: never, no, unfortunately, nowhere, Ne, pas, unambiguously, unanimously, unawares, uncertainly</li>
      <li>DET: no</li>
      <li>INTJ: no</li>
      <li>NOUN: discomfort, non-realism, none, non-art, non-fiction, non-locals, non-philosophers, non-proliferation, nowhere</li>
      <li>PART: not, n't, n’t, n`t</li>
      <li>PRON: nothing</li>
      <li>PROPN: Non-Proliferation, pas</li>
      <li>VERB-Fin: dismounted, Uncover, unclenched, uncovered</li>
      <li>VERB-Inf: undo, disband, disentangle</li>
      <li>VERB-Part: uncovered, disbanded</li>
      <li>X: no</li>
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
      <li>AUX-Fin: be</li>
      <li>VERB-Fin: let, see, look, make, get, use, add, try, place, take</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: is, was, are, 's, do, were, has, have, 're, 'm</li>
      <li>VERB-Fin: have, know, said, are, has, is, had, think, want, 's</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: be</li>
      <li>VERB-Fin: collaborate, do, look, rise, wear</li>
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
      <li>AUX-Part: been</li>
      <li>VERB-Fin: said, had, was, got, came, did, made, took, went, wanted</li>
      <li>VERB-Part: united, called, known, used, based, made, done, given, seen, taken</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: is, are, 's, do, has, have, 're, 'm, ’s, 've</li>
      <li>VERB-Fin: have, know, are, has, is, think, want, 's, mean, need</li>
      <li>VERB-Part: gon, going, doing, trying, getting, coming, looking, working, taking, talking</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: used, called, known, made, found, taken, born, considered, done, allowed</li>
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
      <li>DET: the, a, an, another, no, both, either, neither, Mat, and</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: then, here, there</li>
      <li>DET: this, these, that, those, such</li>
      <li>PRON: there, that, this, those, these</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: itself, themselves, himself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: some, any, half</li>
      <li>PRON: something, anything, someone, anyone, somebody, anybody</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: when, how, why, where, whither, whenever</li>
      <li>DET: what, which, whatever</li>
      <li>PRON: what, who, which, whatever, Whoever, whose</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: nothing, one, nobody</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: i, it, you, we, he, they, his, my, your, she</li>
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
      <li>PRON: that, which, who, what, whom, whose, whatever, Whosoever, whoever, wish</li>
      <li>SCONJ: that</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: all, every, each, Alright</li>
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
      <li>NUM: one, two, 1, 2, three, 3, four, 10, 4, 6</li>
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
      <li>NUM: 7.2, 1.5, 6.8, 1.3, 1.4, 11.5, 2.3, 8.3, half, 1.6</li>
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
      <li>ADJ: first, second, third, 19th, fourth, 20th, fifth, 10th, 30th, seventh</li>
      <li>ADV: first, second, 135th, third, 15th, sixth</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: his, my, your, their, our, its, her, whose, theirs, yours</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: himself, themselves, yourself, itself, myself, herself, ourselves</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: 'm, do, was, have, 've, did, are, am, 're, were</li>
      <li>PRON: i, we, my, our, me, us, 's, myself, ’s, mine</li>
      <li>VERB-Fin: have, think, mean, know, thank, had, got, want, said, wanted</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: 're, do, are, did, have, be, were, ’re, 've, ’ve</li>
      <li>PRON: you, your, yourself, yours, ya, y', ye</li>
      <li>VERB-Fin: know, let, have, get, see, want, look, make, do, use</li>
      <li>VERB-Inf: see, let, get, Describe, go, make, use, Discuss, Do, Explain</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: is, was, are, 's, were, has, had, have, ’s, will</li>
      <li>PRON: it, he, they, his, she, their, her, them, its, him</li>
      <li>VERB-Fin: said, has, is, are, have, had, 's, was, says, came</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: US, OK, Jr.</li>
          <li>ADP: vs.</li>
          <li>ADV: e.g., i.e., c., ca., approx.</li>
          <li>INTJ: OK</li>
          <li>NOUN: a.m., etc., GIS, DNA, p., p.m., No., Ph.D., DAB, Ed.</li>
          <li>PROPN: US, U.S., NASA, NATO, Mr., USI, DH, St., DAB, UNESCO</li>
          <li>VERB-Part: b., d., div., m.</li>
          <li>X: al., Mlle.</li>
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
      <li>Digit
        <ul>
          <li>NUM: 1, 2, 3, 10, 4, 6, 5, 15, 7, 20</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: II, I, III, VI, XV, XVII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADV: once, twice, half</li>
          <li>DET: half</li>
          <li>NOUN: half, quarter, third, thirds, quarters, fifths, halves, hundredths, millionth, tenth</li>
          <li>NUM: one, two, three, four, five, six, million, ten, eight, seven</li>
          <li>PROPN: EIGHT, One</li>
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
          <li>ADJ: residential, I.=, Water, completed, digital, first, flashest, luxerious, non-Muslim, northeastern</li>
          <li>ADP: on, to, of, With, a, as, fro, from, in, than</li>
          <li>ADV: aka, all, before, Non, really, them, then, alr-, any, for</li>
          <li>AUX-Fin: are, is, can, was, get, has, ll, s, were, where</li>
          <li>AUX-Inf: be</li>
          <li>DET: a, an, on, some, the, to</li>
          <li>INTJ: y-, Ca-, Ro-, T-, alreet, alroot, f-, n-, plo-, reve-</li>
          <li>NOUN: lotos, etc, per, type, dodge, fisherman, kind, order, thing, while</li>
          <li>NUM: five, one</li>
          <li>PART: s, 's, do, the, not</li>
          <li>PRON: em, it, you, i, it's, we, ya, She, Who, he</li>
          <li>PROPN: sea, skittles, Chatnam, Hutter, JOHN, Tale, Trump, bd, june, petri</li>
          <li>PUNCT: ", -, ., [, |, ’</li>
          <li>SCONJ: cuz, cause, despite, that</li>
          <li>VERB: dwibbling, Pre, got, set, understand, 's, United, Untied, address, be</li>
          <li>VERB-Fin: set, 's, address, begun, cause, counteracts, cross-breeded, get, gives, got</li>
          <li>VERB-Ger: dwibbling, deeping, exper-, going, knowing, leading, recurring</li>
          <li>VERB-Inf: understand, be, breath, contribute, experience, loose, to, understan-, very</li>
          <li>VERB-Part: United, Untied, been, disappeared, dwibbling, food, got, know, motivated, raise</li>
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
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, do, can, will, would, should, may, could, must, might, shall, ought.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1816)</li>
      <li>VERB-Fin--PRON (670)</li>
      <li>VERB-Fin--PRON-ADP(to) (1)</li>
      <li>VERB-Fin--PRON-Nom (3359)</li>
      <li>VERB-Ger--NOUN (60)</li>
      <li>VERB-Ger--PRON-Gen (1)</li>
      <li>VERB-Ger--PRON-Nom (22)</li>
      <li>VERB-Inf--NOUN (404)</li>
      <li>VERB-Inf--PRON (149)</li>
      <li>VERB-Inf--PRON-Nom (1349)</li>
      <li>VERB-Part--NOUN (292)</li>
      <li>VERB-Part--PRON (94)</li>
      <li>VERB-Part--PRON-Nom (877)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (2713)</li>
      <li>VERB-Fin--PRON (219)</li>
      <li>VERB-Fin--PRON-Acc (520)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Ger--NOUN (881)</li>
      <li>VERB-Ger--PRON (27)</li>
      <li>VERB-Ger--PRON-Acc (80)</li>
      <li>VERB-Inf--NOUN (1877)</li>
      <li>VERB-Inf--PRON (280)</li>
      <li>VERB-Inf--PRON-Acc (384)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Part--NOUN (465)</li>
      <li>VERB-Part--PRON (74)</li>
      <li>VERB-Part--PRON-Acc (72)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (33)</li>
      <li>VERB-Fin--PRON-Acc (125)</li>
      <li>VERB-Ger--NOUN (8)</li>
      <li>VERB-Ger--PRON (2)</li>
      <li>VERB-Ger--PRON-Acc (12)</li>
      <li>VERB-Inf--NOUN (41)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (61)</li>
      <li>VERB-Part--NOUN (6)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (10)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 65 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: find yourself, find himself, call themselves, force yourself, give yourself, proclaim himself, teach himself, ask yourself, assert himself, associate itself, attach itself, better myself, bind ourselves, bring myself, bring themselves, buy myself, call myself, coin myself, comfort yourself, declare himself, declare myself, devote himself, discover herself, distinguish himself, distinguish itself, establish herself, exalt itself, expose yourself, feel himself, find themselves, fling themselves, get themselves, give themselves, go yourself, good yourself, govern himself, haul themselves, infect themselves, introduce themselves, maintain himself, make herself, make themselves, make yourself, pick herself, pledge ourselves, prepare yourself, pride themselves, prove itself, prove themselves, punish himself</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 16 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
