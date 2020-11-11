---
layout: base
title:  'UD_Manx-Cadhan'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Manx Cadhan

Language: [Manx](/gv/index.html) (code: `gv`)<br/>
Family: Indo-European, Celtic

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Kevin Scannell.

Repository: [UD_Manx-Cadhan](https://github.com/UniversalDependencies/UD_Manx-Cadhan)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgv_cadhan27)<br />
Download all treebanks: [UD 2.7](/#download)

License: GNU GPLv3+

Genre: news, fiction, nonfiction, blog, social, wiki, web, bible

Questions, comments?
General annotation questions (either Manx-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Manx-Cadhan/issues).
If you want to collaborate, please contact [kscanne&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
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

This is the Cadhan Aonair UD treebank for Manx Gaelic,
created by Kevin Scannell.



The sentences in the treebank all come from a large web-crawled
corpus of Manx consisting of more than 8M words of text.
This corpus was segmented by sentences, shuffled, and then
300 random sentences were chosen to be tagged.
I believe that the web corpus is nearly comprehensive, which is to say
it contains virtually all non-trivial Manx language texts on the open web.
Therefore, the UD corpus is as close as possible to a “random sample”
of Manx on the web. As such,
[the Bible](http://bible.learnmanx.com/) is heavily represented,
but there are also quite a few sentences from modern sources such as the
[Manx Wikipedia](https://gv.wikipedia.org/),
news stories from
[Manx Radio](https://www.manxradio.com/),
blog posts,
translations of literature, etc.

All POS tags and dependency annotations in the initial release
were added manually. The upstream source code and datasets supporting
the treebank can be found [here](https://github.com/kscanne/gaelg).

Since there are only about 6k words total, we have not
performed a split into train/dev/test sets, following
[the recommendation](https://universaldependencies.org/release_checklist.html#data-split)
of the UD maintainers.

## Acknowledgments

I created the treebank while visiting Acadamh na hOllscolaíochta Gaeilge
in Carna, Co. na Gaillimhe as a Fulbright Scholar. All of the work was
done during the COVID-19 lockdown in Ireland.

I am grateful to the staff at the Acadamh in Carna for their hospitality
during my visit, to the Fulbright Program for the financial support
which made it possible, and to Saint Louis University for a
much-needed sabbatical leave.

Thanks also to Teresa Lynn and Colin Batchelor for their work on the
Irish and Scottish Gaelic treebanks, respectively. Since all three
Goidelic languages are grammatically very similar, I was able to
consult their work when deciding how to resolve tricky annotation problems.


# Statistics of UD Manx Cadhan

## POS Tags

[ADJ](gv_cadhan-pos-ADJ.html) – [ADP](gv_cadhan-pos-ADP.html) – [ADV](gv_cadhan-pos-ADV.html) – [AUX](gv_cadhan-pos-AUX.html) – [CCONJ](gv_cadhan-pos-CCONJ.html) – [DET](gv_cadhan-pos-DET.html) – [INTJ](gv_cadhan-pos-INTJ.html) – [NOUN](gv_cadhan-pos-NOUN.html) – [NUM](gv_cadhan-pos-NUM.html) – [PART](gv_cadhan-pos-PART.html) – [PRON](gv_cadhan-pos-PRON.html) – [PROPN](gv_cadhan-pos-PROPN.html) – [PUNCT](gv_cadhan-pos-PUNCT.html) – [SCONJ](gv_cadhan-pos-SCONJ.html) – [SYM](gv_cadhan-pos-SYM.html) – [VERB](gv_cadhan-pos-VERB.html) – [X](gv_cadhan-pos-X.html)

## Features

[Typo](gv_cadhan-feat-Typo.html)

## Relations

[acl](gv_cadhan-dep-acl.html) – [acl:relcl](gv_cadhan-dep-acl-relcl.html) – [advcl](gv_cadhan-dep-advcl.html) – [advmod](gv_cadhan-dep-advmod.html) – [amod](gv_cadhan-dep-amod.html) – [appos](gv_cadhan-dep-appos.html) – [case](gv_cadhan-dep-case.html) – [cc](gv_cadhan-dep-cc.html) – [ccomp](gv_cadhan-dep-ccomp.html) – [compound](gv_cadhan-dep-compound.html) – [conj](gv_cadhan-dep-conj.html) – [cop](gv_cadhan-dep-cop.html) – [csubj:cleft](gv_cadhan-dep-csubj-cleft.html) – [csubj:cop](gv_cadhan-dep-csubj-cop.html) – [dep](gv_cadhan-dep-dep.html) – [det](gv_cadhan-dep-det.html) – [discourse](gv_cadhan-dep-discourse.html) – [fixed](gv_cadhan-dep-fixed.html) – [flat](gv_cadhan-dep-flat.html) – [flat:foreign](gv_cadhan-dep-flat-foreign.html) – [iobj](gv_cadhan-dep-iobj.html) – [mark](gv_cadhan-dep-mark.html) – [nmod](gv_cadhan-dep-nmod.html) – [nsubj](gv_cadhan-dep-nsubj.html) – [nummod](gv_cadhan-dep-nummod.html) – [obj](gv_cadhan-dep-obj.html) – [obl](gv_cadhan-dep-obl.html) – [obl:tmod](gv_cadhan-dep-obl-tmod.html) – [orphan](gv_cadhan-dep-orphan.html) – [parataxis](gv_cadhan-dep-parataxis.html) – [punct](gv_cadhan-dep-punct.html) – [reparandum](gv_cadhan-dep-reparandum.html) – [root](gv_cadhan-dep-root.html) – [vocative](gv_cadhan-dep-vocative.html) – [xcomp](gv_cadhan-dep-xcomp.html) – [xcomp:pred](gv_cadhan-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 291 sentences, 5721 tokens and 6154 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 784 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 111 types of words that contain both letters and punctuation. Examples: t', 'n, v', s', n', dt', ard-valley, bee-jee, d', neu-ghlen, bee'm, insh-jee, mast', nee'm, ver-ym, yn-ee, 'ockle, 'uill, Ard-whaiyl, Ben-hadad, Bun-towshanagh, C.F., Ettyl-jee, Fer-ny-gherjagh, GAELIC-L, Lioar-lhaih, O'Hanlon, R.U., Southend-on-Sea, Thie-Lheihys, a.r.e., aa-hickyrys, aa-scrutaghey, ard-chooish, ard-er, ard-ooashley, ard-stiureyder, ard-voyrnagh, arrane-moyllee, babbanyn-tawlish, beem's, boayrd-gamman, braghtanyn-pronnag, bun-troggalys, bwoaill-yms, c'raad, c'red, cabbane-agglish, caghlaa-coamrey, cair-screeu</li>
</ul>

<ul>
<li>This corpus contains 403 multi-word tokens. On average, one multi-word token consists of 2.07 syntactic words.</li>
<li>There are 155 types of multi-word tokens. Examples: ta'n, 'sy, v'eh, echey, t'eh, da, jeh'n, t'ad, er, oc, va'n, veih'n, jeh, jeu, t'ou, ayn, da'n, rish, t'ee, 'syn, aym, cre'n, eu, shen-y-fa, sy, t'er, ain, cur-my-ner, lhiam, orroo, orrym, s'mie, aym's, diu, dou, eck, er-yn-oyr, jee, lesh, n'yannoo, riu, t'ayn, v'ad, daue, diuish, dt'ayr, er-lheh, gy-kione, orrin, rhyt's.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): cha, dy, nagh, ny, s'</li>
</ul>

<ul>
<li>This corpus contains 19 lemmas tagged as pronouns (PRON): ad, adsyn, c'raad, c'red, cre, cuin, ee, eh, hene, mayd, mee, oo, ou, ow, quoi, shen, shin, shiu, shoh</li>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as determiners (DET): chooilley, dagh, dty, dy, e, my, ny, nyn, ooilley, shen, shoh, y, yn</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: shen, shoh</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): she</li>
</ul>

<ul>
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
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: charrrey, okley</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: she.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (168)</li>
      <li>VERB--PRON (242)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (70)</li>
      <li>VERB--PRON (16)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>obl:tmod</a>, <a>xcomp:pred</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>csubj</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
