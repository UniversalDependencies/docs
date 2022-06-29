---
layout: postag
title: 'DET'
shortdef: 'determiner'
---


## SCONJ: subordinating conjunction

### Definition

A subordinating conjunction is a conjunction that links constructions by making one of them a constituent of the other. The subordinating conjunction typically marks the incorporated constituent which has the status of a (subordinate) clause.

*που* and *να* are used in several ways:
- *που* is assigned the tag <code>PRON</code> if it refers to a noun, e.g. *Έχουμε πολλές πληροφορίες, που*.PRON *δεν οδηγούν όμως πουθενά* "we have much information that, however, leads to nowhere". 
  - it is assigned the tag <code>SCONJ</code> when: 
    	- it introduces a  complement of saying or sense verbs  (criterion: in this case, it can be replaced with the word *ότι* with somewhat different implications), e.g., *Σε είδα που τον κοίταζες.* "I saw that you watched him.",  *Δεν άκουσες που είπε: «Ευχαριστώ, ωραία μου κυρία»;* "Haven't you heard him saying "Thanks my fair lady"?"  
    	- it introduces a temporal clause together with the [ADP]() *μετά*  (criterion: in this case, the multiword conjunction *μετά που* can be replaced with the [ADP]() *αφο΄ύ* resulting into different style probably), e.g., *Τον είδα μετά που χώρισε.* "I met him after he got divorced." *μετά* depends on *που* with the dependency relation [fixed]().
    	- 
- *να* is assigned the tag <code>SCONJ</code> when it introduces  subordinate clauses that  function as:
   -	verb arguments, e.g., *Του είπα <b>να</b> έρθει*.[ccomp]() *εδώ΄* "I told him <b>to</b> come.[ccomp]()  here",   *Το Λιμενικό είναι και το μόνο ικανό <b>να</b> ξεδιαλύνει.*[xcomp]() *την υπόθεση* "Only Maritime Police is able <b>to</b> shed.[xcomp]() light on this case",    *Έτυχε <b>να</b> τον συναντήσετε.*[csubj]() *ποτέ μόνο του;* Lit. happened to him meet ever on his own.
   -	clausal nominal modifiers e.g. *Η μόνη δυνατότητα <b>να</b> πλευρίσει.*[acl]() *σκάφος στην περιοχή είναι η Σκάλα Ωρωπού.*  "The only possibility <b>that</b> a boat docks.[acl]() in this area is the port of Skala Oropou"
	-  goal denoting clauses where *να* or  *για να* introduce the clause; *για* is tagged <code>ADP</code> and depends on *να* with the [fixed]() dependency, e.g., *Σηκώνεται <b>για</b>*.<code>ADP</code> *<b>να</b> με υποδεχτεί.* [advcl]() "He rises <b>to</b> welcome.[advcl]() me". 
   -  all other cases where clauses introduced by *να* function as adverbial modifiers and *να* co-occurs with other uniflected words, e.g.,  *αντί να, δίχως να, που να, πριν να, σαν να, χωρίς να, ώσπου να,  ώστε να*. The uniflected words are assigned their original tags and depend on *να* with the [fixed]() dependency, e.g.,  <b>Αντί</b>.[ADP]().[fixed]() <b>να</b> *της δώσει*.[advcl]() *τα παπούτσια στο χέρι, έκανε και παιδί μαζί της.* "<b>Rather than</b> sending.[advcl]() her packing, he had a child with her", *Με ακούει* <b>δίχως</b>.[ADP]().[fixed]() <b>να</b> *με διακόψει*.[advcl]() *με ερωτήσεις* "He listens to me <b>without</b> interrupting.[advcl]() me with questions", *τη ρωτάω*, <b>χωρίς</b>.<code>ADP</code>.[fixed]()   <b>να </b> μπω.[advcl]()  σε συζήτηση για την ανεπάρκεια του σιναφιού μας* "I ask her <b>without</b> opening.[advcl]()  a discussion about our trade's insufficiency"
-  *να* is tagged [AUX]() when:	
	- It introduces the verb of a main clause, e.g., <b>Να</b>.[AUX]()  *έρθεις*.[root]() *γρήγορα* "Come early.",  *Ούτε* <b>να</b>.[AUX]()   *τ' ακούσει*.[root]() "He would not even hear it."
	- When it  occurs in relative clauses after the relativisers *που*, *o οποίος*, e.g.,  *Δεν υπάρχει τίποτα παραπάνω* <b>που</b>.[PRON]() <b>να</b>.[AUX]() έχει ανακαλύψει η άλλη δυάδα "there is nothing more that.[PRON]()  the other couple would have discovered",  *Στη συνέχεια γράψτε μια συνάρτηση* <b>η οποία</b>. [PRON]() <b>να</b>.[AUX]()  *τυπώνει αυτά τα δεδομένα* "Next, write a function that.[PRON]() will print the data." 


- elsewhere [PART](), e.g.,  *Λόλα*, <b>να</b> *ένα μήλο* "Lola, here is an apple."


For coordinating conjunctions, see [CCONJ]().

## Examples

- complementizers, like *αν* / *an* "if", *άρα, αφού* / *ara, afou* "since/therefore", *γιατί* / *giati* "why/because", *ενώ* / *eno* "while", *καθώς* / *kathos* "as/while", *μήπως, ότι, πως* / *mipos, oti, pos* "that", *ώστε* / *oste* "so as", *ώσπου* / *ospou* "until"
-	adverbial clause introducers, like *όταν* / *otan* "when", *αφότου* / *afotou* "since", *πριν* / *prin* "before", *μόλις* / *molis* "just, as soon as" (when introducing a clause, not a nominal)
-	interrogative pronouns *ποιος* / *pios* "who", *πόσος* / *posos* "how many/much", *τι* / *ti* "what kind of" that introduce an indirect question that serves as an argument of a verb, e.g., *ρώτησα ποιο/πόσο/τι θέλεις;* / *rotisa pio/poso/ti theleis* "I asked which/how much/what do you want?"



## References

Mackridge, Peter. 1985. *The Modern Greek Language. A Descriptive Analysis of Standard Modern Greek.* Oxford University Press, Oxford 1985. 

https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/

<!-- Interlanguage links updated So kvě 14 19:01:57 CEST 2022 -->
