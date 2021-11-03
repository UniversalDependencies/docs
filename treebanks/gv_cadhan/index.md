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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgv_cadhan29)<br />
Download all treebanks: [UD 2.9](/#download)

License: GNU GPL 3.0

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

[Case](gv_cadhan-feat-Case.html) – [Definite](gv_cadhan-feat-Definite.html) – [Degree](gv_cadhan-feat-Degree.html) – [Form](gv_cadhan-feat-Form.html) – [Gender](gv_cadhan-feat-Gender.html) – [Mood](gv_cadhan-feat-Mood.html) – [Number](gv_cadhan-feat-Number.html) – [PartType](gv_cadhan-feat-PartType.html) – [Person](gv_cadhan-feat-Person.html) – [Polarity](gv_cadhan-feat-Polarity.html) – [Poss](gv_cadhan-feat-Poss.html) – [PronType](gv_cadhan-feat-PronType.html) – [Reflex](gv_cadhan-feat-Reflex.html) – [Tense](gv_cadhan-feat-Tense.html) – [Typo](gv_cadhan-feat-Typo.html)

## Relations

[acl](gv_cadhan-dep-acl.html) – [acl:relcl](gv_cadhan-dep-acl-relcl.html) – [advcl](gv_cadhan-dep-advcl.html) – [advmod](gv_cadhan-dep-advmod.html) – [amod](gv_cadhan-dep-amod.html) – [appos](gv_cadhan-dep-appos.html) – [case](gv_cadhan-dep-case.html) – [cc](gv_cadhan-dep-cc.html) – [ccomp](gv_cadhan-dep-ccomp.html) – [compound](gv_cadhan-dep-compound.html) – [conj](gv_cadhan-dep-conj.html) – [cop](gv_cadhan-dep-cop.html) – [csubj:cleft](gv_cadhan-dep-csubj-cleft.html) – [csubj:cop](gv_cadhan-dep-csubj-cop.html) – [dep](gv_cadhan-dep-dep.html) – [det](gv_cadhan-dep-det.html) – [discourse](gv_cadhan-dep-discourse.html) – [fixed](gv_cadhan-dep-fixed.html) – [flat](gv_cadhan-dep-flat.html) – [flat:foreign](gv_cadhan-dep-flat-foreign.html) – [iobj](gv_cadhan-dep-iobj.html) – [mark](gv_cadhan-dep-mark.html) – [nmod](gv_cadhan-dep-nmod.html) – [nmod:poss](gv_cadhan-dep-nmod-poss.html) – [nsubj](gv_cadhan-dep-nsubj.html) – [nummod](gv_cadhan-dep-nummod.html) – [obj](gv_cadhan-dep-obj.html) – [obl](gv_cadhan-dep-obl.html) – [obl:tmod](gv_cadhan-dep-obl-tmod.html) – [orphan](gv_cadhan-dep-orphan.html) – [parataxis](gv_cadhan-dep-parataxis.html) – [punct](gv_cadhan-dep-punct.html) – [reparandum](gv_cadhan-dep-reparandum.html) – [root](gv_cadhan-dep-root.html) – [vocative](gv_cadhan-dep-vocative.html) – [xcomp](gv_cadhan-dep-xcomp.html) – [xcomp:pred](gv_cadhan-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2319 sentences, 18502 tokens and 20630 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2936 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 178 types of words that contain both letters and punctuation. Examples: t', 'n, v', n', s', d', dt', 'er, m', 'ockle, Far-Ligganagh, mast', ard-valley, bee-jee, neu-ghlen, s'gilley, s'messey, 'neen, B', ard-er, bee'm, co-earroo, drogh-ourys, insh-jee, nee'm, s'keoiey, s'odjey, ver-ym, yn-ee, çheu-sthie, 'akin, 'eanishagh, 'eeacklyn, 'eill, 'er-ynsee, 'leih, 'nneen, 'oaid, 'reggyrt, 'uill, 'yss, Ard-whaiyl, Ben-hadad, Bun-towshanagh, C.F., D'aasmooinee, Ettyl-jee, Fer-ny-gherjagh, GAELIC-L, Iu-jee</li>
</ul>

<ul>
<li>This corpus contains 2079 multi-word tokens. On average, one multi-word token consists of 2.02 syntactic words.</li>
<li>There are 242 types of multi-word tokens. Examples: t'eh, echey, er, da, 'sy, ta'n, jeh, v'eh, da'n, orrym, dou, jeh'n, ayn, 'syn, lesh, rish, ayd, t'ad, va'n, urree, orroo, aym, t'ee, t'ou, veih'n, lhiam, ersyn, jeu, n'gholl, oc, cre'n, j'ee, ass, eck, eu, fo'n, roish, sy, d'eash, daue, dhyt, dooin, lhiat, orrin, ort, r'ee, ain, rhym, s'mie, shen-y-fa.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): N', Nar, cha, dy, nagh, ny</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as pronouns (PRON): ad, c'raad, c'red, cre, cuin, ee, eh, hen, hene, mayd, mee, ny, oo, ou, ow, quoi, shen, shid, shin, shiu, shoh</li>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as determiners (DET): chooilley, dagh, dty, dy, e, gagh, my, ny, nyn, ooilley, shen, shoh, yn</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: ny, shen, shoh</li>
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


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: e, ny, n'</li>
      <li>PRON: ee, ish</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: e, ny, n', n</li>
      <li>PRON: eh, eshyn</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: beggey, aegey, baney, seyrey, cammey, liauyrey, mooarey</li>
      <li>DET: ny, nyn</li>
      <li>PRON: ad, shin, shiu, adsyn, shiuish, mayd, shinyn</li>
      <li>VERB: bee-jee, insh-jee, Ettyl-jee, Iu-jee, Jeeagh-jee, gow-jee, moyllee'jee, saue-jee, shass-jee, vaikmayd</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: yn, y, e, ny, 'n, my, dty, n', dt', m'</li>
      <li>PRON: eh, mee, oo, ee, eshyn, mish, ou, uss, ish, m'</li>
      <li>VERB: cur, jean, lhig, tar, gow, immee, Verym, Smooinee, bee, insh</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: ny</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: yn, y, ny, 'n</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp,Sup
    <ul>
      <li>ADJ: share, smoo, smessey, sloo, s'gilley, s'messey, s'keoiey, s'odjey, messey, s'anvenkey</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: Cha, Nagh</li>
      <li>PART: cha, nagh, Nar</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: lhisagh, beagh, jinnagh, yinnagh, oddagh, darragh, Veagh, Chredjagh, Veign, Yiarrins</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: cur, jean, lhig, tar, gow, immee, Smooinee, bee, bee-jee, insh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: t', ta, ren, hug, va, vel, haink, v', nel, hooar</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: nee, foddee, bee, nod, vod, jean, ver, Verym, hig, vees</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB: ren, hug, va, haink, v', hooar, row, dooyrt, hie, Huitt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: t', ta, vel, nel, saillym, Dobbyr, Strooys, er</li>
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
      <li>DET: yn, y, ny, 'n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: shen, shoh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: eshyn, mish, uss, adsyn, ish, shiuish, shinyn</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: e, ny, my, dty, n', nyn, dt', m', n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: hene</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: my, nyn, m'</li>
      <li>PRON: mee, shin, mish, mayd, m', shinyn</li>
      <li>VERB: Verym, bee'm, nee'm, ver-ym, Chymneeym, Foddym, Fuirreeym, Gowym, Jeeaghym, Soieym</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: dty, dt', nyn</li>
      <li>PRON: oo, shiu, ou, uss, shiuish</li>
      <li>VERB: cur, jean, lhig, tar, gow, immee, Smooinee, bee, bee-jee, insh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>DET: e, ny, n', nyn, n</li>
      <li>PRON: eh, ad, ee, eshyn, adsyn, ish</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Form</a>
    <ul>
      <li>Ecl
        <ul>
          <li>NOUN: jeet, goyrt, vakin, dhost, droggal, drostey, duittym, garraghey, ghing, gionnaghey</li>
          <li>VERB: vel, nod, dug, ver, vod, daink, naik, Verym, darragh, dooar</li>
        </ul>
      </li>
      <li>Ecl,Emp
        <ul>
          <li>VERB: noddyms</li>
        </ul>
      </li>
      <li>Emp
        <ul>
          <li>NOUN: chione's</li>
          <li>VERB: beem's, beigns, bwoaill-yms, freill-yms, insh-yms</li>
        </ul>
      </li>
      <li>Emp,Len
        <ul>
          <li>NOUN: chree's, churryms, ghliooneen's, hons</li>
          <li>VERB: Yiarrins, oddins</li>
        </ul>
      </li>
      <li>HPref
        <ul>
          <li>NOUN: hoi, henneeyn, h-Ellanyn, h-Inshey, h-awin, h-ayr, haggle, henmyn, hingnyn, hinneenyn</li>
          <li>PROPN: h-Eearvee, h-Oarpey</li>
        </ul>
      </li>
      <li>Len
        <ul>
          <li>ADJ: vie, vooar, veg, Vretnagh, eer, gheyre, hwoaie, chionnit, ghlen, ghoo</li>
          <li>NOUN: ghooinney, chione, yannoo, chooid, chur, valley, ghoaill, gholl, vlein, akin</li>
          <li>NUM: ghaa, chied, cheead, Chiare</li>
          <li>PROPN: Ghaelg, Yee, Rank, Vannin, Vanninagh, Hostyn, Chashtal, Vart, Chargys, Chreest</li>
          <li>VERB: hug, va, haink, v', hooar, hie, Huitt, ghow, cheau, Hayrn</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Ad
        <ul>
          <li>PART: dy</li>
        </ul>
      </li>
      <li>Cmpl
        <ul>
          <li>PART: dy, nagh</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: ny</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>ADP: y</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>PART: cha, Ny, nagh, dy, N'</li>
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
          <li>NOUN: okley, charrrey</li>
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
      <li>VERB--NOUN (641)</li>
      <li>VERB--PRON (1682)</li>
      <li>VERB--PRON-ADP(er) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (567)</li>
      <li>VERB--PRON (154)</li>
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



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: bannee hene</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>acl:relcl</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>nmod:poss</a>, <a>obl:tmod</a>, <a>xcomp:pred</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>csubj</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
