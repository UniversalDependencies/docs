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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_twittirish29)<br />
Download all treebanks: [UD 2.9](/#download)

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

A Universal Dependencies treebank of 866 tweets in modern Irish.



The TwittIrish treebank contains 866 Irish language tweets from two corpora: 166 tweets from the Cassidy Twitter Corpus [CTC] and 700 tweets from the Lynn Twitter Corpus [LTC].

* CTC consists of 25000 tweets posted between 2010 and 2019 randomly sampled from a database of 14111 users who have tweeted in Irish.
* LTC consists of 1493 tweets posted between 2009 and 2014 randomly sampled from 950000 tweets by 8000 users. Lemmas and POS-tags were added to LTC a part of a PhD research project by Dr. Teresa Lynn at Dublin City University, Ireland (Lynn, 2016) (Lynn, Scannell and Maguire, 2015). The LTC data was further annotated with Code-Switching information (Lynn and Scannell, 2019). The LTC data can be found here: https://github.com/tlynn747/IrishTwitterPOS.

Irish language tweets were identified by Kevin Scannell as part of the Indigenous Tweets website project http://indigenoustweets.com/. Non-Irish tweets were filtered out using a simple character-trigram language identifier.

The conversion from the TTC annotation scheme to the UD annotation scheme was designed by Lauren Cassidy as part of an MSc project, supervised by Dr. Teresa Lynn and Dr. Jennifer Foster at Dublin City University, Ireland. The conversion was automatic, with manual review, in consultation with other researchers working on UD annotation of User Generated Content (Sanguinetti et al., 2020).

Trees were parsed automatically using the Irish UD Treebank [IUDT] (Lynn and Foster, 2016) as training data, followed by manual review. The IUDT can be found here https://github.com/UniversalDependencies/UD_Irish-IDT.

## Acknowledgments

We wish to thank all of the contributors to the IUDT annotation, Kevin Scannell for providing data and linguistic advice, and James Barry for improving the accuracy of automatic parsing by experimenting with different models.

The creation of TwittIrish treebank from 2019-2021 is funded by the Irish Government
The Department of Tourism, Culture, Arts, Gaeltacht, Sport and Media under the GaelTech project.

This research is partially supported by Science Foundation Ireland through the ADAPT Centre for Digital Content Technology. The ADAPT Centre for Digital Content Technology is funded under the SFI Research Centres Programme (Grant 13/RC/2106)
and is co-funded under the European Regional Development Fund.

## References

* Lynn, T. (2016) Irish Dependency Treebanking and Parsing. Dublin City University.
* Lynn, T. and Foster, J. (2016) ‘Universal Dependencies for Irish’, p. 14.
* Lynn, T. and Scannell, K. (2019) ‘Code-switching in Irish tweets: A preliminary analysis’, p. 9.
* Lynn, T., Scannell, K. and Maguire, E. (2015) ‘Minority Language Twitter: Part-of-Speech Tagging and Analysis of Irish Tweets’, in Proceedings of the Workshop on Noisy User-generated Text. Proceedings of the Workshop on Noisy User-generated Text, Beijing, China: Association for Computational Linguistics, pp. 1–8. doi: 10.18653/v1/W15-4301.
* Sanguinetti, M. et al. (2020) ‘Treebanking User-Generated Content: A Proposal for a Uniﬁed Representation in Universal Dependencies’, p. 11.


# Statistics of UD Irish TwittIrish

## POS Tags

[ADJ](ga_twittirish-pos-ADJ.html) – [ADP](ga_twittirish-pos-ADP.html) – [ADV](ga_twittirish-pos-ADV.html) – [AUX](ga_twittirish-pos-AUX.html) – [CCONJ](ga_twittirish-pos-CCONJ.html) – [DET](ga_twittirish-pos-DET.html) – [INTJ](ga_twittirish-pos-INTJ.html) – [NOUN](ga_twittirish-pos-NOUN.html) – [NUM](ga_twittirish-pos-NUM.html) – [PART](ga_twittirish-pos-PART.html) – [PRON](ga_twittirish-pos-PRON.html) – [PROPN](ga_twittirish-pos-PROPN.html) – [PUNCT](ga_twittirish-pos-PUNCT.html) – [SCONJ](ga_twittirish-pos-SCONJ.html) – [SYM](ga_twittirish-pos-SYM.html) – [VERB](ga_twittirish-pos-VERB.html) – [X](ga_twittirish-pos-X.html)

## Features



## Relations

[acl](ga_twittirish-dep-acl.html) – [acl:relcl](ga_twittirish-dep-acl-relcl.html) – [advcl](ga_twittirish-dep-advcl.html) – [advmod](ga_twittirish-dep-advmod.html) – [amod](ga_twittirish-dep-amod.html) – [appos](ga_twittirish-dep-appos.html) – [aux](ga_twittirish-dep-aux.html) – [case](ga_twittirish-dep-case.html) – [case:voc](ga_twittirish-dep-case-voc.html) – [cc](ga_twittirish-dep-cc.html) – [ccomp](ga_twittirish-dep-ccomp.html) – [compound](ga_twittirish-dep-compound.html) – [compound:prt](ga_twittirish-dep-compound-prt.html) – [conj](ga_twittirish-dep-conj.html) – [cop](ga_twittirish-dep-cop.html) – [csubj](ga_twittirish-dep-csubj.html) – [csubj:cleft](ga_twittirish-dep-csubj-cleft.html) – [csubj:cop](ga_twittirish-dep-csubj-cop.html) – [dep](ga_twittirish-dep-dep.html) – [det](ga_twittirish-dep-det.html) – [discourse](ga_twittirish-dep-discourse.html) – [discourse:emo](ga_twittirish-dep-discourse-emo.html) – [expl](ga_twittirish-dep-expl.html) – [fixed](ga_twittirish-dep-fixed.html) – [flat](ga_twittirish-dep-flat.html) – [flat:foreign](ga_twittirish-dep-flat-foreign.html) – [flat:name](ga_twittirish-dep-flat-name.html) – [goeswith](ga_twittirish-dep-goeswith.html) – [iobj](ga_twittirish-dep-iobj.html) – [list](ga_twittirish-dep-list.html) – [mark](ga_twittirish-dep-mark.html) – [mark:prt](ga_twittirish-dep-mark-prt.html) – [nmod](ga_twittirish-dep-nmod.html) – [nmod:poss](ga_twittirish-dep-nmod-poss.html) – [nsubj](ga_twittirish-dep-nsubj.html) – [nummod](ga_twittirish-dep-nummod.html) – [obj](ga_twittirish-dep-obj.html) – [obl](ga_twittirish-dep-obl.html) – [obl:prep](ga_twittirish-dep-obl-prep.html) – [obl:tmod](ga_twittirish-dep-obl-tmod.html) – [orphan](ga_twittirish-dep-orphan.html) – [parataxis](ga_twittirish-dep-parataxis.html) – [parataxis:hashtag](ga_twittirish-dep-parataxis-hashtag.html) – [parataxis:rt](ga_twittirish-dep-parataxis-rt.html) – [parataxis:sentence](ga_twittirish-dep-parataxis-sentence.html) – [parataxis:url](ga_twittirish-dep-parataxis-url.html) – [punct](ga_twittirish-dep-punct.html) – [root](ga_twittirish-dep-root.html) – [vocative](ga_twittirish-dep-vocative.html) – [vocative:mention](ga_twittirish-dep-vocative-mention.html) – [xcomp](ga_twittirish-dep-xcomp.html) – [xcomp:pred](ga_twittirish-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 866 sentences and 15433 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2108 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1367 types of words that contain both letters and punctuation. Examples: #gaeilge, @aonghusoha, @TG4TV, @maitiuocoimin, @RTERnaG, @KingDonncha1, d', #gaa, @tuigim, 's, @cnag, @murchadhmor, #tg4, @MiseCiara, b', :D, n-éirí, @NiallSF, @gaelport, @igaeilge, @newbelfast, @raidionalife, Foinse.ie, #lágaeilge, @CiaranDunbar, @SBBinashui, @TgLurgan, @cormacag5, @gaeilge2013, @thechairman09, @CeolBaile, @Marion508, @Neidi, @OsgurOCiardha, @bbcblas, @rtebrodclub, @scottdebuitleir, @seolinn, @sherqui, http:/, http://t., i.n., m', @AnDuinnineach, @HannahRua, @NaGaeilOga, @NuachtTG4, @ReadoutSignpost, @SnaGaeilge, @SportTG4</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 44 word types tagged as particles (PART): 's, Mac, Mhic, N', O, O', O'Toole, San, Uí, a, an, ar, bhfuil, d', do, droch, dár, go, gur, inar, iontach, is, lena, n, n't, na, nach, ni, nil, nior, nios, not, ná, nár, ní, níor, níos, o'Connor, s, to, Ó, á, ín, óg</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as pronouns (PRON): They, cad, caidé, cé, céard, ea, everyone, féin, he, his, i, iad, it, mise, muid, mé, se, seo, siad, sibh, sin, sinn, siúd, sé, sí, that, there, this, tú, us, we, what, ya, you, yourself, é, í</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as determiners (DET): a, achan, all, an, another, aon, bhur, brón, chuile, cibé, cúpla, do, eile, gach, his, i, is, leath, mo, my, na, no, our, pé, s.c., seo, sin, some, such, the, this, uile, watever, ár, úd</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: his, i, seo, sin, this</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): be, can, do, is, might, must, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: be, do</li>
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
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: be, do, can, might, must, should, will, would.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (254)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--PRON (211)</li>
      <li>VERB--PRON-ADP(chun) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (159)</li>
      <li>VERB--NOUN-ADP(chun) (1)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--PRON (38)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 18 relation subtypes: <a>acl:relcl</a>, <a>case:voc</a>, <a>compound:prt</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>discourse:emo</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>mark:prt</a>, <a>nmod:poss</a>, <a>obl:prep</a>, <a>obl:tmod</a>, <a>parataxis:hashtag</a>, <a>parataxis:rt</a>, <a>parataxis:sentence</a>, <a>parataxis:url</a>, <a>vocative:mention</a>, <a>xcomp:pred</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>reparandum</a></li>
</ul>
