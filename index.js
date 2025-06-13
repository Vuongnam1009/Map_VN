// fetch('./vn.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Use your data here
//   })
//   .catch(error => console.error('Error loading JSON:', error));
var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

myChart.showLoading();
$.get("/vn.json", function (geoJson) {
  console.log(geoJson);
  myChart.hideLoading();
  echarts.registerMap("HK", geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: "Phân bố cây rau rừng",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c} (p / km2)",
      },
      toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      visualMap: {
        min: 800,
        max: 50000,
        text: ["High", "Low"],
        realtime: false,
        calculable: true,
        inRange: {
          color: ["lightskyblue", "yellow", "orangered"],
        },
      },
      series: [
        {
          name: "香港18区人口密度",
          type: "map",
          map: "HK",
          label: {
            show: false,
          },
          data: [
            {
              name: "An Giang",
              value: 22306.02,
            },
            {
              name: "Bà Rịa - Vũng Tàu",
              value: 46947.39,
            },
            {
              name: "Bạc Liêu",
              value: 56141.12,
            },
            {
              name: "Bắc Giang",
              value: 47580.92,
            },
            {
              name: "Bắc Kạn",
              value: 53118.49,
            },
            {
              name: "Bắc Ninh",
              value: 33039.35,
            },
            {
              name: "Bến Tre",
              value: 13485.96,
            },
            {
              name: "Bình Dương",
              value: 14765.76,
            },
            {
              name: "Bình Định",
              value: 2424.66,
            },
            {
              name: "Bình Phước",
              value: 55495.86,
            },
            {
              name: "Bình Thuận",
              value: 43879.92,
            },
            {
              name: "Cà Mau",
              value: 51505.43,
            },
            {
              name: "Cao Bằng",
              value: 7377.21,
            },
            {
              name: "Cần Thơ",
              value: 9563.53,
            },
            {
              name: "Đà Nẵng",
              value: 50222.11,
            },
            {
              name: "Đắk Lắk",
              value: 39560.79,
            },
            {
              name: "Đắk Nông",
              value: 40827.38,
            },
            {
              name: "Điện Biên",
              value: 9456.92,
            },
            {
              name: "Đồng Nai",
              value: 14838.72,
            },
            {
              name: "Đồng Tháp",
              value: 13362.4,
            },
            {
              name: "Gia Lai",
              value: 1155.87,
            },
            {
              name: "Hà Giang",
              value: 33665.06,
            },
            {
              name: "Hà Nam",
              value: 50295.37,
            },
            {
              name: "Hà Nội",
              value: 31691.74,
            },
            {
              name: "Hà Tĩnh",
              value: 6526.83,
            },
            {
              name: "Hải Dương",
              value: 57730.99,
            },
            {
              name: "Hải Phòng",
              value: 12643.4,
            },
            {
              name: "Hậu Giang",
              value: 28047.6,
            },
            {
              name: "Hòa Bình",
              value: 32467.8,
            },
            {
              name: "Hưng Yên",
              value: 18080.37,
            },
            {
              name: "Khánh Hòa",
              value: 10352.37,
            },
            {
              name: "Kiên Giang",
              value: 36157.53,
            },
            {
              name: "Kon Tum",
              value: 8882.38,
            },
            {
              name: "Lai Châu",
              value: 57573.64,
            },
            {
              name: "Lâm Đồng",
              value: 17742.21,
            },
            {
              name: "Lạng Sơn",
              value: 42370.73,
            },
            {
              name: "Lào Cai",
              value: 53577.55,
            },
            {
              name: "Long An",
              value: 16042.56,
            },
            {
              name: "Nam Định",
              value: 17818.88,
            },
            {
              name: "Nghệ An",
              value: 3445.49,
            },
            {
              name: "Ninh Bình",
              value: 35393.92,
            },
            {
              name: "Ninh Thuận",
              value: 14969.27,
            },
            {
              name: "Phú Thọ",
              value: 44650.65,
            },
            {
              name: "Phú Yên",
              value: 23784.25,
            },
            {
              name: "Quảng Bình",
              value: 40249.39,
            },
            {
              name: "Quảng Nam",
              value: 40026.91,
            },
            {
              name: "Quảng Ngãi",
              value: 5320.68,
            },
            {
              name: "Quảng Ninh",
              value: 2022.44,
            },
            {
              name: "Quảng Trị",
              value: 51832.99,
            },
            {
              name: "Sóc Trăng",
              value: 43190.38,
            },
            {
              name: "Sơn La",
              value: 27788.17,
            },
            {
              name: "Tây Ninh",
              value: 37510.67,
            },
            {
              name: "Thái Bình",
              value: 29958.23,
            },
            {
              name: "Thái Nguyên",
              value: 2729.33,
            },
            {
              name: "Thanh Hóa",
              value: 31208.43,
            },
            {
              name: "Thừa Thiên - Huế",
              value: 46067.78,
            },
            {
              name: "Tiền Giang",
              value: 16814.99,
            },
            {
              name: "TP. Hồ Chí Minh",
              value: 25825.19,
            },
            {
              name: "Trà Vinh",
              value: 43997.87,
            },
            {
              name: "Tuyên Quang",
              value: 10951.05,
            },
            {
              name: "Vĩnh Long",
              value: 21044.71,
            },
            {
              name: "Vĩnh Phúc",
              value: 54223.08,
            },
            {
              name: "Yên Bái",
              value: 35852.63,
            },
          ],
        },
      ],
    })
  );
});

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
