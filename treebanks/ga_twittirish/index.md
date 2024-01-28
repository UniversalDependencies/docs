---
layout: base
title:  'UD_Irish-TwittIrish'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Irish TwittIrish

Language: [Irish](/ga/index.html) (code: `ga`)<br/>
Family: Indo-European, Celtic

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Lauren Cassidy, Teresa Lynn, Jennifer Foster, Sarah McGuinness.

Repository: [UD_Irish-TwittIrish](https://github.com/UniversalDependencies/UD_Irish-TwittIrish)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_twittirish213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: social

Questions, comments?
General annotation questions (either Irish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Irish-TwittIrish/issues).
If you want to collaborate, please contact [lauren&nbsp;•&nbsp;cassidy&nbsp;(æt)&nbsp;adaptcentre&nbsp;•&nbsp;ie; teresa&nbsp;•&nbsp;lynn&nbsp;(æt)&nbsp;adaptcentre&nbsp;•&nbsp;ie].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | not available |
| Features | not available |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

A Universal Dependencies treebank of 2596 tweets in modern Irish.



The TwittIrish treebank contains 2596 Irish language tweets from two corpora: 1297 tweets from the New Twitter Corpus [NTC] and 1299 tweets from the Lynn Twitter Corpus [LTC].

* NTC consists of 25000 tweets posted between 2010 and 2019 randomly sampled from a database of 14111 users who have tweeted in Irish.
* LTC consists of 1493 tweets posted between 2009 and 2014 randomly sampled from 950000 tweets by 8000 users. Lemmas and POS-tags were added to LTC a part of a PhD research project by Dr. Teresa Lynn at Dublin City University, Ireland (Lynn, 2016) (Lynn, Scannell and Maguire, 2015). The LTC data was further annotated with Code-Switching information (Lynn and Scannell, 2019). The LTC data can be found here: https://github.com/tlynn747/IrishTwitterPOS.

Irish language tweets were identified by Kevin Scannell as part of the Indigenous Tweets website project http://indigenoustweets.com/. Non-Irish tweets were filtered out using a simple character-trigram language identifier.

The conversion from the LTC annotation scheme to the UD annotation scheme was designed by Lauren Cassidy as part of an PhD project, supervised by Dr. Teresa Lynn and Dr. Jennifer Foster at Dublin City University, Ireland. The conversion was automatic, with manual review, in consultation with other researchers working on UD annotation of User Generated Content (Sanguinetti et al., 2020).

Trees were parsed automatically using the Irish UD Treebank [IUDT] (Lynn and Foster, 2016) as training data, followed by manual review. The IUDT can be found here https://github.com/UniversalDependencies/UD_Irish-IDT.

## Acknowledgments

We wish to thank all of the contributors to the IUDT annotation, Kevin Scannell for providing data and linguistic advice, and James Barry for improving the accuracy of automatic parsing by experimenting with different models.

The creation of TwittIrish treebank from 2019-2023 is funded by the Irish Government
The Department of Tourism, Culture, Arts, Gaeltacht, Sport and Media under the GaelTech project.

This research is partially supported by Science Foundation Ireland through the ADAPT Centre for Digital Content Technology. The ADAPT Centre for Digital Content Technology is funded under the SFI Research Centres Programme (Grant 13/RC/2106)
and is co-funded under the European Regional Development Fund.

## References
* TwittIrish: A Universal Dependencies Treebank of Tweets in Modern Irish (Cassidy et al., ACL 2022)
* Treebanking user-generated content: a UD based overview of guidelines, corpora and unified recommendations (Sanguinetti et al., Lang Resources & Evaluation 2022)
* Code-switching in Irish tweets: A preliminary analysis (Lynn and Scannell, 2019)
* Irish Dependency Treebanking and Parsing (Lynn, Dublin City University 2016)
* Universal Dependencies for Irish (Lynn and Foster, CLTW 2016)
* Minority Language Twitter: Part-of-Speech Tagging and Analysis of Irish Tweets (Lynn et al., W-NUT 2015)



# Statistics of UD Irish TwittIrish

## POS Tags

[ADJ](ga_twittirish-pos-ADJ.html) – [ADP](ga_twittirish-pos-ADP.html) – [ADV](ga_twittirish-pos-ADV.html) – [AUX](ga_twittirish-pos-AUX.html) – [CCONJ](ga_twittirish-pos-CCONJ.html) – [DET](ga_twittirish-pos-DET.html) – [INTJ](ga_twittirish-pos-INTJ.html) – [NOUN](ga_twittirish-pos-NOUN.html) – [NUM](ga_twittirish-pos-NUM.html) – [PART](ga_twittirish-pos-PART.html) – [PRON](ga_twittirish-pos-PRON.html) – [PROPN](ga_twittirish-pos-PROPN.html) – [PUNCT](ga_twittirish-pos-PUNCT.html) – [SCONJ](ga_twittirish-pos-SCONJ.html) – [SYM](ga_twittirish-pos-SYM.html) – [VERB](ga_twittirish-pos-VERB.html) – [X](ga_twittirish-pos-X.html)

## Features



## Relations

[acl](ga_twittirish-dep-acl.html) – [acl:relcl](ga_twittirish-dep-acl-relcl.html) – [advcl](ga_twittirish-dep-advcl.html) – [advmod](ga_twittirish-dep-advmod.html) – [amod](ga_twittirish-dep-amod.html) – [appos](ga_twittirish-dep-appos.html) – [aux](ga_twittirish-dep-aux.html) – [case](ga_twittirish-dep-case.html) – [case:voc](ga_twittirish-dep-case-voc.html) – [cc](ga_twittirish-dep-cc.html) – [ccomp](ga_twittirish-dep-ccomp.html) – [compound](ga_twittirish-dep-compound.html) – [compound:prt](ga_twittirish-dep-compound-prt.html) – [conj](ga_twittirish-dep-conj.html) – [cop](ga_twittirish-dep-cop.html) – [csubj](ga_twittirish-dep-csubj.html) – [csubj:cleft](ga_twittirish-dep-csubj-cleft.html) – [csubj:cop](ga_twittirish-dep-csubj-cop.html) – [dep](ga_twittirish-dep-dep.html) – [det](ga_twittirish-dep-det.html) – [det:poss](ga_twittirish-dep-det-poss.html) – [discourse](ga_twittirish-dep-discourse.html) – [discourse:emo](ga_twittirish-dep-discourse-emo.html) – [expl](ga_twittirish-dep-expl.html) – [fixed](ga_twittirish-dep-fixed.html) – [flat](ga_twittirish-dep-flat.html) – [flat:foreign](ga_twittirish-dep-flat-foreign.html) – [flat:name](ga_twittirish-dep-flat-name.html) – [goeswith](ga_twittirish-dep-goeswith.html) – [iobj](ga_twittirish-dep-iobj.html) – [list](ga_twittirish-dep-list.html) – [mark](ga_twittirish-dep-mark.html) – [mark:prt](ga_twittirish-dep-mark-prt.html) – [nmod](ga_twittirish-dep-nmod.html) – [nmod:poss](ga_twittirish-dep-nmod-poss.html) – [nmod:tmod](ga_twittirish-dep-nmod-tmod.html) – [nsubj](ga_twittirish-dep-nsubj.html) – [nsubj:outer](ga_twittirish-dep-nsubj-outer.html) – [nummod](ga_twittirish-dep-nummod.html) – [obj](ga_twittirish-dep-obj.html) – [obl](ga_twittirish-dep-obl.html) – [obl:prep](ga_twittirish-dep-obl-prep.html) – [obl:tmod](ga_twittirish-dep-obl-tmod.html) – [orphan](ga_twittirish-dep-orphan.html) – [parataxis](ga_twittirish-dep-parataxis.html) – [parataxis:hashtag](ga_twittirish-dep-parataxis-hashtag.html) – [parataxis:rt](ga_twittirish-dep-parataxis-rt.html) – [parataxis:sentence](ga_twittirish-dep-parataxis-sentence.html) – [parataxis:url](ga_twittirish-dep-parataxis-url.html) – [punct](ga_twittirish-dep-punct.html) – [reparandum](ga_twittirish-dep-reparandum.html) – [root](ga_twittirish-dep-root.html) – [vocative](ga_twittirish-dep-vocative.html) – [vocative:mention](ga_twittirish-dep-vocative-mention.html) – [xcomp](ga_twittirish-dep-xcomp.html) – [xcomp:pred](ga_twittirish-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2596 sentences and 47790 tokens.</li>
</ul>

<ul>
<li>This corpus contains 6493 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 3724 types of words that contain both letters and punctuation. Examples: #gaeilge, @user241, @user1140, @user263, @user27, @user288, d', @user412, @user635, #gaa, 's, #tg4, @user187, @user660, @user619, @user880, @user1530, @user1478, @user1697, b', n-éirí, @user229, @user640, @user1639, @user1648, @user663, @user886, @user423, @user505, @user1523, @user312, d’, #clg, :D, @user791, @user891, Foinse.ie, @user1158, @user1349, @user1368, @user1747, @user292, @user850, m', #lágaeilge, #snag, @user1175, @user1606, @user402, @user792</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 61 word types tagged as particles (PART): 's, Mag, Mc, Mhac, Mhic, Mo, Nic, O', O'Toole, San, Uí, Why, a, ag, an, ana, ar, ba, bhfuil, cha, char, d', de, do, droch, dár, d’, g, go, gur, ina, inar, iontach, is, lena, mac, n, n', n't, na, nach, ndéanann, ni, nil, nior, nios, not, ná, nár, ní, níor, níos, o, o'Connor, s, seminar, to, á, ín, ó, óg</li>
</ul>

<ul>
<li>This corpus contains 63 lemmas tagged as pronouns (PRON): @user1297, They, a, all, be, cad, caidé, ceard, cibé, cé, céard, ea, everyone, féin, he, her, himself, his, i, iad, is, it, le, me, mise, muid, muidne, my, mé, mí, our, se, seo, seó, she, siad, sibh, sin, sinn, sise, siúd, spré, sé, sí, that, their, them, there, this, tusa, tú, u, us, we, what, who, y, ya, you, your, yourself, é, í</li>
</ul>

<ul>
<li>This corpus contains 46 lemmas tagged as determiners (DET): Die, a, achan, all, an, another, any, aon, bhur, brón, chuile, cibé, cé, cúpla, do, eile, else, gach, his, i, is, la, le, leath, meus, mo, my, na, no, our, pé, s, s.c., seo, sin, siúd, some, such, the, this, uile, watever, you, your, ár, úd</li>
</ul>

<ul>
<li>Out of the above, 16 lemmas occurred sometimes as PRON and sometimes as DET: a, all, cibé, cé, his, i, is, le, my, our, seo, sin, siúd, this, you, your</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as auxiliaries (AUX): be, can, could, do, have, is, might, must, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: be, can, do, have, is</li>
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
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: is, be.</li>
</ul>

<ul>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: be, will, do, can, have, would, could, might, must, should.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (731)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--PRON (637)</li>
      <li>VERB--PRON-ADP(chun) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (453)</li>
      <li>VERB--NOUN-ADP(chun) (1)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--NOUN-ADP(le) (1)</li>
      <li>VERB--PRON (110)</li>
      <li>VERB--PRON-ADP(on) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--PRON (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>case:voc</a>, <a>compound:prt</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>det:poss</a>, <a>discourse:emo</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>mark:prt</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:outer</a>, <a>obl:prep</a>, <a>obl:tmod</a>, <a>parataxis:hashtag</a>, <a>parataxis:rt</a>, <a>parataxis:sentence</a>, <a>parataxis:url</a>, <a>vocative:mention</a>, <a>xcomp:pred</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a></li>
</ul>
