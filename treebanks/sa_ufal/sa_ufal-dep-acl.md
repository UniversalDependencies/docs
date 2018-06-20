---
layout: base
title:  'Statistics of acl in UD_Sanskrit-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit-UFAL: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="sa_ufal-dep-acl-relcl.html">acl:relcl</a></tt>.

32 nodes (2%) are attached to their parents as `acl`.

19 instances of `acl` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34375.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt> (17; 53% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt> (4; 13% instances), <tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (4; 13% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sa_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-NUM.html">NUM</a></tt>-<tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	कः	किम्	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	0	root	_	Translit=kaḥ|LTranslit=kim|Gloss=which
2	अर्थः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj:cop	_	Translit=arthaḥ|LTranslit=artha|Gloss=purpose
3	पुत्रेण	पुत्र	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	Translit=putreṇa|LTranslit=putra|Gloss=son
4	जातेन	जन्	VERB	_	Case=Ins|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	_	Translit=jātena|LTranslit=jan|Gloss=born
5	यः	यद्	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	Translit=yaḥ|LTranslit=yad|Gloss=who
6	न	न	PART	_	Polarity=Neg	7	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	विद्वान्	विद्वस्	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	acl:relcl	_	Translit=vidvān|LTranslit=vidvas|Gloss=intelligent
8	न	न	PART	_	Polarity=Neg	9	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	भक्तिमान्	भक्तिमत्	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	Translit=bhaktimān|LTranslit=bhaktimat|Gloss=obedient
10	अस्ति	अस्	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No|LId=अस्-१|Translit=asti|LTranslit=as|Gloss=is
11	॥	॥	PUNCT	_	_	1	punct	_	Translit=:|LTranslit=:|Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	सः	तद्	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	Translit=saḥ|LTranslit=tad|Gloss=the
2	राजा	राजन्	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	Translit=rājā|LTranslit=rājan|Gloss=king
3	तत्	तद्	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	Translit=tat|LTranslit=tad|Gloss=this
4	आकर्ण्य	आ-कर्ण	ADJ	_	VerbForm=Conv	2	acl	_	Translit=ākarṇya|LTranslit=ā-karṇa|Gloss=having-listened-to
5	विष्णुशर्माणम्	विष्णुशर्माण	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	Translit=viṣṇuśarmāṇam|LTranslit=viṣṇuśarmāṇa|Gloss=Vishnusharma
6	आहूय	आहू	VERB	_	VerbForm=Conv	7	advcl	_	Translit=āhūya|LTranslit=āhū|Gloss=after-having-summoned
7	प्रोवाच	प्र-वच्	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Translit=provāca|LTranslit=pra-vac|Gloss=said
8	।	।	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 acl	color:blue
1	यस्या	यद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Rel	3	acl	_	Translit=yasyā|LTranslit=yad|Gloss=of-which
2	अर्थाः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	nsubj:cop	_	Translit=arthāḥ|LTranslit=artha|Gloss=wealth
3	तस्य	तद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Dem	0	root	_	Translit=tasya|LTranslit=tad|Gloss=his
4	मित्राणि	मित्र	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	3	nsubj:cop	_	Translit=mitrāṇi|LTranslit=mitra|Gloss=friends
5	यस्या	यद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Rel	7	acl	_	Translit=yasyā|LTranslit=yad|Gloss=of-which
6	अर्थाः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj:cop	_	Translit=arthāḥ|LTranslit=artha|Gloss=wealth
7	तस्य	तद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Dem	3	conj	_	Translit=tasya|LTranslit=tad|Gloss=his
8	बान्धवाः	बान्धव	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj:cop	_	SpaceAfter=No|Translit=bāndhavāḥ|LTranslit=bāndhava|Gloss=buddies,family
9	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


