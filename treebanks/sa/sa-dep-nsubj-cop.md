---
layout: base
title:  'Statistics of nsubj:cop in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="sa-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sa-dep-nsubj-pass.html">nsubj:pass</a></tt>.

23 nodes (1%) are attached to their parents as `nsubj:cop`.

13 instances of `nsubj:cop` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73913043478261.

The following 10 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="sa-pos-PRON.html">PRON</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (6; 26% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="sa-pos-ADV.html">ADV</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="sa-pos-DET.html">DET</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:cop	color:blue
1	यस्या	यद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Rel	3	acl	_	Translit=yasyā|LTranslit=yad|Gloss=of-which
2	अर्थाः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	nsubj:cop	_	Translit=arthāḥ|LTranslit=artha|Gloss=wealth
3	तस्य	तद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Dem	0	root	_	Translit=tasya|LTranslit=tad|Gloss=his
4	मित्राणि	मित्र	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	3	nsubj:cop	_	Translit=mitrāṇi|LTranslit=mitra|Gloss=friends
5	यस्या	यद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Rel	7	acl	_	Translit=yasyā|LTranslit=yad|Gloss=of-which
6	अर्थाः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj:cop	_	Translit=arthāḥ|LTranslit=artha|Gloss=wealth
7	तस्य	तद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Dem	3	conj	_	Translit=tasya|LTranslit=tad|Gloss=his
8	बान्धवाः	बान्धव	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj:cop	_	SpaceAfter=No|Translit=bāndhavāḥ|LTranslit=bāndhava|Gloss=buddies,family
9	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	किन्तु	किन्तु	ADV	_	_	8	advmod	_	Translit=kintu|LTranslit=kintu|Gloss=nevertheless
2	त्वत्	त्वद्	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	3	nmod:poss	_	Translit=tvat|LTranslit=tvad|Gloss=your
3	प्रार्थना	प्रार्थना	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:cop	_	Translit=prārthanā|LTranslit=prārthanā|Gloss=request
4	सिद्धि	सिद्ध	ADJ	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	Translit=siddhi|LTranslit=siddha|Gloss=accomplished
5	अर्थम्	अर्थ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	Translit=artham|LTranslit=artha|Gloss=for-the-reason
6	सरस्वती	सरस्वती	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nmod	_	Translit=sarasvatī|LTranslit=sarasvatī|Gloss=Sarasvati
7	विनोदं	विनोद	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	Translit=vinodaṁ|LTranslit=vinoda|Gloss=game
8	करिष्यामि	कृ	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=kariṣyāmi|LTranslit=kr̥|Gloss=I-will-do
9	।	।	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	आवयोः	अस्मद्	PRON	_	Case=Gen|Number=Dual|Person=1|PronType=Prs	4	nmod:poss	_	Translit=āvayoḥ|LTranslit=asmad|Gloss=of-the-two-of-us
2	भक्षित	भक्ष्	NOUN	_	Tense=Past|VerbForm=Part|Voice=Pass	3	compound	_	Translit=bhakṣita|LTranslit=bhakṣ|Gloss=food
3	शेष	शेष	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj:cop	_	Translit=śeṣa|LTranslit=śeṣa
4	आहारः	आहार	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Translit=āhāraḥ|LTranslit=āhāra|Gloss=food
5	अस्ति	अस्	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	LId=अस्-१|Translit=asti|LTranslit=as|Gloss=is
6	एव	एव	ADV	_	_	3	advmod	_	Translit=eva|LTranslit=eva|Gloss=just
7	।	।	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


