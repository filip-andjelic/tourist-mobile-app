import React from 'react';
import {Text , View , TextInput , Image , TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {NativeRouter , Route , Redirect} from "react-router-native";
import {GeneralStyle} from "../style/general.style";
import Toast from 'react-native-simple-toast';
import {switchScreen, currentFacility} from "../service/Redux.Actions";
import {Rating , AirbnbRating} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';

class SingleFacilityCard extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            redirect : ""
        };
        this.renderRatingElement.bind ( this )
    }

    renderRatingElement(rating) {
        /*star, star-o*/
        const TOTAL_STARS = 5;
        let totalRating = Math.round ( rating );
        let emptyStars = TOTAL_STARS - totalRating;
        let ratingArray = [];
        for (let i = 0; i<totalRating; i++) {
            ratingArray.push (
                <FontAwesome name="star" size={24} color="gold"/>
            )
        }
        for (let i = 0; i<emptyStars; i++) {
            ratingArray.push (
                <FontAwesome name="star-o" size={24} color="gold"/>
            )
        }
        return ratingArray;

    }

    render() {
        if (!!this.state.redirect) {
            return (<Redirect to={this.state.redirect}/>)
        }
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.updateCurrentFacility(this.props.facility);
                    this.setState ( { redirect : "facility-detail" } )
                }}>
                <View style={{
                    backgroundColor : "#FFF" ,
                    padding : 10 ,
                    margin : 8 ,
                    borderRadius : 10
                }}>
                    <Image style={{ height : 180 }}
                           source={{ uri : this.props.facility.photo }}/>
                    <View style={{ flexDirection : "row" , marginVertical : 10 }}>
                        <Text style={{ fontSize : 20 , fontWeight : 'bold' }}>{this.props.facility.type}</Text>
                        <Text style={{ fontSize : 20 , fontWeight : 'bold' }}> {this.props.facility.name}</Text>
                    </View>
                    <Text>Address: {this.props.facility.address}</Text>
                    <Text>Phone: {this.props.facility.phone}</Text>
                    <View style={{ flexDirection : "row" }}>
                        {this.renderRatingElement ( this.props.facility.rating )}
                    </View>
                    {/*<Rating imageSize={20} readonly startingValue={this.props.facility.rating}/>*/}
                </View>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    return ({ facilities : state.facilities })
};
const mapDispatchToProps = (dispatch) => {
    return ({
        updateCurrentFacility : (currentFacilityObject) => {
            dispatch ( currentFacility ( currentFacilityObject ) );
        }})
};

export const FacilityCard = connect ( mapStateToProps , mapDispatchToProps ) ( SingleFacilityCard );