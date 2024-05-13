---
layout: base
title:  'UD_Hindi-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Hindi PUD

Language: [Hindi](/hi/index.html) (code: `hi`)<br/>
Family: Indo-European, Indic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Esha Banerjee, Pinkey Nainwani, Martin Popel, Daniel Zeman.

Repository: [UD_Hindi-PUD](https://github.com/UniversalDependencies/UD_Hindi-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhi_pud214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Hindi-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Hindi-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.


## Acknowledgments

# Statistics of UD Hindi PUD

## POS Tags

[ADJ](hi_pud-pos-ADJ.html) – [ADP](hi_pud-pos-ADP.html) – [ADV](hi_pud-pos-ADV.html) – [AUX](hi_pud-pos-AUX.html) – [CCONJ](hi_pud-pos-CCONJ.html) – [DET](hi_pud-pos-DET.html) – [NOUN](hi_pud-pos-NOUN.html) – [NUM](hi_pud-pos-NUM.html) – [PART](hi_pud-pos-PART.html) – [PRON](hi_pud-pos-PRON.html) – [PROPN](hi_pud-pos-PROPN.html) – [PUNCT](hi_pud-pos-PUNCT.html) – [SCONJ](hi_pud-pos-SCONJ.html) – [SYM](hi_pud-pos-SYM.html) – [VERB](hi_pud-pos-VERB.html) – [X](hi_pud-pos-X.html)

## Features

[Aspect](hi_pud-feat-Aspect.html) – [Case](hi_pud-feat-Case.html) – [Definite](hi_pud-feat-Definite.html) – [Foreign](hi_pud-feat-Foreign.html) – [Gender](hi_pud-feat-Gender.html) – [Gender[psor]](hi_pud-feat-Gender-psor.html) – [Mood](hi_pud-feat-Mood.html) – [Number](hi_pud-feat-Number.html) – [Number[psor]](hi_pud-feat-Number-psor.html) – [NumType](hi_pud-feat-NumType.html) – [Person](hi_pud-feat-Person.html) – [Polarity](hi_pud-feat-Polarity.html) – [Polite](hi_pud-feat-Polite.html) – [PronType](hi_pud-feat-PronType.html) – [Tense](hi_pud-feat-Tense.html) – [VerbForm](hi_pud-feat-VerbForm.html)

## Relations

[acl](hi_pud-dep-acl.html) – [acl:relcl](hi_pud-dep-acl-relcl.html) – [advcl](hi_pud-dep-advcl.html) – [advmod](hi_pud-dep-advmod.html) – [amod](hi_pud-dep-amod.html) – [appos](hi_pud-dep-appos.html) – [aux](hi_pud-dep-aux.html) – [aux:pass](hi_pud-dep-aux-pass.html) – [case](hi_pud-dep-case.html) – [cc](hi_pud-dep-cc.html) – [ccomp](hi_pud-dep-ccomp.html) – [compound](hi_pud-dep-compound.html) – [compound:lvc](hi_pud-dep-compound-lvc.html) – [compound:redup](hi_pud-dep-compound-redup.html) – [conj](hi_pud-dep-conj.html) – [cop](hi_pud-dep-cop.html) – [dep](hi_pud-dep-dep.html) – [det](hi_pud-dep-det.html) – [discourse](hi_pud-dep-discourse.html) – [fixed](hi_pud-dep-fixed.html) – [flat](hi_pud-dep-flat.html) – [flat:name](hi_pud-dep-flat-name.html) – [iobj](hi_pud-dep-iobj.html) – [list](hi_pud-dep-list.html) – [mark](hi_pud-dep-mark.html) – [nmod](hi_pud-dep-nmod.html) – [nmod:poss](hi_pud-dep-nmod-poss.html) – [nsubj](hi_pud-dep-nsubj.html) – [nsubj:pass](hi_pud-dep-nsubj-pass.html) – [nummod](hi_pud-dep-nummod.html) – [obj](hi_pud-dep-obj.html) – [obl](hi_pud-dep-obl.html) – [obl:agent](hi_pud-dep-obl-agent.html) – [obl:tmod](hi_pud-dep-obl-tmod.html) – [parataxis](hi_pud-dep-parataxis.html) – [punct](hi_pud-dep-punct.html) – [root](hi_pud-dep-root.html) – [xcomp](hi_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 23829 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2395 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words that contain both letters and punctuation. Examples: समूह..</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
</ul>

<ul>
<li>This corpus contains 23 word types tagged as particles (PART): ईसा, डिडन्ट, डॉ, डोंट, तो, दोनों, न, नहीं, पूर्व, बगैर, बिना, भर, भी, मिस, श्री, श्रीमति, श्रीमती, श्रीमान, सर, सा, सी, सुश्री, ही</li>
</ul>

<ul>
<li>This corpus contains 29 lemmas tagged as pronouns (PRON): अपना, आप, आपस, इसपर, उनपर, उसपर, एक, ऐसा, कहाँ, कैसे, कोई, कौन, क्या, क्यों, खुद, जब, जहाँ, जिसपर, जो, तुम, दूसरा, माई, मी, मैं, यह, यू, वह, हम, हर</li>
</ul>

<ul>
<li>This corpus contains 57 lemmas tagged as determiners (DET): अकेला, अत्यधिक, अधिक, अधिकतर, इतना, ए, एक, एकदम, एकमात्र, ऐसा, और, कई, कम, कमोबेश, काफी, कितना, कुछ, कुल, केवल, कोई, कौन, क्या, जितना, जो, ज्यादा, ज्यादातर, तकरीबन, तुम, थोड़ा, द, दर्जन, दस, दि, दो, पूरा, प्रति, प्रत्येक, बहुत, बाकी, बेहद, महज, मुट्ठीभर, यह, लगभग, ला, लाख, वह, वैसा, सभी, समूचा, सारा, सिर्फ, सैकडा, हजार, हम, हर, हरेक</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: एक, ऐसा, कोई, कौन, क्या, जो, तुम, यह, वह, हम, हर</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): चाहिए, जाना, था, पड़ना, पाना, रहना, सकना, है</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: जाना, पड़ना, पाना, रहना</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: रहने, पाना</li>
    <li>VERB: करने, होने, करना, रहने, बनाने, देने, रखने, कहना, लगाने, आने</li>
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
      <li>ADJ: पहली, अच्छी, दूसरी, नयी, बड़ी, पुरानी, ऊंची, पिछली, पूरी, बुरी</li>
      <li>ADP: की, वाली, संबंधी</li>
      <li>AUX: है, गयी, थी, हैं, सकती, रही, थीं, गई, जाती, जाएगी</li>
      <li>DET: पूरी, थोड़ी, इतनी, कितनी, सारी</li>
      <li>NOUN: तरह, बार, दुनिया, बात, सरकार, शताब्दी, फिल्म, संभावना, सेना, वृद्धि</li>
      <li>PRON: अपनी, उसकी, उनकी, वह, जिसकी, उसे, जिनकी, हमारी, इसने, उन्हें</li>
      <li>PROPN: इटली, स्पेनिश, क्लिंटन, रोना, केशा, क्यूरी, गिनी, जर्मनी, जैस्मिन, ब्लंट</li>
      <li>VERB: की, है, थी, दी, हुई, होती, करती, होगी, आती, ली</li>
      <li>VERB-Inf: करनी, बसनी</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: नये, पहले, पिछले, नया, दूसरे, पुराने, पूरा, बड़ा, छोटे, तीसरे</li>
      <li>ADP: के, का, वाले, वाला, योग्य, स्थित, आधारित, केन्द्रित, प्राप्त, लायक</li>
      <li>AUX: है, था, गया, हैं, जाता, सकता, गए, थे, रहा, जाने</li>
      <li>AUX-Inf: पाना</li>
      <li>DET: थोड़ा, पूरे, कितने, जिस, समूचे, सारे, इतना, जितना, जो</li>
      <li>NOUN: रूप, वर्ष, समय, क्षेत्र, शुरू, काम, साल, युद्ध, उपयोग, दिन</li>
      <li>PRON: अपने, वह, उसका, उसके, उसे, इसका, अपना, उसने, मैं, वे</li>
      <li>PROPN: अमेरिका, चीन, ब्रिटेन, ट्रम्प, फ्रांस, यूरोप, मिस्र, रूस, हांगकांग, अफ्रीका</li>
      <li>VERB: किया, है, दिया, कहा, हुए, था, हुआ, लिया, होता, करता</li>
      <li>VERB-Inf: बनाना, करने, कहना, निपटना, बदलना, भुगतना, मानना, मिलने, लगाने, संभालना</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: नये, अच्छे, ऊंचे, दूसरे, पुराने</li>
      <li>ADP: के, वाले, वालों</li>
      <li>AUX: हैं, थे, गए, रहे, सकते, थीं, जाते, सकती, है, गयी</li>
      <li>DET: उन, इन, दोनों, ये, वे, वो, सैकड़ों</li>
      <li>NOUN: लोगों, लोग, वर्षों, दिनों, देशों, दोनों, अधिकारियों, बच्चों, कंपनियों, निवेशकों</li>
      <li>PRON: वे, उनमें, हम, उनके, ये, जिनमें, हमारे, उनकी, हमें, उन्हें</li>
      <li>PROPN: कॉमन्स, पालों, बांतु, मपेट्स</li>
      <li>VERB: हैं, करते, होते, थे, किए, हुए, दिए, करेंगे, बताते, करें</li>
      <li>VERB-Inf: करने, लौटना, होना</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: नये, पहले, पिछले, नया, पूरा, बड़ा, छोटे, तीसरे, दूसरे, पुराने</li>
      <li>ADP: के, का, वाले, वाली, वाला, संबंधी, योग्य, स्थित, आधारित, केन्द्रित</li>
      <li>AUX: है, था, गया, गयी, थी, जाता, सकता, रहा, हैं, रही</li>
      <li>AUX-Inf: पाना</li>
      <li>DET: एक, इस, यह, उस, ऐसा, द, उसी, ऐसे, ऐसी, थोड़ा</li>
      <li>NOUN: रूप, वर्ष, समय, क्षेत्र, शुरू, काम, साल, तरह, बार, युद्ध</li>
      <li>PRON: यह, अपने, वह, इसके, उसके, उसने, अपनी, उसे, इसे, इसका</li>
      <li>PROPN: अमेरिका, चीन, ब्रिटेन, ट्रम्प, फ्रांस, यूरोप, इटली, मिस्र, रूस, हांगकांग</li>
      <li>VERB: किया, है, दिया, कहा, की, हुए, था, हुआ, लिया, थी</li>
      <li>VERB-Inf: बनाना, करनी, कहना, निपटना, बदलना, बसनी, भुगतना, मानना, मिलने, लगाने</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: से</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: नये, पहले, पिछले, दूसरे, पुराने, छोटे, तीसरे, लम्बे, निचले, खुले</li>
      <li>ADP: को, से, में, पर, तक, के, वाले, का, मे, की</li>
      <li>DET: पूरे, कितने, समूचे, सारे</li>
      <li>NOUN: रूप, लोगों, क्षेत्र, वर्ष, युद्ध, समय, तरीके, दशक, वर्षों, शताब्दी</li>
      <li>PRON: अपने, उसने, उसके, उसे, जिसमें, उन्हें, उन्होंने, उनके, मैंने, जिसे</li>
      <li>PROPN: अमेरिका, चीन, ब्रिटेन, यूरोप, इटली, ट्रम्प, फ्रांस, रूस, अफ्रीका, अल्बानिया</li>
      <li>VERB: घराने, जमाने, तोपखाने</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: को</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADP: ने, के</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: के, की, का, ऑफ, आफ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADP: द्वारा, से</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADP: में, पर, से, को, तक, इन, एट, ओवर, मे</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: नया, पूरा, बड़ा, अच्छा, दूसरा, पहला, छोटा, अंधा, अगला, अच्छे</li>
      <li>ADP: वाला, संबंधी, योग्य, वाली, स्थित, वाले, आधारित, केन्द्रित, प्राप्त, लायक</li>
      <li>DET: थोड़ा, जो, जिस, इतना, इतनी, जितना, पूरी, सैकड़ों</li>
      <li>NOUN: वर्ष, समय, बार, साल, लोग, उपयोग, तरह, दिन, काम, फिल्म</li>
      <li>PRON: जो, वह, अपनी, उसकी, उसका, मैं, वे, उनकी, हम, इसका</li>
      <li>PROPN: ट्रम्प, आल्पस, ग्रीक, ट्विटर, सीगल, स्पेनिश, एंडीज, कैटेलेनो, कैमरून, गेयर</li>
      <li>VERB: पहुंच, मोराविया, रास्ता, संबंधी</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: इस, यह, उस, इन, उन, ऐसा, द, उसी, ऐसे, ऐसी</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: एक, ए, उन, द, दि, वह, वैसा</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADP: बगैर</li>
      <li>PART: नहीं, न, बगैर, बिना, डिडन्ट, डोंट</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: है, जाता, सकता, हैं, सकते, सकती, चाहिए, जाएगा, जाते, जाए</li>
      <li>VERB: है, हैं, करता, होता, करते, होती, होगा, होते, लगता, करती</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: गया, गयी, था, गए, थे, थी, गई, पड़ा, थीं, पड़ी</li>
      <li>VERB: किया, कहा, था, दिया, की, हुआ, लिया, थी, हुई, दी</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: रहे, रहा, रही</li>
      <li>VERB: रही, रहा, हुए, फिशिंग</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: जाए, सकते</li>
      <li>VERB: करें, करेंगे, चाहें, चाहेंगे, दें</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: गया, है, गयी, जाता, सकता, था, रहे, हैं, गए, रहा</li>
      <li>VERB: है, किया, कहा, था, दिया, की, हुआ, थी, लिया, हैं</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX: चाहिए, जाए, सकता, गयी, सकते</li>
      <li>VERB: करे, लाना</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: जाएगा, जाएगी, जाएंगे, पड़ेगा, सकते, सकेगा</li>
      <li>VERB: होगा, होगी, देगा, करेंगे, करेगा, होंगे, देगी, रहेगा, आएंगे, करूंगा</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: था, गया, थे, थी, गयी, गए, थीं, पड़ा, रहा, गई</li>
      <li>VERB: किया, कहा, था, थी, दिया, की, लिया, हुआ, हुई, दी</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: है, हैं, हूं, चाहिए, जाए, थे, सकते, सकता, सके</li>
      <li>VERB: है, हैं, करें, हो, करता, करते, चाहेंगे, दें, निपटें, फटते</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: जो, उसके, जिसमें, उसकी, उनकी, उसका, जिसे, जिनमें, जिसका, जहां</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: जो, जिन्हें, जिसका</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: दो, तीन, एक, मिलियन, चार, 1, 10, 3, छह, दस</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: हूं, हैं, सकते, है, चाहिए, था, थे, पड़ता, सकता</li>
      <li>PRON: मैं, मैंने, हम, मुझे, हमारे, हमें, मेरे, हमने, हमारी, माई</li>
      <li>VERB: कहते, करता, करते, करूंगा, करेंगे, किया, गंवा, चुना.., जाएं, था</li>
      <li>VERB-Inf: लौटना, होना</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: हैं, सकते</li>
      <li>PRON: आप, आपको, आपके, यू, तुमसे</li>
      <li>VERB: करते, करें, गिरा, चलिये, चाहें, दें, देते, हैं, हों</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: है, हैं, था, गया, गयी, थे, गए, थी, जाता, सकता</li>
      <li>AUX-Inf: पाना</li>
      <li>PRON: वह, उसने, उसके, उसे, उसकी, उसका, वे, उन्हें, उन्होंने, उनकी</li>
      <li>VERB: किया, है, दिया, कहा, हुए, की, था, करते, हुआ, लिया</li>
      <li>VERB-Inf: बनाना, करनी, करने, कहना, निपटना, बदलना, बसनी, भुगतना, मानना, मिलने</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>AUX: हैं, थे</li>
      <li>PRON: आप, उन्हें, आपको, उनकी, जिनके</li>
      <li>VERB: करते, कहते, हैं, करती, करें, चाहते, चुके, थीं, थे, दें</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>PRON: जो, जिसमें, उसके, उसका, जिनमें, जिसे, जिसका, अपनी, इसका, उसकी</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: जो, उसकी, उसके, जिसमें, जिसे, उसका, जहां, जिसका, जिसकी, उनकी</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PRON: जो, उनकी, जिनमें, जिन्हें, जिन्होंने, जिसमें, जिनकी, उनके, जहां, जिनका</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: जो, उसके, उसकी, जिसमें, उसका, जिसे, जिसका, जिसकी, जिसके, इसका</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: थ़ॉट, न्यू, या</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: है, था.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: है, था, जाना, सकना, रहना, पड़ना, चाहिए, पाना.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: जाना, सकना.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (7)</li>
      <li>VERB--NOUN-ADP(ने) (1)</li>
      <li>VERB--NOUN-Acc (9)</li>
      <li>VERB--NOUN-Acc-ADP(के) (2)</li>
      <li>VERB--NOUN-Acc-ADP(को) (10)</li>
      <li>VERB--NOUN-Acc-ADP(ने) (104)</li>
      <li>VERB--NOUN-Nom (218)</li>
      <li>VERB--NOUN-Nom-ADP(आस) (1)</li>
      <li>VERB--NOUN-Nom-ADP(को) (2)</li>
      <li>VERB--NOUN-Nom-ADP(ने) (7)</li>
      <li>VERB--PRON (57)</li>
      <li>VERB--PRON-ADP(ने) (1)</li>
      <li>VERB--PRON-Acc (144)</li>
      <li>VERB--PRON-Acc-ADP(ने) (1)</li>
      <li>VERB--PRON-Acc-ADP(पास) (2)</li>
      <li>VERB--PRON-Nom (180)</li>
      <li>VERB--PRON-Nom-ADP(में) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(का) (5)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Inf--PRON-Acc (11)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (21)</li>
      <li>VERB--NOUN-Acc (35)</li>
      <li>VERB--NOUN-Acc-ADP(का) (3)</li>
      <li>VERB--NOUN-Acc-ADP(को) (100)</li>
      <li>VERB--NOUN-Acc-ADP(तक) (1)</li>
      <li>VERB--NOUN-Acc-ADP(पर) (1)</li>
      <li>VERB--NOUN-Acc-ADP(से) (2)</li>
      <li>VERB--NOUN-Nom (795)</li>
      <li>VERB--NOUN-Nom-ADP(का) (2)</li>
      <li>VERB--NOUN-Nom-ADP(के) (1)</li>
      <li>VERB--NOUN-Nom-ADP(को) (2)</li>
      <li>VERB--PRON (33)</li>
      <li>VERB--PRON-Acc (35)</li>
      <li>VERB--PRON-Acc-ADP(साथ) (2)</li>
      <li>VERB--PRON-Nom (7)</li>
      <li>VERB-Inf--NOUN (9)</li>
      <li>VERB-Inf--NOUN-Acc (5)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(का) (6)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(को) (47)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(जैसा) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(से) (2)</li>
      <li>VERB-Inf--NOUN-Nom (185)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(को) (2)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(जैसा) (1)</li>
      <li>VERB-Inf--PRON (10)</li>
      <li>VERB-Inf--PRON-Acc (5)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-ADP(को) (2)</li>
      <li>VERB--NOUN-Acc-ADP(के) (2)</li>
      <li>VERB--NOUN-Acc-ADP(को) (50)</li>
      <li>VERB--NOUN-Acc-ADP(पर) (2)</li>
      <li>VERB--NOUN-Acc-ADP(में) (1)</li>
      <li>VERB--NOUN-Acc-ADP(से) (1)</li>
      <li>VERB--NOUN-Nom (8)</li>
      <li>VERB--NOUN-Nom-ADP(का) (1)</li>
      <li>VERB--NOUN-Nom-ADP(को) (3)</li>
      <li>VERB--PRON (27)</li>
      <li>VERB--PRON-ADP(ऊपर) (1)</li>
      <li>VERB--PRON-Acc (23)</li>
      <li>VERB--PRON-Acc-ADP(ऊपर) (1)</li>
      <li>VERB--PRON-Acc-ADP(लिए) (1)</li>
      <li>VERB--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(को) (10)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(से) (1)</li>
      <li>VERB-Inf--PRON-Nom-ADP(पर) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:tmod</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
