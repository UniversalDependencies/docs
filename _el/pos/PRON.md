---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

## PRON: pronoun

Pronouns are words that substitute for nouns  or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. Τhey never occur with the noun for which they stand and they cannot be replaced with a synonymous nominal phrase; these facts offer a criterion for setting determiners apart from pronouns.

*που* is assigned the tag <code>PRON</code> if it refers to a noun, e.g. *Έχουμε πολλές πληροφορίες, που*.PRON *δεν οδηγούν όμως πουθενά* "we have much information that, however, leads to nowhere". However, if *που* does not refer to a noun then:

  - it is assigned the tag <code>SCONJ</code> when: 
    - it introduces a  complement of saying or sense verbs  (criterion: in this case, it can be replaced with the word *ότι* with somewhat different implications), e.g., *Σε είδα που τον κοίταζες.* "I saw that you watched him.",  *Δεν άκουσες που είπε: «Ευχαριστώ, ωραία μου κυρία»;* "Haven't you heard him saying "Thanks my fair lady"?"  
    - it introduces a temporal clause together with the [ADP]() *μετά*  (criterion: in this case, the multiword conjunction *μετά που* can be replaced with the [ADP]() *αφού* resulting into different style probably), e.g., *Τον είδα μετά που χώρισε.* "I met him after he got divorced." *μετά* depends on *που* with the dependency relation [fixed]().
  
  - it is assigned the tag <code>CCONJ</code> when it introduces an etiological clause  (criterion: in this case, it can be replaced with the word *γιατί* resulting into different style probably), e.g., *Δεν σε χωνεύει που έρχεσαι τακτικά στο Μοναστήρι.* "He does not like you because you are regular to the Monastery."
    
 
### Examples

*	interrogative pronouns in direct and in indirect questions when there is a nominal target: *ποιος* / *pios* "who", *πόσος* / *posos* "how many/much", *τι* / *ti* "what", e.g., Direct questions: *Ποιο/Πόσο/Τι θέλεις;* / *Pio/Poso/What want.2SG*  "which/how much/what do you want?" Indirect questions:*έχω μείνει με την απορία τί στο καλό της είπες* "I am left wtih the question what on earth you told her"
* personal pronouns: both strong and weak types (clitics), e.g., the weak types *του το* in *του το έδωσα* / *tou to edosa* "I gave it to him"
*	possessive pronouns: weak types, e.g., *μου* in *το σπίτι μου* / *to spiti mou* "my house"
* reflexive pronouns: *εαυτός* / *eaftos* "self"
*	relative pronouns <code>PronType=Rel</code>: *οποίος* / *opios* "who"


 Greek pronouns inflect for [el-feat/Gender](), [el-feat/Number]() and [el-feat/Case](). 
 


Several words that traditionally have been classified as pronouns are classified as <code>DET</code> in UD2:

* demonstrative pronouns (<code>PronType=Dem</code>): *αυτός* / *aftos* "this", *εκείνος* / *ekinos* "that", *(ε)τούτος* / *(e)toutos* "this/that", *τέτοιος* / *tetios* "such", *τόσος* / *tosos* "this/that many/much, so/as", 
*   indefinite pronouns: 
    *   (<code>PronType=Ind</code>) *άλλος* / *alos* "other", *κάποιος* / *kapios* "somebody", *κάτι* / *kati* "some"
    *   (<code>PronType=Tot</code>) *κάθε* / *kathe* "every", *καθένας* / *kathenas* "each one"
    *   (<code>PronType=Ind/Neg</code>) *κανείς (κανένας)*  /*kanis (kanenas)* "nobody", *τίποτα/ε* / *tipota/e* "nothing/anything"
*   interrogative pronouns when followed by a noun (<code>PronType=Int</code>): *ποιος* / *pios* "who", *πόσος* / *posos* "how many/much", *τι* / *ti* "what kind", e.g., *ποιο/πόσο/τι φαγητό θέλεις;* / *pio/poso/ti fagito thelis?* "which/how much/what kind of food do you want?"
*   relative pronouns when followed by a noun (<code>PronType=Rel</code>): *όποιος/-δήποτε* / *opios/-dipote* "anyone/whoever", *όσος/-δήποτε* / *osos/-dipote* "no matter how many/much", *ό,τι/-δήποτε* / *oti/-dipote* "whichever"
*  (<code>PronType=Εmp</code>) *ίδιος* / *idios* "the same"


### References

Holton, David, Peter Mackridge & Irene Philippaki-Warburton. 1997. *Greek: A Comprehensive Grammar of the Modern Language*. Routledge, London 1997; reprinted 1999, 2002 & 2004. 

Κλαίρης, Χρήστος  & Γεώργιος Μπαμπινώτης. 2001. *Γραμματική της Νέας Ελληνικής* Τόμος Γ’. 2η έκδοση. Αθήνα: Ελληνικά Γράμματα. 

Τζάρτζανος, Αχιλλέας, 2002. *Νεοελληνική Σύνταξις της Κοινής Δημοτικής*. Αθήνα: Εκδόσεις Κυριακίδη. σελ. 225.
<!-- Interlanguage links updated So kvě 14 19:01:53 CEST 2022 -->
