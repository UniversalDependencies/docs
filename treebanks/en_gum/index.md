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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_gum210)<br />
Download all treebanks: [UD 2.10](/#download)

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

Universal Dependencies syntax annotations from the GUM corpus (https://corpling.uis.georgetown.edu/gum/)



GUM, the Georgetown University Multilayer corpus, is an open source collection of richly annotated texts from multiple text types. The corpus is collected and expanded by students as part of the curriculum in the course LING-367 "Computational Corpus Linguistics" at Georgetown University. The selection of text types is meant to represent different communicative purposes, while coming from sources that are readily and openly available (usually Creative Commons licenses), so that new texts can be annotated and published with ease.

The dependencies in the corpus up to GUM version 5 were originally annotated using Stanford Typed Depenencies (de Marneffe & Manning 2013) and converted automatically to UD using DepEdit (https://corpling.uis.georgetown.edu/depedit/). The rule-based conversion took into account gold entity annotations found in other annotation layers of the GUM corpus (e.g. entity annotations), and has since been corrected manually in native UD. The original conversion script used can found in the GUM build bot code from version 5, available from the (non-UD) GUM repository. Documents from version 6 of GUM onwards were annotated directly in UD, and subsequent manual error correction to all GUM data has also been done directly using the UD guidelines. Enhanced dependencies were added semi-automatically from version 7.1 of the corpus. For more details see the [corpus website](https://corpling.uis.georgetown.edu/gum/).

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

[Abbr](en_gum-feat-Abbr.html) – [Case](en_gum-feat-Case.html) – [Definite](en_gum-feat-Definite.html) – [Degree](en_gum-feat-Degree.html) – [Gender](en_gum-feat-Gender.html) – [Mood](en_gum-feat-Mood.html) – [Number](en_gum-feat-Number.html) – [NumForm](en_gum-feat-NumForm.html) – [NumType](en_gum-feat-NumType.html) – [Person](en_gum-feat-Person.html) – [Polarity](en_gum-feat-Polarity.html) – [Poss](en_gum-feat-Poss.html) – [PronType](en_gum-feat-PronType.html) – [Reflex](en_gum-feat-Reflex.html) – [Tense](en_gum-feat-Tense.html) – [Typo](en_gum-feat-Typo.html) – [VerbForm](en_gum-feat-VerbForm.html) – [Voice](en_gum-feat-Voice.html)

## Relations

[acl](en_gum-dep-acl.html) – [acl:relcl](en_gum-dep-acl-relcl.html) – [advcl](en_gum-dep-advcl.html) – [advmod](en_gum-dep-advmod.html) – [amod](en_gum-dep-amod.html) – [appos](en_gum-dep-appos.html) – [aux](en_gum-dep-aux.html) – [aux:pass](en_gum-dep-aux-pass.html) – [case](en_gum-dep-case.html) – [cc](en_gum-dep-cc.html) – [cc:preconj](en_gum-dep-cc-preconj.html) – [ccomp](en_gum-dep-ccomp.html) – [compound](en_gum-dep-compound.html) – [compound:prt](en_gum-dep-compound-prt.html) – [conj](en_gum-dep-conj.html) – [cop](en_gum-dep-cop.html) – [csubj](en_gum-dep-csubj.html) – [csubj:pass](en_gum-dep-csubj-pass.html) – [dep](en_gum-dep-dep.html) – [det](en_gum-dep-det.html) – [det:predet](en_gum-dep-det-predet.html) – [discourse](en_gum-dep-discourse.html) – [dislocated](en_gum-dep-dislocated.html) – [expl](en_gum-dep-expl.html) – [fixed](en_gum-dep-fixed.html) – [flat](en_gum-dep-flat.html) – [goeswith](en_gum-dep-goeswith.html) – [iobj](en_gum-dep-iobj.html) – [list](en_gum-dep-list.html) – [mark](en_gum-dep-mark.html) – [nmod](en_gum-dep-nmod.html) – [nmod:npmod](en_gum-dep-nmod-npmod.html) – [nmod:poss](en_gum-dep-nmod-poss.html) – [nmod:tmod](en_gum-dep-nmod-tmod.html) – [nsubj](en_gum-dep-nsubj.html) – [nsubj:pass](en_gum-dep-nsubj-pass.html) – [nummod](en_gum-dep-nummod.html) – [obj](en_gum-dep-obj.html) – [obl](en_gum-dep-obl.html) – [obl:agent](en_gum-dep-obl-agent.html) – [obl:npmod](en_gum-dep-obl-npmod.html) – [obl:tmod](en_gum-dep-obl-tmod.html) – [orphan](en_gum-dep-orphan.html) – [parataxis](en_gum-dep-parataxis.html) – [punct](en_gum-dep-punct.html) – [reparandum](en_gum-dep-reparandum.html) – [root](en_gum-dep-root.html) – [vocative](en_gum-dep-vocative.html) – [xcomp](en_gum-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9130 sentences, 162227 tokens and 164396 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 22752 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 335 types of words that contain both letters and punctuation. Examples: 's, n't, ’s, 're, 'm, n’t, 've, 'll, 'd, U.S., ’re, ’ve, e.g., L'Enfant, ’d, ’ll, ’m, al., St., Mr., non-avian, Mof-Ávvi, c., etc., i.e., pro-Beijing, th-, w-, d-, d., Naqsh-e, cross-sectional, D.C., L., b., m., A., J., Mrs., Ph.D., Vava'u, W., a-, anti-establishment, e-mail, n-, re-elected, #istandwithahmed, No., S.</li>
</ul>

<ul>
<li>This corpus contains 2169 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 462 types of multi-word tokens. Examples: it's, don't, I'm, that's, gonna, didn't, it’s, I've, there's, don’t, can't, I'll, doesn't, cannot, he's, city's, you'll, haven't, she’s, won't, we've, what's, didn’t, that’s, wasn't, world's, you'd, I’m, isn't, she's, Galois', can’t, couldn't, wouldn't, you’ve, Dalton’s, Warhol's, aren't, doesn’t, who's, you've, I'd, won’t, I’d, he’s, people's, shouldn't, today's, we'll, country’s.</li>
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
<li>This corpus contains 40 lemmas tagged as pronouns (PRON): I, he, her, herself, himself, his, it, its, itself, mine, my, myself, one, oneself, our, ours, ourselves, s/he, self, she, that, their, theirs, themselves, there, they, this, we, what, whatever, which, who, whoever, whose, whosoever, ye, you, your, yours, yourself</li>
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
    <li>AUX: is, was, can, are, will, would, 's, do, were, should</li>
    <li>VERB: have, said, know, are, is, has, had, think, want, get</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: being, having, getting</li>
    <li>SCONJ: including, regarding</li>
    <li>VERB: using, following, including, making, according, doing, having, going, growing, taking</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be, have, do, get, 've, a</li>
    <li>VERB: have, make, do, get, go, know, see, take, say, find</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: been</li>
    <li>VERB: united, gon, used, known, called, going, based, made, given, done</li>
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
  <li>Masc
    <ul>
      <li>PRON: he, his, him, himself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: it, its, itself</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: are, were, have, 're, do, will, did, had, can, 've</li>
      <li>DET: these, those</li>
      <li>NOUN: people, years, things, guys, days, studies, minutes, months, children, languages</li>
      <li>PRON: we, they, their, our, them, us, you, those, these, 's</li>
      <li>PROPN: States, skittles, Americans, Nations, Chathams, Mets, Netherlands, Sox, Democrats, Olmec</li>
      <li>VERB-Fin: have, are, had, need, were, know, want, did, make, got</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: national, International, New, Democratic, American, Red, Civic, Creative, Open, Great</li>
      <li>ADV: Always, Little, Loud, Out, northwest, south</li>
      <li>AUX: is, was, 's, has, do, 'm, had, did, ’s, 're</li>
      <li>AUX-Fin: is, was, 's, has, do, 'm, had, did, ’s, 're</li>
      <li>DET: this, that</li>
      <li>NOUN: time, city, day, way, world, year, life, today, something, example</li>
      <li>NUM: half, Seven, Three</li>
      <li>PRON: i, it, you, he, his, my, she, this, that, her</li>
      <li>PROPN: New, University, York, President, Scientology, north, America, figure, Warhol, lee</li>
      <li>PUNCT: ?</li>
      <li>SYM: %</li>
      <li>VERB-Fin: said, is, has, know, have, had, think, was, want, 's</li>
      <li>VERB-Ger: Concerning, Talking</li>
      <li>VERB-Inf: Avoid, Ditch, Gospel, Hydrodynamica, Press, Protector, Talk, Tower, Wise, Write</li>
      <li>VERB-Part: United, Combined, Protected</li>
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
      <li>ADJ: more, better, greater, larger, further, higher, easier, later, smaller, younger</li>
      <li>ADV: more, later, less, longer, earlier, better, further, sooner, slower, Lesser</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: other, many, good, new, little, first, different, last, such, own</li>
      <li>ADV: really, well, back, still, too, again, away, much, all, often</li>
      <li>DET: Some, all</li>
      <li>PUNCT: —</li>
      <li>SCONJ: such, like</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: most, best, least, largest, highest, worst, greatest, biggest, latest, longest</li>
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
      <li>ADJ: non-avian, universal, unknown, unlikely, unable, unfamiliar, unprecedented, unclear, unconscious, unrelated</li>
      <li>ADV: never, no, unfortunately, nowhere, Ne, pas, unambiguously, unanimously, unawares, uncertainly</li>
      <li>DET: no</li>
      <li>INTJ: no</li>
      <li>NOUN: nothing, discomfort, non-art, non-fiction, non-locals, non-philosophers, none, nowhere</li>
      <li>PART: not, n't, n’t, n`t</li>
      <li>PROPN: Non-Proliferation, pas</li>
      <li>VERB-Fin: dismounted, Uncover, unclenched, uncovered</li>
      <li>VERB-Inf: undo, disentangle</li>
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
      <li>VERB-Fin: let, see, make, get, look, use, add, place, try, take</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: is, was, are, 's, do, were, has, have, 're, had</li>
      <li>VERB-Fin: have, said, are, know, is, has, had, think, want, was</li>
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
      <li>AUX-Fin: was, were, had, did, ’d, 'd, got, where</li>
      <li>AUX-Part: been</li>
      <li>VERB-Fin: said, had, was, came, made, did, took, got, thought, wanted</li>
      <li>VERB-Part: united, used, known, called, based, made, given, done, found, seen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: is, are, 's, do, has, have, 're, 'm, ’s, 've</li>
      <li>VERB-Fin: have, are, know, is, has, think, want, 's, need, says</li>
      <li>VERB-Part: gon, going, doing, getting, coming, trying, looking, making, taking, working</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: used, called, found, made, known, considered, taken, born, done, allowed</li>
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
      <li>DET: the, a, an, another, no, both, either, neither, Mat, Une</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: then, here, there</li>
      <li>DET: this, these, that, those, such</li>
      <li>PRON: there, this, that, those, these</li>
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
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: how, why, when, where, Whither</li>
      <li>DET: what, which, whatever</li>
      <li>PRON: what, who, which, whatever, Whoever, whom, whose</li>
      <li>SCONJ: when, how, where, why, whither</li>
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
      <li>NUM: one</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: how, where, why, when, wherever, Whenever, however</li>
      <li>PRON: that, which, who, what, whom, whose, whatever, Whosoever, whoever, wish</li>
      <li>SCONJ: where, when, that, how</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: all, every, each, Alright</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: one, two, 1, 2, three, 3, four, 6, 4, 10</li>
      <li>PROPN: EIGHT, One</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADV: half</li>
      <li>DET: half</li>
      <li>NOUN: half, quarter, third, millionth, quarters, tenth, thirds</li>
      <li>NUM: 1.5, 2.3, half, 1.3, 1.4, 1.6, 1.75, 15.16, 15.17, 2.0</li>
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
      <li>ADJ: first, second, third, 19th, fourth, 20th, fifth, 30th, 10th, 17th</li>
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
      <li>PRON: his, your, my, their, our, her, its, whose, myself, theirs</li>
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
      <li>AUX-Fin: 'm, do, was, have, did, 've, am, are, 're, were</li>
      <li>PRON: i, we, my, our, me, us, 's, myself, ourselves, Mine</li>
      <li>VERB-Fin: have, think, mean, know, had, want, got, said, thought, wanted</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: 're, do, are, did, have, ’re, were, ’ve, 've, 'd</li>
      <li>PRON: you, your, yourself, yours</li>
      <li>VERB-Fin: know, let, get, have, see, want, look, make, use, take</li>
      <li>VERB-Inf: see, let, Describe, get, go, make, use, Discuss, Explain, respond</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: is, was, are, 's, were, has, had, have, ’s, will</li>
      <li>PRON: it, he, they, his, she, their, her, its, them, him</li>
      <li>VERB-Fin: said, is, are, has, have, had, was, 's, says, came</li>
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
          <li>ADV: e.g., i.e., c., ca., approx., p.m.</li>
          <li>INTJ: OK</li>
          <li>NOUN: GIS, DNA, No., Ph.D., a.m., p., p.m., DAB, Ed., ROS</li>
          <li>PROPN: US, U.S., NASA, NATO, USI, DH, Mr., St., DAB, UNESCO</li>
          <li>VERB-Part: b., d., div., m.</li>
          <li>X: al., etc., Mlle., e.g.</li>
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
          <li>NUM: 1, 2, 3, 6, 4, 10, 5, 15, 7, 12</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: II, I, III, XV, XVII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADV: half</li>
          <li>DET: half</li>
          <li>NOUN: half</li>
          <li>NUM: one, two, three, four, five, six, million, ten, eight, twenty</li>
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
          <li>ADJ: I.=, first, non-Muslim, northeastern, online, others, philippine, signifcant, substantial, successfully</li>
          <li>ADP: on, of, to, With, a, as, fro, from, in, than</li>
          <li>ADV: aka, all, before, really, them, then, Non, any, for, litely</li>
          <li>AUX-Fin: are, can, is, was, has, ll, s, were, where, will</li>
          <li>AUX-Inf: be</li>
          <li>DET: a, an, on, some, the, to</li>
          <li>INTJ: alreet, alroot</li>
          <li>NOUN: lotos, dodge, per, F, bag, break, nation, self</li>
          <li>NUM: five</li>
          <li>PART: s, 's, do, the, not</li>
          <li>PRON: it, which, wish, ya</li>
          <li>PROPN: Chatnam, Hell, Tale, petri</li>
          <li>PUNCT: ", ., [, |</li>
          <li>SCONJ: cuz, despite, that</li>
          <li>VERB-Fin: set, 's, address, begun, cause, get, gives, has, insured, is</li>
          <li>VERB-Ger: deeping, going, leading, recurring</li>
          <li>VERB-Inf: be, breath, experience, very</li>
          <li>VERB-Part: Pre, been, completed, food, know, known, motivated, raise, reach, recommend</li>
          <li>X: etc</li>
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
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, do, will, can, would, should, may, could, might, must, shall, ought.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1732)</li>
      <li>VERB-Fin--NOUN-ADP(behind) (1)</li>
      <li>VERB-Fin--PRON (552)</li>
      <li>VERB-Fin--PRON-Nom (2796)</li>
      <li>VERB-Ger--NOUN (62)</li>
      <li>VERB-Ger--PRON (1)</li>
      <li>VERB-Ger--PRON-Nom (17)</li>
      <li>VERB-Inf--NOUN (419)</li>
      <li>VERB-Inf--PRON (140)</li>
      <li>VERB-Inf--PRON-Nom (1147)</li>
      <li>VERB-Part--NOUN (292)</li>
      <li>VERB-Part--PRON (74)</li>
      <li>VERB-Part--PRON-Nom (716)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (2464)</li>
      <li>VERB-Fin--PRON (141)</li>
      <li>VERB-Fin--PRON-Acc (436)</li>
      <li>VERB-Ger--NOUN (820)</li>
      <li>VERB-Ger--PRON (13)</li>
      <li>VERB-Ger--PRON-Acc (72)</li>
      <li>VERB-Inf--NOUN (1747)</li>
      <li>VERB-Inf--PRON (172)</li>
      <li>VERB-Inf--PRON-Acc (314)</li>
      <li>VERB-Part--NOUN (413)</li>
      <li>VERB-Part--PRON (55)</li>
      <li>VERB-Part--PRON-Acc (62)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (17)</li>
      <li>VERB-Fin--PRON-Acc (83)</li>
      <li>VERB-Ger--NOUN (6)</li>
      <li>VERB-Ger--PRON-Acc (9)</li>
      <li>VERB-Inf--NOUN (25)</li>
      <li>VERB-Inf--PRON-Acc (47)</li>
      <li>VERB-Part--NOUN (7)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (9)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 61 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: find yourself, find himself, call themselves, force yourself, give yourself, proclaim himself, teach himself, ask yourself, assert himself, associate itself, attach itself, bind ourselves, bring myself, bring themselves, buy myself, call myself, coin myself, comfort yourself, declare himself, declare myself, devote himself, discover herself, distinguish himself, distinguish itself, establish herself, exalt itself, expose yourself, feel himself, find themselves, fling themselves, get themselves, give themselves, go yourself, govern himself, haul themselves, infect themselves, introduce themselves, maintain himself, make herself, make themselves, make yourself, pick herself, pledge ourselves, prepare yourself, pride themselves, prove itself, prove themselves, punish himself, redesign itself, remind yourself</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
