---
layout: base
title:  'Statistics of nsubj:cop in UD_Sanskrit-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit-UFAL: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="sa_ufal-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sa_ufal-dep-nsubj-pass.html">nsubj:pass</a></tt>.

19 nodes (1%) are attached to their parents as `nsubj:cop`.

10 instances of `nsubj:cop` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84210526315789.

The following 11 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (6; 32% instances), <tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="sa_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sa_ufal-pos-DET.html">DET</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:cop	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nsubj:cop	color:blue
1	अनन्त	अनन्त	ADJ	_	Compound=Yes	2	amod	_	Translit=ananta|LTranslit=ananta|Gloss=without-limit
2	पारं	पार	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	Translit=pāraṁ|LTranslit=pāra|Gloss=boundary,shore
3	किल	किल	ADV	_	_	4	advmod	_	Translit=kila|LTranslit=kila|Gloss=apparently
4	शब्द	शब्द	NOUN	_	Compound=Yes	5	nmod	_	Translit=śabda|LTranslit=śabda|Gloss=speech
5	शास्त्रम्	शास्त्रम	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	nsubj:cop	_	Translit=śāstram|LTranslit=śāstra|Gloss=science
6	स्वल्पं	स्वल्प	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	1	conj	_	Translit=svalpaṁ|LTranslit=svalpa|Gloss=short
7	तथा	तथा	ADV	_	PronType=Dem	6	advmod	_	Translit=tathā|LTranslit=tathā|Gloss=so
8	आयुः	आयुस्	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:cop	_	Translit=āyuḥ|LTranslit=āyus|Gloss=age
9	वह	वह	ADJ	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	1	conj	_	Translit=vaha|LTranslit=vaha|Gloss=bring
10	वः	युष्मद्	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	9	iobj	_	Translit=vaḥ|LTranslit=yuṣmad|Gloss=you
11	च	च	CCONJ	_	_	9	cc	_	Translit=ca|LTranslit=ca|Gloss=and
12	विघ्नाः	विघ्न	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	SpaceAfter=No|Translit=vighnāḥ|LTranslit=vighna|Gloss=obstacles
13	।	।	PUNCT	_	_	16	punct	_	Translit=.|LTranslit=.|Gloss=.
14	सारं	सार	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	16	nsubj:cop	_	Translit=sāraṁ|LTranslit=sāra|Gloss=core
15	ततो	तद्	ADV	_	PronType=Dem	16	advmod	_	Translit=tato|LTranslit=tad|Gloss=so
16	ग्राह्यम्	ग्रह्	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Pass	1	parataxis	_	Translit=grāhyam|LTranslit=grah|Gloss=to-be-taken
17	अप	अप	ADV	_	_	18	advmod	_	Translit=apa|LTranslit=apa|Gloss=outside
18	अस्य	अस्	VERB	_	VerbForm=Conv	16	advcl	_	Translit=asya|LTranslit=as|Gloss=having-rejected
19	फल्गु	फल्गु	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	18	obj	_	Translit=phalgu|LTranslit=phalgu|Gloss=insignificant
20	हंसैः	हंस	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	22	orphan	_	Translit=haṁsaiḥ|LTranslit=haṁsa|Gloss=swans
21	यथा	यथा	SCONJ	_	_	22	mark	_	Translit=yathā|LTranslit=yathā|Gloss=as
22	क्षीरम्	क्षीर	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	16	advcl	_	Translit=kṣīram|LTranslit=kṣīra|Gloss=milk
23	इव	इव	ADV	_	_	22	orphan	_	Translit=iva|LTranslit=iva|Gloss=how
24	अम्बु	अम्बु	NOUN	_	Compound=Yes	25	nmod	_	Translit=ambu|LTranslit=ambu|Gloss=water
25	मध्यात्	मध्य	NOUN	_	Case=Abl|Gender=Masc|Number=Sing	22	orphan	_	Translit=madhyāt|LTranslit=madhya|Gloss=middle
26	॥	॥	PUNCT	_	_	16	punct	_	Translit=:|LTranslit=:|Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	आवयोः	अस्मद्	PRON	_	Case=Gen|Number=Dual|Person=1|PronType=Prs	4	nmod:poss	_	Translit=āvayoḥ|LTranslit=asmad|Gloss=of-the-two-of-us
2	भक्षित	भक्ष्	VERB	_	Compound=Yes|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	_	Translit=bhakṣita|LTranslit=bhakṣ|Gloss=eaten
3	शेष	शेष	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj:cop	_	Translit=śeṣa|LTranslit=śeṣa|Gloss=remainder
4	आहारः	आहार	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Translit=āhāraḥ|LTranslit=āhāra|Gloss=food
5	अस्ति	अस्	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	LId=अस्-१|Translit=asti|LTranslit=as|Gloss=is
6	एव	एव	ADV	_	_	3	advmod	_	Translit=eva|LTranslit=eva|Gloss=just
7	।	।	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


