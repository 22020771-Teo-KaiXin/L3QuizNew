import React, { useState } from 'react';
import { Text, View, TextInput, Image, Button, Alert, ScrollView, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 50,
        backgroundColor: '#f5f5f5'
    },

    headerContainer: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 5,
        backgroundColor: '#F5F5DC',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bowlIcon: {
        marginRight: 15,
        marginLeft: 15
    },

    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    welcomeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    welcomeText: {
        fontSize: 19,
        fontWeight: 'bold'
    },

    cloverIcon: {
        marginLeft: 5
    },

    inputBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },

    inputLabel: {
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textInput: {
        borderWidth: 1,
        width: 330,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 20,
        color: 'white',
        borderColor: 'purple',
        backgroundColor: 'black',
    },

    questionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 40,
        padding: 10,
        borderWidth: 3,
        borderColor: 'purple',
        backgroundColor: '#D9C6E5',
        justifyContent: 'space-evenly',
        width: 400,
        alignSelf: 'center',
    },

    questionText: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 15,
        textDecorationLine: 'underline',
    },

    image: {
        width: '100%',
        height: 300,
        marginVertical: 10,
    },

    pickerSelect: {
        inputAndroid: {
            height: 40,
            paddingHorizontal: 10,
            borderWidth: 2,
            width: 350,
            marginVertical: 20,
            backgroundColor: 'black',
            alignSelf: 'center',
            color: 'white',
        },
    },
});

const InputBox = ({ label, onChangeText }) => {
    return (
        <View style={styles.inputBoxContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const Question = ({ question, image, options, onValueChange }) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <Image source={image} style={styles.image} />
            <RNPickerSelect
                onValueChange={onValueChange}
                items={options}
                style={styles.pickerSelect}
            />
        </View>
    );
};

const MyApp = () => {
    const [name, setName] = useState('');
    const [question1Answer, setQuestion1Answer] = useState(null);
    const [question2Answer, setQuestion2Answer] = useState(null);
    const [question3Answer, setQuestion3Answer] = useState(null);
    const [question4Answer, setQuestion4Answer] = useState(null);
    const [question5Answer, setQuestion5Answer] = useState(null);
    const [question6Answer, setQuestion6Answer] = useState(null);
    const [question7Answer, setQuestion7Answer] = useState(null);
    const [question8Answer, setQuestion8Answer] = useState(null);
    const [question9Answer, setQuestion9Answer] = useState(null);
    const [question10Answer, setQuestion10Answer] = useState(null);
    const [question11Answer, setQuestion11Answer] = useState(null);
    const [question12Answer, setQuestion12Answer] = useState(null);
    const [question13Answer, setQuestion13Answer] = useState(null);
    const [question14Answer, setQuestion14Answer] = useState(null);
    const [question15Answer, setQuestion15Answer] = useState(null);

    const correctAnswers = {
        question1: 'Cheese Pizza',
        question2: 'Aglio E Olio Pasta',
        question3: 'Pho',
        question4: 'Pepperoni Pizza',
        question5: 'Kimchi Jjigae',
        question6: 'Chicken Rice',
        question7: 'Miso Ramen',
        question8: 'Tomato Risotto',
        question9: 'Japanese Curry Udon',
        question10: 'Roti Prata',
        question11: 'Taco',
        question12: 'Salmon',
        question13: 'Cookies & Cream Ice Cream',
        question14: 'Vanilla Ice Cream',
        question15: 'Italy'
    };

    const options = [
        { label: 'Cheese Pizza', value: 'Cheese Pizza' },
        { label: 'Pepperoni Pizza', value: 'Pepperoni Pizza' },
        { label: 'Chicken Rice', value: 'Chicken Rice' },
        { label: 'Tomato Risotto', value: 'Tomato Risotto' },
        { label: 'Kimchi Jjigae', value: 'Kimchi Jjigae' },
        { label: 'Aglio E Olio Pasta', value: 'Aglio E Olio Pasta' },
        { label: 'Japanese Curry Udon', value: 'Japanese Curry Udon' },
        { label: 'Miso Ramen', value: 'Miso Ramen' },
        { label: 'Pho', value: 'Pho' },
        { label: 'Roti Prata', value: 'Roti Prata' },
        { label: 'Salmon', value: 'Salmon' },
        { label: 'Taco', value: 'Taco' },
        { label: 'Vanilla Ice Cream', value: 'Vanilla Ice Cream' },
        { label: 'Cookies & Cream Ice Cream', value: 'Cookies & Cream Ice Cream' },
        { label: 'Italy', value: 'Italy' },
    ];

    const handleSubmit = () => {
        let score = 0;

        if (question1Answer === correctAnswers.question1) score++;
        if (question2Answer === correctAnswers.question2) score++;
        if (question3Answer === correctAnswers.question3) score++;
        if (question4Answer === correctAnswers.question4) score++;
        if (question5Answer === correctAnswers.question5) score++;
        if (question6Answer === correctAnswers.question6) score++;
        if (question7Answer === correctAnswers.question7) score++;
        if (question8Answer === correctAnswers.question8) score++;
        if (question9Answer === correctAnswers.question9) score++;
        if (question10Answer === correctAnswers.question10) score++;
        if (question11Answer === correctAnswers.question11) score++;
        if (question12Answer === correctAnswers.question12) score++;
        if (question13Answer === correctAnswers.question13) score++;
        if (question14Answer === correctAnswers.question14) score++;
        if (question15Answer === correctAnswers.question15) score++;

        let feedbackMessage = '';
        if (score === 15) {
            feedbackMessage = "Excellent! Perfect score!";
        } else if (score >= 14) {
            feedbackMessage = "Great job! You did really well!";
        } else if (score >= 8) {
            feedbackMessage = "Good effort! You're on the right track!";
        } else if (score >= 5) {
            feedbackMessage = "Nice try, but there’s room for improvement!";
        } else {
            feedbackMessage = "Don't worry, keep practicing!";
        }

        Alert.alert(`You got ${score} out of 15 correct! ${feedbackMessage}`);
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Icon name="bowl-food" size={20} color="#B23B23" style={styles.bowlIcon} />
                    <Text style={styles.headerText}>FOOD QUIZ</Text>
                    <Icon name="bowl-food" size={20} color="#B23B23" style={styles.bowlIcon} />
                </View>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome to the quiz! Good luck!</Text>
                <Icon name="clover" size={20} color="green" style={styles.cloverIcon} />
            </View>


            <InputBox label="Name:" onChangeText={(text) => setName(text)} />

            <Question
                question="Q1) What is the name of this food?"
                image={require('./img/cheese_pizza.jpg')}
                options={options}
                onValueChange={(value) => setQuestion1Answer(value)}
            />

            <Question
                question="Q2) What is the name of this food?"
                image={require('./img/aglioEolio_pasta.jpg')}
                options={options}
                onValueChange={(value) => setQuestion2Answer(value)}
            />

            <Question
                question="Q3) What is the name of this food?"
                image={require('./img/pho.jpg')}
                options={options}
                onValueChange={(value) => setQuestion3Answer(value)}
            />

            <Question
                question="Q4) What is the name of this food?"
                image={require('./img/pepperoni_pizza.jpg')}
                options={options}
                onValueChange={(value) => setQuestion4Answer(value)}
            />

            <Question
                question="Q5) What is the name of this food?"
                image={require('./img/kimchi_jjigae.jpg')}
                options={options}
                onValueChange={(value) => setQuestion5Answer(value)}
            />

            <Question
                question="Q6) What is the name of this food?"
                image={require('./img/chicken_rice.jpg')}
                options={options}
                onValueChange={(value) => setQuestion6Answer(value)}
            />

            <Question
                question="Q7) What is the name of this food?"
                image={require('./img/miso_ramen.jpg')}
                options={options}
                onValueChange={(value) => setQuestion7Answer(value)}
            />

            <Question
                question="Q8) What is the name of this food?"
                image={require('./img/tomato_risotto.jpg')}
                options={options}
                onValueChange={(value) => setQuestion8Answer(value)}
            />

            <Question
                question="Q9) What is the name of this food?"
                image={require('./img/japanese_curry_udon.jpg')}
                options={options}
                onValueChange={(value) => setQuestion9Answer(value)}
            />

            <Question
                question="Q10) What is the name of this food?"
                image={require('./img/roti_prata.jpg')}
                options={options}
                onValueChange={(value) => setQuestion10Answer(value)}
            />

            <Question
                question="Q11) What is the name of this food?"
                image={require('./img/taco.jpg')}
                options={options}
                onValueChange={(value) => setQuestion11Answer(value)}
            />

            <Question
                question="Q12) What is the name of this food?"
                image={require('./img/salmon.jpg')}
                options={options}
                onValueChange={(value) => setQuestion12Answer(value)}
            />

            <Question
                question="Q13) What is the name of this food?"
                image={require('./img/cookies&cream_icecream.jpg')}
                options={options}
                onValueChange={(value) => setQuestion13Answer(value)}
            />

            <Question
                question="Q14) What is the name of this dish?"
                image={require('./img/vanilla_icecream.jpg')}
                options={options}
                onValueChange={(value) => setQuestion14Answer(value)}
            />

            <Question
                question="Q15) Which country is this dish from?"
                image={require('./img/gelato.jpg')}
                options={options}
                onValueChange={(value) => setQuestion15Answer(value)}
            />

            <View style={{ marginTop: 30}}>
                <Button title="Submit Answers" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
};

export default MyApp;
