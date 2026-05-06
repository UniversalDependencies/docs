---
layout: base
title:  'UD_Marathi-CMUPAN'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Marathi CMUPAN

Language: [Marathi](/mr/index.html) (code: `mr`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.18 release.

The following people have contributed to making this treebank part of UD: Pranav Kushare, Aditi Chaudhary, Luigi Talamo, Annemarie Verkerk, Helena Vaz.

Repository: [UD_Marathi-CMUPAN](https://github.com/UniversalDependencies/UD_Marathi-CMUPAN)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udmr_cmupan218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: academic, news, grammar-examples, government

Questions, comments?
General annotation questions (either Marathi-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Marathi-CMUPAN/issues).
If you want to collaborate, please contact [annemarie&nbsp;•&nbsp;verkerk&nbsp;(æt)&nbsp;uni-saarland&nbsp;•&nbsp;de].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

This treebank is a modified version of a semi-automatically treebank authord by Aditi Chaudhary, which in turn is based on the treebanks released by KCIS, IIIT-Hyderabad. Additionally, the treebank also contains Marathi-Discourse: A manually annotated 35-sentence corpus covering political discourse.



The sentences are based on treebanks released by KCIS, IIIT-Hyderabad . The primary goal of this version is to provide a clean, validated treebank by fixing structural inconsistencies, morphological feature errors, and dependency relation violations in the original treebank. The corrections were performed using python script-based semi-automatic logics. (For eg. Identifying and fixing invalid upos-deeprel, correcting lemmas, correcting/removing invalid morphological feature, etc). For transliteration Indic Transliteration python library was used.

Marathi-Discourse: The corpus also contains 35 Discourse sentences. Data for this is sourced from the official Marathi translation of Prime Minister (of India) Narendra Modi’s address to the nation regarding the COVID-19 pandemic, delivered on May 12, 2020.

To maintain traceability, each sentence ID in the carries a specific prefix:

*cmupan_*: Sentences from the CMU/IIIT-Hyderabad treebank.

*DISC_*: Discourse sentences.


## Acknowledgments

Original work by Aditi Chaudhary. The treebank was semi-automatically corrected by Pranav Kushare. Supervision and revision by Luigi Talamo, Annemarie Verkerk, Helena Vaz.



## References

* (citation)
Please cite the following references:

### Paninian Treebank annotation effort, similar annotation techniques were followed for Marathi, Bengali and Kannada.

```
@incollection{bhat2017hindi,
title={The hindi/urdu treebank project},
author={Bhat, Riyaz Ahmad and Bhatt, Rajesh and Farudi, Annahita and Klassen, Prescott and Narasimhan, Bhuvana and Palmer, Martha and Rambow, Owen and Sharma, Dipti Misra and Vaidya, Ashwini and Ramagurumurthy Vishnu, Sri and others},
booktitle={Handbook of linguistic annotation},
pages={659--697},
year={2017},
publisher={Springer}
}
```
```
@article{xia2008towards,
title={Towards a multi-representational treebank},
author={Xia, Fei and Rambow, Owen and Bhatt, Rajesh and Palmer, Martha and Misra Sharma, Dipti},
journal={LOT Occasional Series},
volume={12},
pages={159--170},
year={2008},
publisher={LOT, Netherlands Graduate School of Linguistics}
}
```
```
@inproceedings{bhatt2009multi,
title={A multi-representational and multi-layered treebank for hindi/urdu},
author={Bhatt, Rajesh and Narasimhan, Bhuvana and Palmer, Martha and Rambow, Owen and Sharma, Dipti Misra and Xia, Fei},
booktitle={Proceedings of the Third Linguistic Annotation Workshop (LAW III)},
pages={186--189},
year={2009}
}
```
```
@misc{modi_speech_2020,
author = {% raw %}{{{% endraw %}Prime Minister's Office, India{% raw %}}}{% endraw %},
title = {पंतप्रधानांचे देशाला संबोधन (Address to the Nation on COVID-19 and Atmanirbhar Bharat)},
year = {2020},
month = {May 12},
howpublished = {\url{https://www.pmindia.gov.in/mr/news_updates/पंतप्रधानांचे-देशाला-उद्/{% raw %}}}{% endraw %}
}
```

Additional relevant references are [here](http://verbs.colorado.edu/hindiurdu/publications.html)

### Converting Paninian annotation to UD annotation
```
@inproceedings{tandon-etal-2016-conversion,
title = "Conversion from Paninian Karakas to {U}niversal {D}ependencies for {H}indi Dependency Treebank",
author = "Tandon, Juhi and
Chaudhry, Himani and
Bhat, Riyaz Ahmad and
Sharma, Dipti",
booktitle = "Proceedings of the 10th Linguistic Annotation Workshop held in conjunction with {ACL} 2016 ({LAW}-X 2016)",
month = aug,
year = "2016",
address = "Berlin, Germany",
publisher = "Association for Computational Linguistics",
url = "https://aclanthology.org/W16-1716",
doi = "10.18653/v1/W16-1716",
pages = "141--150",
}
```

### Automatic Parser used for dependency analysis
UDIFY Model:
```
@inproceedings{kondratyuk-straka-2019-75,
title = {75 Languages, 1 Model: Parsing Universal Dependencies Universally},
author = {Kondratyuk, Dan and Straka, Milan},
booktitle = {Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)},
year = {2019},
address = {Hong Kong, China},
publisher = {Association for Computational Linguistics},
url = {https://www.aclweb.org/anthology/D19-1279},
pages = {2779--2795}
}
```
```
@misc{googletrans,
author = {Suhun Han},
title = {Googletrans: Free and Unlimited Google translate API for Python},
year = {2020},
publisher = {PyPI},
howpublished = {\url{https://pypi.org/project/googletrans/{% raw %}}}{% endraw %},
}
```
```
@misc{indic_transliteration,
author = {% raw %}{{{% endraw %}Vishvas Vasuki{% raw %}}}{% endraw %},
title = {indic-transliteration: Python package for Indic script transliteration},
year = {2025},
publisher = {GitHub},
journal = {GitHub repository},
howpublished = {\url{https://github.com/indic-transliteration/indic_transliteration_py{% raw %}}}{% endraw %},
note = {Version 2.3.75}
}
```


# Statistics of UD Marathi CMUPAN

## POS Tags

[ADJ](mr_cmupan-pos-ADJ.html) – [ADP](mr_cmupan-pos-ADP.html) – [ADV](mr_cmupan-pos-ADV.html) – [AUX](mr_cmupan-pos-AUX.html) – [CCONJ](mr_cmupan-pos-CCONJ.html) – [DET](mr_cmupan-pos-DET.html) – [NOUN](mr_cmupan-pos-NOUN.html) – [NUM](mr_cmupan-pos-NUM.html) – [PART](mr_cmupan-pos-PART.html) – [PRON](mr_cmupan-pos-PRON.html) – [PROPN](mr_cmupan-pos-PROPN.html) – [PUNCT](mr_cmupan-pos-PUNCT.html) – [SCONJ](mr_cmupan-pos-SCONJ.html) – [VERB](mr_cmupan-pos-VERB.html)

## Features

[Aspect](mr_cmupan-feat-Aspect.html) – [Case](mr_cmupan-feat-Case.html) – [Gender](mr_cmupan-feat-Gender.html) – [Mood](mr_cmupan-feat-Mood.html) – [Number](mr_cmupan-feat-Number.html) – [NumType](mr_cmupan-feat-NumType.html) – [Person](mr_cmupan-feat-Person.html) – [Polarity](mr_cmupan-feat-Polarity.html) – [PronType](mr_cmupan-feat-PronType.html) – [Tense](mr_cmupan-feat-Tense.html) – [VerbForm](mr_cmupan-feat-VerbForm.html)

## Relations

[acl](mr_cmupan-dep-acl.html) – [acl:relcl](mr_cmupan-dep-acl-relcl.html) – [advcl](mr_cmupan-dep-advcl.html) – [advmod](mr_cmupan-dep-advmod.html) – [amod](mr_cmupan-dep-amod.html) – [aux](mr_cmupan-dep-aux.html) – [aux:pass](mr_cmupan-dep-aux-pass.html) – [case](mr_cmupan-dep-case.html) – [cc](mr_cmupan-dep-cc.html) – [ccomp](mr_cmupan-dep-ccomp.html) – [compound](mr_cmupan-dep-compound.html) – [compound:lvc](mr_cmupan-dep-compound-lvc.html) – [compound:redup](mr_cmupan-dep-compound-redup.html) – [compound:svc](mr_cmupan-dep-compound-svc.html) – [conj](mr_cmupan-dep-conj.html) – [cop](mr_cmupan-dep-cop.html) – [dep](mr_cmupan-dep-dep.html) – [det](mr_cmupan-dep-det.html) – [det:poss](mr_cmupan-dep-det-poss.html) – [discourse](mr_cmupan-dep-discourse.html) – [dislocated](mr_cmupan-dep-dislocated.html) – [iobj](mr_cmupan-dep-iobj.html) – [mark](mr_cmupan-dep-mark.html) – [nmod](mr_cmupan-dep-nmod.html) – [nmod:poss](mr_cmupan-dep-nmod-poss.html) – [nsubj](mr_cmupan-dep-nsubj.html) – [nsubj:pass](mr_cmupan-dep-nsubj-pass.html) – [nummod](mr_cmupan-dep-nummod.html) – [obj](mr_cmupan-dep-obj.html) – [obl](mr_cmupan-dep-obl.html) – [parataxis](mr_cmupan-dep-parataxis.html) – [punct](mr_cmupan-dep-punct.html) – [root](mr_cmupan-dep-root.html) – [vocative](mr_cmupan-dep-vocative.html) – [xcomp](mr_cmupan-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9606 sentences and 118198 tokens.</li>
</ul>

<ul>
<li>This corpus contains 15 tokens (0%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 210 types of words that contain both letters and punctuation. Examples: एस., एम., स्वत:च्या, आर., एन., इस., एच., एल., स्वत:ला, ए., किमी.च्या, ई.मध्ये, कि.ग्रॅ., कि.मी., तुकडे-तकुडे, विशेषत:, स्वत:ची, "रॉ'ने, "सकाळ'शी, "सोमेश्‍वर'चे, एफ., के.के.मार्गाची, द., प., भात-गहू, यू.एस., स्वत:, स्वत:कडून, स्वत:चा, हर्म., ०४-Mar, २०-२५%ने, "अक्षर, "अर्बन, "आयडिया'कडे, "आयडिया'चा, "इन्फोसिस'पासून, "इव्हेंटस्‌'चा, "उपकार'च्या, "उल्फा'चा, "एनएसयूआय'चे, "एमआयडीसी'च्या, "एमआयडीसी'ने, "कयाकिंग', "कलाश्री, "केबल, "क्‍लोरिनेशन'ची, "गिनेस'मध्ये, "जंजीर'चे, "टीएमटी'मध्ये</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 69 word types tagged as particles (PART): अगदी, अति, अतिअतिजलद, अतितातडीची, अतितातडीच्या, अतिशय, अतीव, अत्यंत, अत्यन्त, अत्याधिक, अधिक, अधिकच, अधिकतर, अधिकप्रमाणात, अधिकाधिक, अर्थातच, असे, असेच, अहो, आई, आणखी, आवो, इतक्‍या, उच्च, एकजात, एकतर, एकदम, की, खबरदार, खूप, खूपच, जणु, जणू, तर, तरच, तरी, तरीसुद्धा, तर्फे, देखील, न, नको, नव्हते, ना, नाही, नाहीस, नो, न्, पण, पत्नींसाठी, पुष्कळ, पूर्ण, प्रति, प्रती, फार, फारच, बर, बरीच, बर्‍याच, भरपूर, भले, मात्र, सगळ्यात, सर्वांत, सर्वात, सर्वाधिक, सुद्धा, हुश्‍श, हॅलो, हो</li>
</ul>

<ul>
<li>This corpus contains 210 lemmas tagged as pronouns (PRON): ak, अशा, अशी, अस, असा, असे, आत्ती, आत्मविश्वास, आदी, आपण, आपला, आपली, आपले, आपल्या, आपापला, आपुलकी, आमचा, आमची, आमचे, आम्हा, आम्हाला, आम्ही, इकडे, इतर, इथ, इथं, इथलं, इथला, इथली, इथले, इथे, इथेच, एकमेक, एकमेकी, एवढंच, कधी, कशाप्रकारे, कशाला, कशी, कस, कसला, कसली, कसले, कसा, कसे, का, काय, काही, काहींनी, काहीजण, काहीही, कितपत, किती, कितीला, कित्येक, कुठ, कुठला, कुठली, कुठले, कुठे, कुण, कुणी, केवढा, केव्हा, कोट्यवधी, कोठ, कोठे, कोण, कोणकोणती, कोणता, कोणती, कोणते, कोणला, खुद्द, खूप, जण, जरी, जशी, जसे, जितके, जिथ, जिथली, जिथे, जी, जे, जेदेखील, जेव्हा, जो, जोपर्यंत, ज्याक्षणी, ज्यापसून, ज्यावेळी, ज्योतिर्विद्या, तत्पूर्वी, तशी, तसदी, तसा, तसे, तिकडे, तितके, तिथ, तिथं, तिथली, तिथे, तिळ, ती, तीदृष्टी, तुज, तुझं, तुझा, तुझी, तुमचा, तुमची, तुमचे, तुम्हास, तुलना, तू, ते, तेथ, तेथील, तेथून, तेथे, तेवढी, तेवढे, तेव्हा, तो, तो..., तोवर, त्या, त्यांचा, त्यांना, त्याचं, त्याचप्रकारे, त्याचवेळी, त्याच्याअंतर्गत, त्याच्याजवळ, त्यात, त्यादृष्टी, त्यादृष्टीने, त्याने, त्याप्रमाणात, त्यामुळे, त्याला, त्यावेळचे, त्यावेळी, त्यावेळेचा, परस्पर, परस्परविरोधी, प्रत्येक, बाग, मल, मला, माझं, माझा, माझे, मान, मी, म्हण, म्हणून, या, यांच्या, यांच्यामते, याउलट, यात्रा, यादी, यानंतर, यापुढे, याप्रकरण, यामुळे, यावर्षी, यावेळ, यावेळी, यावेळेला, याशिवाय, यासरख्या, यासारखा, ये, येथ, येथील, येथून, येथे, लडाखी, वरील, शी, सगळा, सगळेजण, सरकार, सर्व, सर्वजण, सर्वांना, स्वत, स्वत:, स्वत:कडून, स्वत:चा, स्वत:ची, स्वत:चे, स्वत:च्या, स्वत:बद्दलचं, स्वत:ला, स्वत:वर, स्वतः, हा, हि, ही, हॆ, हे, ह्या, ह्यांचा, ह्याप्रकारातील, ह्यामध्ये</li>
</ul>

<ul>
<li>This corpus contains 171 lemmas tagged as determiners (DET): अख्खा, अजिबात, अतिशय, अतोनात, अत्यंत, अत्यल्प, अधिक, अधिकतर, अधिकांश, अधिकाधिक, अनेक, अनेकता, अनेकदा, अनेकांवर, अर्धा, अवघा, अवघे, अवघ्या, असंख्य, असा, आणखी, आणखीन, आपला, आर, इतका, इतकी, इतकीच, इतके, इतक्‍या, इतर, एक, एकतृतीयांश, एकमात्र, एकमेव, एका, एकूण, एकेक, एकेका, एखाददुसरे, एखादा, एखादी, एखाद्या, एवढंच, एवढा, एवढी, एवढे, कमाल, कमालीचा, कमी, कमीतकमी, काही, काहींद्वारे, काहीतरी, काहीप्रमुख, काहीशी, काहीही, किंचित, कितवी, किती, कितीदा, कित्ती, कित्येक, किमान, किरकोळ, केवळ, कोट्यवधी, खचाखच, खूप, जरा, जवळजवळ, जवळपास, जादा, जास्त, जास्तीत, जास्तीतजास्त, जितका, जितके, जेवढा, जो, ठराविक, तब्बल, तितका, तितकी, तितके, तेवढा, तेवढी, तेवढे, थोडं, थोडका, थोडयाच, थोडसे, थोडा, थोडाफार, थोडी, थोडे, थोडेसे, थोड्या, दर, दोघांना, दोघे, निदान, निम्मा, नुसता, नेमका, पुरता, पुरसे, पुरेपूर, पुरेशा, पुरेसा, पुष्कळ, पूर्ण, पैकी, प्रत्येक, फक्त, फक्‍त, फार, फारच, फारशा, फारशी, फारसा, फारसे, बरा, बराच, बरासाच, बरीच, बरे, बरेच, बऱ्याच, बहुतांश, बहुतांशी, बहुतेक, बहुदा, बहुधा, बहुसंख्य, बिलियन, भरपूर, भरमसाट, मिलियन, मुबलक, मूठभर, या, वर्म, शेकडो, संपूर्ण, सकल, सगळ, सगळा, सगळी, सगळे, सगळ्या, सतरावा, सबंध, समग्र, समस्त, सर्व, सर्वकाही, सर्वत्र, सर्वदूर, सर्वाधिक, सार, सारा, सारे, सुमार, सुमारे, हर, हरएक, हा, हे, १९३२, १९७२, २००६</li>
</ul>

<ul>
<li>Out of the above, 21 lemmas occurred sometimes as PRON and sometimes as DET: असा, आपला, इतर, एवढंच, काही, काहीही, किती, कित्येक, कोट्यवधी, खूप, जितके, जो, तितके, तेवढी, तेवढे, प्रत्येक, या, सगळा, सर्व, हा, हे</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as auxiliaries (AUX): असणे, जाणे, नको, पाहिजे, येणे, शकणे</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as AUX and sometimes as VERB: असणे, जाणे, नको, पाहिजे, येणे, शकणे</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: करण्यासाठी, करून, घेऊन, जाऊन, जाण्यासाठी, असल्याने, राहण्यासाठी, होऊन, देऊन, होण्यासाठी</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: आहे, आहेत, नाही, जाते, होते, होती, होता, जातो, जातात, आले</li>
    <li>VERB: करण्यात, आहे, केली, केले, होते, केला, झाले, झाली, होत, झाला</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: करण्यासाठी, मिळविण्यासाठी, पाहायला, वाचविण्यासाठी, घेण्यासाठी, देण्यासाठी, जाण्यासाठी, यायला, उभारण्यासाठी, करायला</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: गेल्या, असलेल्या, झाल्यास, आणल्याचे, कंटाळलेल्या, करणार्‍या, करण्याची, घेतल्यानंतर, जाणार्‍या, झालेल्या</li>
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
      <li>ADJ: मोठ्या, उत्तर, मोठी, दक्षिण, पश्चिम, चांगली, नव्या, अशा, चांगल्या, पूर्व</li>
      <li>ADP: यांनी, या, यांच्या, अशी, अशा, यांना, ह्या, पुढच्या, यासारख्या, खाली</li>
      <li>AUX: होती, आहे, जाते, आली, होते, गेली, येते, आहेत, शकते, होत्या</li>
      <li>AUX-Fin: होती, आहे, जाते, आली, होते, गेली, येते, आहेत, शकते, होत्या</li>
      <li>DET: काही, अनेक, इतकी, सर्व, पुरेशी, अधिक, तितकी, प्रत्येक, कमी, जादा</li>
      <li>NOUN: वेळी, माहिती, व्यवस्था, मदत, नदीच्या, मागणी, मूर्ती, सकाळी, रात्री, बाजूला</li>
      <li>NUM: पेठ, तिच, लाख, अर्धी, अर्ध्या, कोटींचा, कोटींच्या, तिघींनी, दोनवेळा, पंचविशीतच</li>
      <li>PRON: ही, या, ती, त्या, अशी, ह्या, अशा, तिला, तिने, आपली</li>
      <li>PROPN: मुंबई, अनू, गंगा, नवी, मुंबईत, दिल्ली, सकाळ, अमेरिकेत, बार्ली, गंगेच्या</li>
      <li>VERB: केली, झाली, दिली, होती, होते, असते, असलेल्या, आली, घेतली, मिळाली</li>
      <li>VERB-Conv: असल्याने, झाली, असलेली, केली, दिली, राहिल्याने, अवलंबल्याची, असणारी, असल्याची, असल्यामुळे</li>
      <li>VERB-Fin: केली, झाली, दिली, होती, होते, असते, आली, घेतली, मिळाली, करावी</li>
      <li>VERB-Part: असलेली, काढलेल्या, गेल्या</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: उपस्थित, बंद, मुख्य, मोठ्या, भारतीय, काळ्या, ज्येष्ठ, मोठे, प्रमुख, मोठा</li>
      <li>ADP: यांनी, या, यांच्या, हा, यांना, यांनीही, असा, यांचा, यांच्याकडे, यांच्यासह</li>
      <li>AUX: होता, आहे, होते, आला, आहेत, शकतो, जातो, शकतात, जातात, गेला</li>
      <li>AUX-Fin: होता, आहे, होते, आला, आहेत, जातो, शकतो, शकतात, जातात, गेला</li>
      <li>DET: काही, हे, अनेक, सर्व, या, सगळ्या, पुरेसा, प्रत्येक, सगळे, आणखी</li>
      <li>NOUN: वापर, प्रयत्न, काळात, निर्णय, समावेश, लोक, भागात, भाग, आनंद, दिवस</li>
      <li>NUM: चौरस, एका, चहा, एक, अरब, एकर, एकाच, एकाने, एकाही, चार</li>
      <li>PRON: या, हा, तो, त्यांनी, ते, आपल्या, त्यांच्या, ह्या, हे, त्यांना</li>
      <li>PROPN: भारत, मोहन, जम्मू, भारतातील, शिवाजी, महाराष्ट्र, भारतात, राम, नोव्हेंबर, प्रकाश</li>
      <li>VERB: केला, झाला, केले, होते, म्हणाले, दिला, घेतला, होता, झाले, करतात</li>
      <li>VERB-Conv: असल्याचे, असल्यामुळे, असल्याने, असल्याचा, अडवीत, असल्याची, असल्यास, करायचा, कळण्याच्या, केला</li>
      <li>VERB-Fin: केला, झाला, केले, होते, म्हणाले, घेतला, होता, दिला, करतात, झाले</li>
      <li>VERB-Inf: यायला, देण्यासाठी, बदलत, होण्यासाठी</li>
      <li>VERB-Part: असला, असल्याने, आले, मिळालेला, राहिला</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: मोठ्या, चांगले, महत्त्वाचे, मोठे, जुन्या, महत्त्वाचा, इतर, चांगल्या, खुले, उभे</li>
      <li>ADP: या, असे, यांच्या, यांनी, यांचे, ह्यांसारखी, ह्या, अशी, यांचा, यांची</li>
      <li>AUX: आहे, होते, आले, जाते, आहेत, गेले, येते, शकते, जातात, असते</li>
      <li>AUX-Fin: आहे, होते, जाते, आले, आहेत, गेले, येते, शकते, जातात, असते</li>
      <li>DET: हे, इतर, अनेक, काही, सगळं, पुरेसे, सर्व, असे, प्रत्येक, सगळी</li>
      <li>NOUN: अंतरावर, काम, मंदिर, किमी., पीक, पाणी, केंद्र, प्रमाणात, पर्यटन, सरोवर</li>
      <li>NUM: अर्ध्या, एकक, इतक्‍या, कोट्यवधींचा, मीठ, हजार</li>
      <li>PRON: हे, या, ते, जे, असे, त्यात, त्यानंतर, ह्या, त्यामुळे, त्याच्या</li>
      <li>PROPN: भारताच्या, एन-95, कच्छ, भारताचे, भारताने</li>
      <li>VERB: केले, झाले, होते, वसलेले, सांगितले, असलेले, करण्याची, देण्यात, आले, असते</li>
      <li>VERB-Conv: करण्याची, करण्याचा, करण्यास, करण्याचे, जाण्यासाठी, होण्याची, करणे, होण्यासाठी, असल्याने, देण्यासाठी</li>
      <li>VERB-Fin: केले, झाले, होते, सांगितले, वसलेले, असते, आले, देण्यात, घेतले, दिले</li>
      <li>VERB-Inf: जाण्यासाठी, येण्या, करण्याकरिता, करण्यास, खाण्यासाठी, घेण्यासाठी, जळण्याला</li>
      <li>VERB-Part: करण्याची, आल्या, ऐकण्याच्या, ऐकले, करणे, करण्याचा, केले, घडण्याची, झाले, ठरण्याची</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: उपस्थित, मोठ्या, मोठे, अशा, चांगले, विविध, चांगल्या, छोट्या, ज्येष्ठ, इतर</li>
      <li>ADP: यांनी, यांच्या, यांना, या, यांनीही, यांचा, यांचे, यांची, यांच्याकडे, यांच्यासह</li>
      <li>AUX: आहेत, होते, जातात, नाहीत, शकतात, होता, असतात, होत्या, आले, शकता</li>
      <li>AUX-Fin: आहेत, होते, जातात, नाहीत, शकतात, होता, होत्या, असतात, शकता, आले</li>
      <li>DET: अनेक, काही, सर्व, हे, इतर, सगळ्या, आणखी, सगळी, सगळे, पुरेसे</li>
      <li>NOUN: किलोमीटर, लोक, पर्यटक, पैसे, पोलिसांनी, रुपये, वर्षे, टक्के, पिके, दिवस</li>
      <li>NUM: कोटींचा, हजारो, हजारोंच्या, अरब, अर्ध्या, इतक्‍या, एकर, कोटींच्या, कोट्यवधींचा, चार</li>
      <li>PRON: त्यांनी, ते, त्यांच्या, त्यांना, हे, या, आम्ही, त्या, तुम्ही, त्यांचे</li>
      <li>PROPN: गोवा, मलयाल, डॉक्टर, केळी, पंचेत, महाराजांच्या, महाराजांनी, अण्णांनी, गांधीजींनी, डॉक्टरांनी</li>
      <li>VERB: होते, म्हणाले, करतात, झाले, आहेत, असलेल्या, आले, करीत, येतात, गेले</li>
      <li>VERB-Conv: असल्याने, राहिल्याने, अडवीत, अवलंबल्याची, आढळली, खाल्ल्यामुळे, गेल्यावर, घेतल्याची, घेतल्यानंतर, घेतात</li>
      <li>VERB-Fin: होते, करतात, म्हणाले, आहेत, झाले, आले, येतात, करीत, केले, असतात</li>
      <li>VERB-Inf: बदलत, यायला</li>
      <li>VERB-Part: आले, काढलेल्या, गेल्या, जाणाऱ्या</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: बंद, मुख्य, उत्तर, मोठी, दक्षिण, भारतीय, पश्चिम, चांगले, महत्त्वाचे, मोठे</li>
      <li>ADP: या, हा, असे, अशी, असा, ह्या, रोजी, सुमारास, चे, च्या</li>
      <li>AUX: आहे, नाही, होते, जाते, होती, होता, आले, आला, आली, जातो</li>
      <li>AUX-Fin: आहे, नाही, होते, जाते, होती, होता, आले, आला, आली, जातो</li>
      <li>DET: हे, सर्व, इतर, काही, प्रत्येक, सर्वात, इतकी, सगळं, एवढ्या, पुरेसे</li>
      <li>NOUN: वेळी, अंतरावर, काम, मंदिर, किमी., पीक, पाणी, माहिती, वापर, ठिकाणी</li>
      <li>NUM: चौरस, एका, चहा, पेठ, एक, एकक, टक्‍के, तिच, लाख, अर्धी</li>
      <li>PRON: या, हे, ही, मी, हा, तो, ह्या, आपल्या, त्या, मला</li>
      <li>PROPN: मुंबई, पाटील, मोहन, पुणे, अनू, जम्मू, भारत, भारतातील, गंगा, नवी</li>
      <li>VERB: केली, आहे, केले, केला, होते, झाली, झाले, झाला, दिली, असते</li>
      <li>VERB-Conv: करण्याची, असल्याने, करण्याचा, असल्याचे, असल्यामुळे, करण्यास, करण्याचे, जाण्यासाठी, होण्याची, करणे</li>
      <li>VERB-Fin: केली, आहे, केले, केला, होते, झाली, झाले, झाला, असते, दिली</li>
      <li>VERB-Inf: यायला, जाण्यासाठी, येण्या, करण्याकरिता, करण्यास, खाण्यासाठी, घेण्यास, घेण्यासाठी, जळण्याला, देण्यासाठी</li>
      <li>VERB-Part: करण्याची, असला, असलेली, असल्याने, आल्या, ऐकण्याच्या, ऐकले, करणे, करण्याचा, केले</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: वेळी, अंतरावर, ठिकाणी, काळात, प्रमाणात, भागात, घरी, मार्गावर, मंदिरात, सकाळी</li>
      <li>PRON: या, ह्या, त्यांनी, आपल्या, त्या, त्यांच्या, मला, त्यांना, त्याने, त्याला</li>
      <li>PROPN: भारतातील, मुंबईत, भारतात, अमेरिकेत, डॉक्टरांच्या, डॉक्टरांनी, भारताच्या, गंगेच्या, मुंबईला, रविवारी</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: लोकांना, जगाला, देशवासीयांना, मानवाला, सर्वांप्रती</li>
      <li>PRON: आपल्याला, मला, याला</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>PROPN: भारताने</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: अभिमानाने, आत्मनिर्भरतेबाबत, उदाहरणामधून, कुटुंबांनी, प्रादुर्भावाशी, मनाशी, संकटानंतर</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: काळात, जगभरात, प्रगतीत, भारतातसुद्धा, संधीत, स्तरावर</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: उपस्थित, बंद, मोठे, मुख्य, मोठी, चांगले, उत्तर, भारतीय, दक्षिण, मोठ्या</li>
      <li>ADP: या, हा, असे, अशी, असा, अशा, चे, च्या, जैसे, यासारख्या</li>
      <li>DET: हे, सर्व, काही, इतर, अनेक, प्रत्येक, इतकी, पुरेसे, सगळं, आणखी</li>
      <li>NOUN: काम, मंदिर, किमी., पीक, पाणी, माहिती, वापर, प्रयत्न, केंद्र, लोक</li>
      <li>NUM: चौरस, चहा, पेठ, एक, एकक, लाख, अरब, अर्धी, अर्ध्या, एकर</li>
      <li>PRON: या, हे, ही, ते, मी, हा, तो, ती, जे, आम्ही</li>
      <li>PROPN: मुंबई, पाटील, मोहन, अनू, पुणे, जम्मू, भारत, गंगा, नवी, शिवाजी</li>
      <li>VERB: वसलेले, केला, केली, असलेले, केले, असलेल्या, करणे, असलेली, असलेला, झाले</li>
      <li>VERB-Conv: करणे, घेणे, पाहणे, होणे, असल्याने, जाणे, येणे, असणे, असलेले, देणे</li>
      <li>VERB-Fin: केला, केली, वसलेले, केले, करणे, झाले, वापरले, झाली, म्हटले, आले</li>
      <li>VERB-Inf: यायला</li>
      <li>VERB-Part: असला, असलेली, करणे, काढलेल्या, मिळालेला</li>
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
      <li>AUX-Fin: नाही</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX-Fin: आहे, आहेत, आहोत, होते</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>AUX: जाते, होते, जातो, जातात, शकतो, येते, शकते, शकतात, असते, होता</li>
      <li>AUX-Fin: जाते, होते, जातो, जातात, शकतो, येते, शकते, शकतात, असते, होता</li>
      <li>VERB: केला, होते, असते, करतात, केली, केले, करीत, होतो, येतात, करते</li>
      <li>VERB-Conv: घेण्यात, पोहचायचे, अडवीत, करायचा, करायचे, केला, केल्यानंतर, केल्याने, केल्यामुळे, केल्यावर</li>
      <li>VERB-Fin: केला, होते, असते, करतात, केली, केले, होतो, येतात, करते, करीत</li>
      <li>VERB-Inf: बदलत</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Conv: ऐकत, पाहत</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: होते, होती, होता, आले, आला, आली, गेले, जाते, गेली, होत्या</li>
      <li>AUX-Fin: होते, होती, होता, आले, आला, आली, गेले, जाते, गेली, होत्या</li>
      <li>VERB: केली, केले, झाले, झाली, झाला, होते, दिली, आले, होती, म्हणाले</li>
      <li>VERB-Conv: झाले, केली, केले, झाली, आढळली, उचलले, गाडली, गेल्यावर, घेतली, घेतले</li>
      <li>VERB-Fin: केली, केले, झाले, झाली, झाला, होते, दिली, होती, आले, सांगितले</li>
      <li>VERB-Part: आले, ऐकले, गेल्या, झाले, ठरवले</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: जाऊ, नका, नकोस, जा, नको</li>
      <li>VERB-Fin: करा, जाऊ, जा, घ्या, ठेवा, ये, दे, चला, द्या, राहा</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: घाला, म्हटले, पोहोचाल, वाचवा, जाणाऱ्या, पाहाण्यासाठी, आण, कर, करू, बघ</li>
      <li>VERB-Conv: पाहाण्यासाठी, रहाण्यासाठी</li>
      <li>VERB-Fin: घाला, म्हटले, पोहोचाल, वाचवा, आण, कर, करू, बघ, बघा, बोल</li>
      <li>VERB-Part: जाणाऱ्या</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: आहे, आहेत</li>
      <li>VERB-Fin: करायचा, करू, गमवावे, लागले</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: येईल, जाईल, असेल, जाऊ, येतील, जातील, शकेल, असतील, येऊ, असेलच</li>
      <li>AUX-Fin: येईल, जाईल, जाऊ, असेल, येतील, जातील, शकेल, असतील, येऊ, असेलच</li>
      <li>VERB: होईल, असेल, करतील, होतील, मिळेल, येईल, राहील, दिसेल, येतील, घेऊ</li>
      <li>VERB-Fin: होईल, असेल, करतील, होतील, मिळेल, येईल, राहील, दिसेल, येतील, घेऊ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: होते, होती, होता, आले, आला, आली, गेले, जाते, गेली, होत्या</li>
      <li>AUX-Fin: होते, होती, होता, आले, आला, आली, गेले, जाते, गेली, होत्या</li>
      <li>VERB: केली, केले, झाले, केला, झाली, झाला, होते, दिली, आले, होती</li>
      <li>VERB-Conv: घेण्यात, झाले, केली, केले, झाली, पोहचायचे, अडवीत, आढळली, उचलले, करायचा</li>
      <li>VERB-Fin: केली, केले, झाले, केला, झाली, झाला, होते, दिली, होती, आले</li>
      <li>VERB-Inf: करायचा, बदलत</li>
      <li>VERB-Part: आले, गेल्या</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: आहे, आहेत, नाही, जाते, होते, जातो, जातात, शकतो, नाहीत, येते</li>
      <li>AUX-Fin: आहे, आहेत, नाही, जाते, होते, जातो, जातात, शकतो, नाहीत, येते</li>
      <li>VERB: आहे, होते, असते, करतात, आहेत, होतो, करते, असतो, येतात, असतात</li>
      <li>VERB-Conv: घेतात, धरता, होतोच</li>
      <li>VERB-Fin: आहे, होते, असते, करतात, आहेत, होतो, करते, असतो, येतात, असतात</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: हे, या, असे, अवघे, कोट्यवधी, अशा, आपले, जी</li>
      <li>PRON: या, हे, ही, हा, ह्या, त्या, येथे, असे, अशी, असा</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: काही, अनेक, कमी, अधिक, सर्व, जास्त, प्रत्येक, इतर, फक्त, हे</li>
      <li>PRON: कोणी, कोणीच, परस्पर, एकमेकींकडे, काय, कुठे, कोणालाही, कोणीतरी, कोणीही, खूप</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: काय, कुठे, कसे, केव्हा, का, कोणत्याही, कोण, कसा, कोणत्या, कोणाला</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ते, मी, आपल्या, त्यांनी, तो, त्यांच्या, मला, ती, माझ्या, आम्ही</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: हे, ही, ते, जे, हा, तो, ह्या, जो, जी, ती</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: सर्व</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: एक, दोन, एका, तीन, हजार, चार, पाच, २२, दोन्ही, सहा</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: दुसऱ्या, पहिल्या, पहिले, दुसर्‍या, पहिली, प्रथम, तिसऱ्या, आठव्या, बाराव्या, दुसरे</li>
      <li>NUM: एका, आठव्या, दोन्ही, नववा, १४, १७</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: आहे, होते, जाते, शकतो, येते, जाऊ, आहोत, गेले, नाही, जातो</li>
      <li>AUX-Fin: आहे, होते, जाते, शकतो, येते, जाऊ, आहोत, गेले, नाही, जातो</li>
      <li>PRON: आपण, असे, आपल्याला, मी, आपला, आपल्या, मला, आपल्याकडे, आम्हा, आम्ही</li>
      <li>VERB: होते, केली, आहे, केले, केला, करतो, आले, झाले, गेलो, आलो</li>
      <li>VERB-Conv: केल्याने, केल्यामुळे, केल्यावर</li>
      <li>VERB-Fin: होते, केली, आहे, केले, केला, आले, करतो, झाले, गेलो, आलो</li>
      <li>VERB-Inf: यायला</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: होता, शकता, नका, पाहिजेत, आहेस, जाणाऱ्या, नकोस, नव्हता, जा, नाहीस</li>
      <li>AUX-Fin: होता, शकता, नका, पाहिजेत, आहेस, नकोस, नव्हता, जा, नाहीस, आले</li>
      <li>PRON: असा, कस, कसा, तुम्ही, यामुळे</li>
      <li>VERB: करा, जा, होता, घाला, जाता, ठेवा, म्हटले, घेता, घ्या, दे</li>
      <li>VERB-Conv: धरता, पाहाण्यासाठी, रहाण्यासाठी</li>
      <li>VERB-Fin: करा, जा, होता, घाला, जाता, ठेवा, म्हटले, घ्या, दे, पोहोचाल</li>
      <li>VERB-Part: जाणाऱ्या</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: आहे, आहेत, होते, नाही, होती, जाते, होता, आले, आला, जातात</li>
      <li>AUX-Fin: आहे, आहेत, होते, नाही, होती, जाते, होता, आले, आला, जातात</li>
      <li>PRON: त्या, ही, त्यात, त्यातील, या, याला, हे</li>
      <li>VERB: आहे, होते, केली, केले, झाले, झाली, केला, झाला, असते, दिली</li>
      <li>VERB-Conv: राहण्यासाठी, करण्यासाठी, असल्याने, पाहण्यासाठी, फिरण्यासाठी, घेण्यात, झाले, पोहचण्यासाठी, केली, केले</li>
      <li>VERB-Fin: आहे, होते, केले, केली, झाले, झाली, केला, झाला, असते, दिली</li>
      <li>VERB-Inf: बदलत</li>
      <li>VERB-Part: आले, गेल्या</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: असणे.</li>
</ul>

<ul>
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: असणे, येणे, शकणे, जाणे, पाहिजे, नको.</li>
<li>This corpus uses 5 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: असणे, जाणे, येणे, शकणे, पाहिजे.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (37)</li>
      <li>VERB--NOUN-ADP(हेदखील) (1)</li>
      <li>VERB--NOUN-Acc (57)</li>
      <li>VERB--NOUN-Nom (261)</li>
      <li>VERB--NOUN-Nom-ADP(या) (1)</li>
      <li>VERB--PRON (7)</li>
      <li>VERB--PRON-Acc (16)</li>
      <li>VERB--PRON-Nom (39)</li>
      <li>VERB-Conv--NOUN (14)</li>
      <li>VERB-Conv--NOUN-Acc (43)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(टोळक्‍यांनी) (1)</li>
      <li>VERB-Conv--NOUN-Nom (154)</li>
      <li>VERB-Conv--NOUN-Nom-ADP(ही) (1)</li>
      <li>VERB-Conv--PRON (4)</li>
      <li>VERB-Conv--PRON-Acc (7)</li>
      <li>VERB-Conv--PRON-Nom (16)</li>
      <li>VERB-Fin--NOUN (375)</li>
      <li>VERB-Fin--NOUN-ADP(या) (1)</li>
      <li>VERB-Fin--NOUN-ADP(हा) (1)</li>
      <li>VERB-Fin--NOUN-ADP(ही) (1)</li>
      <li>VERB-Fin--NOUN-Acc (799)</li>
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (2473)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(कर्मचारी) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(खालील) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(म्हणून) (3)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(हा) (7)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ही) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(हे) (1)</li>
      <li>VERB-Fin--PRON (71)</li>
      <li>VERB-Fin--PRON-Acc (351)</li>
      <li>VERB-Fin--PRON-Acc-ADP(विश्‍वस्त) (1)</li>
      <li>VERB-Fin--PRON-Nom (654)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Nom (3)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (62)</li>
      <li>VERB--NOUN-Acc (100)</li>
      <li>VERB--NOUN-Nom (580)</li>
      <li>VERB--NOUN-Nom-ADP(असा) (1)</li>
      <li>VERB--NOUN-Nom-ADP(म्हणून) (1)</li>
      <li>VERB--NOUN-Nom-ADP(समोर) (1)</li>
      <li>VERB--NOUN-Nom-ADP(हा) (1)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (16)</li>
      <li>VERB--PRON-Nom (15)</li>
      <li>VERB-Conv--NOUN (38)</li>
      <li>VERB-Conv--NOUN-Acc (94)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(साथ) (1)</li>
      <li>VERB-Conv--NOUN-Nom (431)</li>
      <li>VERB-Conv--NOUN-Nom-ADP(म्हणून) (4)</li>
      <li>VERB-Conv--PRON (2)</li>
      <li>VERB-Conv--PRON-Acc (14)</li>
      <li>VERB-Conv--PRON-Nom (14)</li>
      <li>VERB-Fin--NOUN (184)</li>
      <li>VERB-Fin--NOUN-ADP(हा) (1)</li>
      <li>VERB-Fin--NOUN-Acc (344)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(बरोबर) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(हा) (2)</li>
      <li>VERB-Fin--NOUN-Nom (1711)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(का) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(म्हण) (3)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(म्हणून) (8)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(हा) (3)</li>
      <li>VERB-Fin--PRON (38)</li>
      <li>VERB-Fin--PRON-Acc (82)</li>
      <li>VERB-Fin--PRON-Nom (59)</li>
      <li>VERB-Inf--NOUN (6)</li>
      <li>VERB-Inf--NOUN-Acc (10)</li>
      <li>VERB-Inf--NOUN-Nom (53)</li>
      <li>VERB-Inf--PRON-Acc (3)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Nom (12)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-Acc (29)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Acc (11)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Acc (28)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON-Acc (4)</li>
      <li>VERB-Fin--NOUN (9)</li>
      <li>VERB-Fin--NOUN-Acc (207)</li>
      <li>VERB-Fin--NOUN-Dat (3)</li>
      <li>VERB-Fin--NOUN-Nom (11)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc (95)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN-Acc (3)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>det:poss</a>, <a>nmod:poss</a>, <a>nsubj:pass</a></li>
<li>The following 10 relation types are not used in this corpus at all: <a>csubj</a>, <a>expl</a>, <a>appos</a>, <a>clf</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
