---
layout: base
title:  'Statistics of csubj in UD_Malayalam-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Malayalam-UFAL: Relations: `csubj`

This relation is universal.

13 nodes (1%) are attached to their parents as `csubj`.

13 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76923076923077.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (7; 54% instances), <tt><a href="ml_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="ml_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="ml_ufal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="ml_ufal-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	നിങ്ങൾ	നിങ്ങൾ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	Translit=niṅṅaḷ̕|LTranslit=niṅṅaḷ̕
2	എന്ത്	എന്ത്	PRON	_	Case=Nom|PronType=Int	3	obl	_	Translit=ent|LTranslit=ent
3	ഉപയോഗിക്കുന്നു	ഉപയോഗിക്കുക	VERB	_	Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	Translit=upayōgikkunnu|LTranslit=upayōgikkuka
4	എന്നത്	എന്ന്	SCONJ	_	_	3	mark	_	Translit=ennat|LTranslit=enn
5	കണക്കിലെടുക്കാതെ	കണക്കിലെടുക്കാതെ	VERB	_	Polarity=Neg|VerbForm=Inf	11	acl	_	SpaceAfter=No|Translit=kaṇakkileṭukkāte|LTranslit=kaṇakkileṭukkāte
6	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
7	നിങ്ങൾ	നിങ്ങൾ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	Translit=niṅṅaḷ̕|LTranslit=niṅṅaḷ̕
8	ട്രാക്ക്	ട്രാക്ക്	NOUN	_	Animacy=Inan|Case=Nom|Number=Sing	9	compound	_	Translit=ṭrākk|LTranslit=ṭrākk
9	ചെയ്യേണ്ട	ചെയ്യുക	ADJ	_	VerbForm=Part	11	amod	_	Translit=ceyyēṇṭa|LTranslit=ceyyuka
10	ചില	ചില	ADJ	_	_	11	amod	_	Translit=cila|LTranslit=cila
11	ഇനങ്ങൾ	ഇനം	NOUN	_	Animacy=Inan|Case=Nom|Number=Plur	0	root	_	Translit=inaṅṅaḷ̕|LTranslit=inaṁ
12	ഉണ്ട്	ഉണ്ട്	AUX	_	Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	SpaceAfter=No|Translit=uṇṭ|LTranslit=uṇṭ
13	:	:	PUNCT	_	_	11	punct	_	Translit=:|LTranslit=:

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 csubj	color:blue
1	അതുകൊണ്ട്	അതുകൊണ്ട്	ADV	_	_	12	advmod	_	Translit=atukoṇṭ|LTranslit=atukoṇṭ
2	അധികാരത്തിൽനിന്ന	അധികാരം	NOUN	_	Animacy=Inan|Case=All|Number=Sing	5	obl	_	Translit=adhikārattil̕ninna|LTranslit=adhikāraṁ
3	ഉം	ഉം	PART	_	_	2	advmod:emph	_	Translit=uṁ|LTranslit=uṁ
4	ഇടയ്ക്കിടെ	ഇടയ്ക്കിടെ	ADV	_	_	5	advmod	_	Translit=iṭaykkiṭe|LTranslit=iṭaykkiṭe
5	മാറിനില്ക്കുന്നത്	മാറിനില്ക്കുക	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=Act	12	csubj	_	Translit=māṟinilkkunnat|LTranslit=māṟinilkkuka
6	രാഷ്ട്രീയ	രാഷ്ട്രീയം	ADJ	_	_	7	amod	_	Translit=rāṣṭrīya|LTranslit=rāṣṭrīyaṁ
7	പാർട്ടികളുടെ	പാർട്ടി	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	8	nmod:poss	_	Translit=pāṟ̕ṭṭikaḷuṭe|LTranslit=pāṟ̕ṭṭi
8	വിശുദ്ധീകരണത്തിന	വിശുദ്ധീകരണം	NOUN	_	Animacy=Inan|Case=Dat|Number=Sing	12	obl	_	Translit=viśuddhīkaraṇattina|LTranslit=viśuddhīkaraṇaṁ
9	ഉം	ഉം	CCONJ	_	_	8	cc	_	Translit=uṁ|LTranslit=uṁ
10	ശക്തീകരണത്തിന	ശക്തീകരണം	NOUN	_	Animacy=Inan|Case=Dat|Number=Sing	8	conj	_	Translit=śaktīkaraṇattina|LTranslit=śaktīkaraṇaṁ
11	ഉം	ഉം	CCONJ	_	_	10	cc	_	Translit=uṁ|LTranslit=uṁ
12	നല്ലത്	നല്ലത്	ADJ	_	_	0	root	_	Translit=nallat|LTranslit=nallat
13	ആണ്	ആക്	AUX	_	Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	Translit=āṇ|LTranslit=āk
14	.	.	PUNCT	_	_	12	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 csubj	color:blue
1	രുചികരമായ	രുചികരം	ADJ	_	_	2	amod	_	Translit=rucikaramāya|LTranslit=rucikaraṁ
2	ഭവനങ്ങളിൽ	ഭവനങ്ങള്	PROPN	_	Animacy=Inan|Case=Loc|Number=Sing	6	obl	_	Translit=bhavanaṅṅaḷil̕|LTranslit=bhavanaṅṅaḷ
3	അരകപ്പ്	അരകപ്പ്	NOUN	_	Animacy=Inan|Case=Nom|Number=Sing	4	nmod	_	Translit=arakapp|LTranslit=arakapp
4	കുക്കികൾ	കുക്കി	NOUN	_	Animacy=Inan|Case=Acc|Number=Plur	6	obj	_	Translit=kukkikaḷ̕|LTranslit=kukki
5	പാചകം	പാചകം	NOUN	_	Animacy=Inan|Case=Nom|Number=Sing	6	compound	_	Translit=pācakaṁ|LTranslit=pācakaṁ
6	ചെയ്യുന്നത്	ചെയ്യുക	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=Act	8	csubj	_	Translit=ceyyunnat|LTranslit=ceyyuka
7	വളരെ	വളരെ	ADV	_	_	8	advmod	_	Translit=vaḷare|LTranslit=vaḷare
8	നല്ലത്	നല്ലത്	NOUN	_	Animacy=Inan|Case=Nom|Number=Sing	0	root	_	Translit=nallat|LTranslit=nallat
9	ആണ്	ആക്	AUX	_	Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	Translit=āṇ|LTranslit=āk
10	-	-	PUNCT	_	_	8	punct	_	Translit=-|LTranslit=-
11	ഇത്	ഇത്	PRON	_	Animacy=Inan|Case=Nom|Deixis=Prox|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Translit=it|LTranslit=it
12	വളരെ	വളരെ	ADV	_	_	14	advmod	_	Translit=vaḷare|LTranslit=vaḷare
13	ബുദ്ധിമുട്ടുള്ള	ബുദ്ധിമുട്ട്	ADJ	_	_	14	amod	_	Translit=buddhimuṭṭuḷḷa|LTranslit=buddhimuṭṭ
14	കാര്യം	കാര്യം	NOUN	_	Animacy=Inan|Case=Nom|Number=Sing	8	parataxis	_	Translit=kāryaṁ|LTranslit=kāryaṁ
15	അല്ല	ആക്	AUX	_	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin	14	cop	_	Translit=alla|LTranslit=āk
16	.	.	PUNCT	_	_	8	punct	_	SpacesAfter=\n|Translit=.|LTranslit=.

~~~


